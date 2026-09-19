import { create } from "zustand";

export const useFilter = create((set) => ({
    setFilter:"",
}))