import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/dist/types";
import { create } from "zustand";

interface UseAddFileModalProps {
  isOpen: boolean;
  data: KindeUser | null;
  onOpen: (team: KindeUser) => void;
  onClose: () => void;
}

export const UseAddFileModal = create<UseAddFileModalProps>((set) => ({
  isOpen: false,
  data: null,
  onOpen: (team) => set({ isOpen: true, data: team }),
  onClose: () => set({ isOpen: false }),
}));