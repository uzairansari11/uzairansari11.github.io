export type AccentColor = "indigo" | "cyan" | "emerald" | "amber" | "rose"

export interface ColorConfig {
  label: string
  value: AccentColor
  light: {
    primary: string
    primaryForeground: string
    ring: string
  }
  dark: {
    primary: string
    primaryForeground: string
    ring: string
  }
  swatch: string
}

export const accentColors: ColorConfig[] = [
  {
    label: "Indigo",
    value: "indigo",
    light: {
      primary: "239 84% 67%",
      primaryForeground: "0 0% 100%",
      ring: "239 84% 67%",
    },
    dark: {
      primary: "239 84% 67%",
      primaryForeground: "0 0% 100%",
      ring: "239 84% 67%",
    },
    swatch: "#6366f1",
  },
  {
    label: "Cyan",
    value: "cyan",
    light: {
      primary: "187 86% 43%",
      primaryForeground: "0 0% 100%",
      ring: "187 86% 43%",
    },
    dark: {
      primary: "187 86% 53%",
      primaryForeground: "0 0% 5%",
      ring: "187 86% 53%",
    },
    swatch: "#06b6d4",
  },
  {
    label: "Emerald",
    value: "emerald",
    light: {
      primary: "160 84% 39%",
      primaryForeground: "0 0% 100%",
      ring: "160 84% 39%",
    },
    dark: {
      primary: "160 68% 48%",
      primaryForeground: "0 0% 5%",
      ring: "160 68% 48%",
    },
    swatch: "#10b981",
  },
  {
    label: "Amber",
    value: "amber",
    light: {
      primary: "38 92% 50%",
      primaryForeground: "0 0% 100%",
      ring: "38 92% 50%",
    },
    dark: {
      primary: "38 92% 55%",
      primaryForeground: "0 0% 5%",
      ring: "38 92% 55%",
    },
    swatch: "#f59e0b",
  },
  {
    label: "Rose",
    value: "rose",
    light: {
      primary: "350 89% 60%",
      primaryForeground: "0 0% 100%",
      ring: "350 89% 60%",
    },
    dark: {
      primary: "350 89% 60%",
      primaryForeground: "0 0% 100%",
      ring: "350 89% 60%",
    },
    swatch: "#f43f5e",
  },
]

export const defaultAccent: AccentColor = "cyan"
