import { File } from "@/types";
import { create } from "zustand";

interface UseFileEditProps {
  isOpen: boolean;
  data: File | null;
  onOpen: (file: File) => void;
  onClose: () => void;
}

export const UseFileEditModal = create<UseFileEditProps>((set) => ({
  isOpen: false,
  data: null,
  onOpen: (file) => set({ isOpen: true, data: file }),
  onClose: () => set({ isOpen: false }),
}));