"use client";

import { useEffect, useState } from "react";

import { SettingsModal } from "@/components/modals/setting-modal";
import { FileEditModal } from "@/components/modals/edit-file-modal";
import { AddFileModal } from "@/components/modals/add-file-modal";

export const ModalProvider = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }
  
  return (
    <>
      <SettingsModal />
      <FileEditModal />
      <AddFileModal />
    </>
  )
}