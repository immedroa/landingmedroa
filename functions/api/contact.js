export async function onRequestPost(context) {
  const { request, env } = context;

  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
    'Content-Type': 'application/json'
  };

  try {
    const body = await request.json();
    const { name, email, phone, company, projectType, message } = body;

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ success: false, error: 'Nombre, correo electrónico y mensaje son obligatorios.' }),
        { status: 400, headers: corsHeaders }
      );
    }

    const supabaseUrl = env.SUPABASE_URL || env.VITE_SUPABASE_URL;
    const supabaseKey = env.SUPABASE_KEY || env.VITE_SUPABASE_KEY || env.SUPABASE_ANON_KEY || env.VITE_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey || supabaseUrl.includes('your-project-id')) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Faltan las variables de entorno SUPABASE_URL y SUPABASE_KEY en la configuración de Cloudflare Pages.' 
        }),
        { status: 500, headers: corsHeaders }
      );
    }

    const cleanUrl = supabaseUrl.replace(/\/$/, '');
    const response = await fetch(`${cleanUrl}/rest/v1/contacts`, {
      method: 'POST',
      headers: {
        'apikey': supabaseKey,
        'Authorization': `Bearer ${supabaseKey}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=representation'
      },
      body: JSON.stringify([{
        name,
        email,
        phone: phone || null,
        company: company || null,
        project_type: projectType || null,
        message
      }])
    });

    const resData = await response.json().catch(() => null);

    if (!response.ok) {
      console.error('Error de Supabase:', resData);
      const errMsg = resData?.message || resData?.error || resData?.hint || 'Error de permisos o tabla inexistente en Supabase.';
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: `Error de Supabase (${response.status}): ${errMsg}` 
        }),
        { status: response.status, headers: corsHeaders }
      );
    }

    const insertedId = resData && resData[0] ? resData[0].id : null;

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Solicitud de contacto guardada en Supabase correctamente.',
        id: insertedId
      }),
      { status: 201, headers: corsHeaders }
    );

  } catch (err) {
    return new Response(
      JSON.stringify({ success: false, error: 'Error procesando la solicitud en Cloudflare Function: ' + err.message }),
      { status: 500, headers: corsHeaders }
    );
  }
}

export async function onRequestGet(context) {
  const { env } = context;
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  };

  const supabaseUrl = env.SUPABASE_URL || env.VITE_SUPABASE_URL;
  const supabaseKey = env.SUPABASE_KEY || env.VITE_SUPABASE_KEY || env.SUPABASE_ANON_KEY || env.VITE_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    return new Response(
      JSON.stringify({ error: 'Supabase credentials not configured' }),
      { status: 500, headers: corsHeaders }
    );
  }

  try {
    const cleanUrl = supabaseUrl.replace(/\/$/, '');
    const response = await fetch(`${cleanUrl}/rest/v1/contacts?select=*&order=created_at.desc`, {
      headers: {
        'apikey': supabaseKey,
        'Authorization': `Bearer ${supabaseKey}`
      }
    });
    const data = await response.json();
    return new Response(JSON.stringify(data), { status: response.status, headers: corsHeaders });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500, headers: corsHeaders });
  }
}

export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS'
    }
  });
}
