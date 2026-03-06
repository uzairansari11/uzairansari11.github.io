export type AccentColor = "purple" | "blue" | "green" | "orange" | "rose"

export interface ColorConfig {
  label: string
  value: AccentColor
  // HSL values for light mode
  light: {
    primary: string
    primaryForeground: string
    ring: string
  }
  // HSL values for dark mode
  dark: {
    primary: string
    primaryForeground: string
    ring: string
  }
  // Preview color for the swatch (hex)
  swatch: string
}

export const accentColors: ColorConfig[] = [
  {
    label: "Purple",
    value: "purple",
    light: {
      primary: "262.1 83.3% 57.8%",
      primaryForeground: "210 20% 98%",
      ring: "262.1 83.3% 57.8%",
    },
    dark: {
      primary: "263.4 70% 50.4%",
      primaryForeground: "210 20% 98%",
      ring: "263.4 70% 50.4%",
    },
    swatch: "#7c3aed",
  },
  {
    label: "Blue",
    value: "blue",
    light: {
      primary: "221.2 83.2% 53.3%",
      primaryForeground: "210 40% 98%",
      ring: "221.2 83.2% 53.3%",
    },
    dark: {
      primary: "217.2 91.2% 59.8%",
      primaryForeground: "222.2 47.4% 11.2%",
      ring: "224.3 76.3% 48%",
    },
    swatch: "#3b82f6",
  },
  {
    label: "Green",
    value: "green",
    light: {
      primary: "142.1 76.2% 36.3%",
      primaryForeground: "355.7 100% 97.3%",
      ring: "142.1 76.2% 36.3%",
    },
    dark: {
      primary: "142.1 70.6% 45.3%",
      primaryForeground: "144.9 80.4% 10%",
      ring: "142.4 71.8% 29.2%",
    },
    swatch: "#16a34a",
  },
  {
    label: "Orange",
    value: "orange",
    light: {
      primary: "24.6 95% 53.1%",
      primaryForeground: "60 9.1% 97.8%",
      ring: "24.6 95% 53.1%",
    },
    dark: {
      primary: "20.5 90.2% 48.2%",
      primaryForeground: "60 9.1% 97.8%",
      ring: "20.5 90.2% 48.2%",
    },
    swatch: "#f97316",
  },
  {
    label: "Rose",
    value: "rose",
    light: {
      primary: "346.8 77.2% 49.8%",
      primaryForeground: "355.7 100% 97.3%",
      ring: "346.8 77.2% 49.8%",
    },
    dark: {
      primary: "346.8 77.2% 49.8%",
      primaryForeground: "355.7 100% 97.3%",
      ring: "346.8 77.2% 49.8%",
    },
    swatch: "#e11d48",
  },
]

export const defaultAccent: AccentColor = "blue"
