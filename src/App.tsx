/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomeView } from './components/HomeView';
import { ContactView } from './components/ContactView';
import { TermsView } from './components/TermsView';
import { PrivacyView } from './components/PrivacyView';
import { ChatModal } from './components/ChatModal';
import { ActiveTab } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('inicio');
  const [prefillProject, setPrefillProject] = useState<string>('');

  const handleNavigateToContact = (category?: string) => {
    if (category) {
      setPrefillProject(category);
    }
    setActiveTab('contacto');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTabChange = (tab: ActiveTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#faf9f5] text-[#141413] font-serif antialiased selection:bg-[#8c5dd9] selection:text-[#faf9f5]">
      {/* Top App Bar Navigation */}
      <Header activeTab={activeTab} onSelectTab={handleTabChange} />

      {/* Main View Transition */}
      <div className="flex-grow flex flex-col w-full">
        {activeTab === 'inicio' && (
          <HomeView
            onNavigateToContact={handleNavigateToContact}
            onNavigateToTab={handleTabChange}
          />
        )}

        {activeTab === 'contacto' && (
          <ContactView initialProjectType={prefillProject} />
        )}

        {activeTab === 'terminos' && (
          <TermsView onNavigateToTab={handleTabChange} />
        )}

        {activeTab === 'privacidad' && (
          <PrivacyView onNavigateToTab={handleTabChange} />
        )}
      </div>

      {/* Editorial Footer */}
      <Footer activeTab={activeTab} onSelectTab={handleTabChange} />

      {/* Direct Inquiries & WhatsApp Floating Helper */}
      <ChatModal />
    </div>
  );
}

