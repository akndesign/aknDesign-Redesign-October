import { create } from 'zustand';

interface ThemeStoreInterface {
	isMenuOpen: boolean;
	setIsMenuOpen: (isMenuOpen: boolean) => void;
	isCollapseOpen: boolean;
	setIsCollapseOpen: (isCollapseOpen: boolean) => void;
	isSnackbarOpen: boolean;
	setIsSnackbarOpen: (isSnackbarOpen: boolean) => void;
}

export const useThemeStore = create<ThemeStoreInterface>((set) => ({
	isMenuOpen: false,
	setIsMenuOpen: (isMenuOpen) => set({ isMenuOpen }),
	isCollapseOpen: false,
	setIsCollapseOpen: (isCollapseOpen) => set({ isCollapseOpen }),
	isSnackbarOpen: false,
	setIsSnackbarOpen: (isSnackbarOpen) => set({ isSnackbarOpen }),
}));
