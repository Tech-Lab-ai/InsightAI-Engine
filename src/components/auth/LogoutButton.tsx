'use client';

import React from 'react';
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { LogOut } from "lucide-react";
import { LogoutConfirmModal } from './LogoutConfirmModal';

export function LogoutButton() {
  const handleLogout = () => {
    // Clear local frontend data
    localStorage.clear();
    sessionStorage.clear();

    // Clear non-HttpOnly cookies
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i];
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
    }

    // Redirect user to the login page
    window.location.href = '/login';
  };

  return (
    <LogoutConfirmModal onConfirm={handleLogout}>
      <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
        <LogOut className="mr-2 h-4 w-4" />
        <span>Sair</span>
      </DropdownMenuItem>
    </LogoutConfirmModal>
  );
}
