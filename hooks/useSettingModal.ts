import { Team } from "@/types";
import { create } from "zustand";

interface UseSettingModalProps {
  isOpen: boolean;
  data: Team | null;
  onOpen: (team: Team) => void;
  onClose: () => void;
}

export const UseSettingModal = create<UseSettingModalProps>((set) => ({
  isOpen: false,
  data: null,
  onOpen: (team) => set({ isOpen: true, data: team }),
  onClose: () => set({ isOpen: false }),
}));