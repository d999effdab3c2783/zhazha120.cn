export type ThemeMode = 'light' | 'system' | 'dark'
export type ActualThemeMode = Exclude<ThemeMode, 'system'>