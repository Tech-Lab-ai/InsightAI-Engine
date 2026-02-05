'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

export function InstallPwaButton() {
  const [installPrompt, setInstallPrompt] = useState<any>(null);

  useEffect(() => {
    // Register the service worker
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js')
            .then((registration) => console.log('Service Worker registered with scope:', registration.scope))
            .catch((error) => console.error('Service Worker registration failed:', error));
    }

    // Listen for the install prompt
    const handler = (e: Event) => {
      e.preventDefault();
      setInstallPrompt(e);
    };
    window.addEventListener('beforeinstallprompt', handler);

    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstallClick = () => {
    if (!installPrompt) {
      return;
    }
    installPrompt.prompt();
    installPrompt.userChoice.then((choiceResult: { outcome: string }) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
      } else {
        console.log('User dismissed the A2HS prompt');
      }
      setInstallPrompt(null);
    });
  };

  if (!installPrompt) {
    return null;
  }

  return (
    <Button variant="outline" size="sm" onClick={handleInstallClick} className="hidden md:inline-flex">
      <Download className="mr-2 h-4 w-4" />
      Instalar App
    </Button>
  );
}
