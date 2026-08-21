import express from 'express';
import sqlite3 from 'sqlite3';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Enable CORS for frontend communication
app.use(cors());

// Parse JSON request bodies
app.use(express.json());

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

let dbSQLite = null;
let supabase = null;
let useSupabase = false;

// Check if Supabase env variables are loaded and are not the default placeholders
if (supabaseUrl && supabaseKey && supabaseUrl !== 'https://your-project-id.supabase.co' && supabaseKey !== 'your-anon-or-service-role-key') {
  console.log('Initializing Supabase client...');
  supabase = createClient(supabaseUrl, supabaseKey);
  useSupabase = true;
  console.log('Supabase mode active.');
} else {
  console.warn('⚠️ WARNING: SUPABASE_URL and SUPABASE_KEY are not configured in your environment.');
  console.warn('Falling back to local SQLite database (medroa.db).');
  
  const dbPath = path.join(__dirname, 'medroa.db');
  dbSQLite = new sqlite3.Database(dbPath, (err) => {
    if (err) {
      console.error('Error opening SQLite database connection:', err.message);
    } else {
      console.log('Connected to SQLite database at:', dbPath);
      // Create contacts table if it does not exist
      dbSQLite.run(`
        CREATE TABLE IF NOT EXISTS contacts (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT NOT NULL,
          email TEXT NOT NULL,
          phone TEXT,
          company TEXT,
          project_type TEXT,
          message TEXT NOT NULL,
          created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
      `, (err) => {
        if (err) {
          console.error('Error creating contacts table:', err.message);
        } else {
          console.log('SQLite contacts table is ready.');
        }
      });
    }
  });
}

// Endpoint to store a new contact submission
app.post('/api/contact', async (req, res) => {
  const { name, email, phone, company, projectType, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required fields.' });
  }

  if (useSupabase) {
    try {
      const { data, error } = await supabase
        .from('contacts')
        .insert([
          {
            name,
            email,
            phone: phone || null,
            company: company || null,
            project_type: projectType || null,
            message
          }
        ])
        .select();

      if (error) {
        console.error('Error inserting to Supabase:', error.message);
        return res.status(500).json({ error: 'Failed to save to Supabase: ' + error.message });
      }

      const insertedId = data && data[0] ? data[0].id : null;
      console.log(`Saved new lead in Supabase! ID: ${insertedId} (${name})`);
      return res.status(201).json({
        success: true,
        message: 'Contact request saved to Supabase successfully.',
        id: insertedId
      });
    } catch (err) {
      console.error('Catch error Supabase insert:', err);
      return res.status(500).json({ error: 'Internal server error saving to Supabase.' });
    }
  } else {
    // SQLite Fallback
    const query = `
      INSERT INTO contacts (name, email, phone, company, project_type, message)
      VALUES (?, ?, ?, ?, ?, ?)
    `;
    const params = [
      name,
      email,
      phone || null,
      company || null,
      projectType || null,
      message
    ];

    dbSQLite.run(query, params, function (err) {
      if (err) {
        console.error('Error saving contact to SQLite:', err.message);
        return res.status(500).json({ error: 'Failed to save contact submission.' });
      }
      
      console.log(`Saved new lead in SQLite! ID: ${this.lastID} (${name})`);
      return res.status(201).json({
        success: true,
        message: 'Contact request saved to SQLite successfully.',
        id: this.lastID
      });
    });
  }
});

// Endpoint to view all submissions (primarily for testing/auditing)
app.get('/api/contact', async (req, res) => {
  if (useSupabase) {
    try {
      const { data, error } = await supabase
        .from('contacts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching from Supabase:', error.message);
        return res.status(500).json({ error: 'Failed to fetch from Supabase.' });
      }

      return res.json(data);
    } catch (err) {
      console.error('Catch error Supabase fetch:', err);
      return res.status(500).json({ error: 'Internal server error fetching from Supabase.' });
    }
  } else {
    // SQLite Fallback
    dbSQLite.all('SELECT * FROM contacts ORDER BY created_at DESC', [], (err, rows) => {
      if (err) {
        console.error('Error fetching contacts from SQLite:', err.message);
        return res.status(500).json({ error: 'Failed to retrieve contact records.' });
      }
      return res.json(rows);
    });
  }
});

// Serve Vite frontend static assets in production
app.use(express.static(path.join(__dirname, 'dist')));

// Fallback all other routes to frontend SPA router in production
app.get('*', (req, res) => {
  const indexPath = path.join(__dirname, 'dist', 'index.html');
  res.sendFile(indexPath, (err) => {
    if (err) {
      res.status(404).send('Not found. If you are in development, make sure to access through Vite dev server.');
    }
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Express API Server is running on http://localhost:${PORT}`);
});
