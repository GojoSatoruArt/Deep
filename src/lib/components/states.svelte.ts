import { writable } from "svelte/store";
export const sidebar = writable("Dashboard");
export const searchQuery = writable("");
export const searchFocused = writable(false);
export const isMobile = writable(false);
