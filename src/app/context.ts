import { createContext } from "react";

type Theme = "light" | "dark";

interface ThemeContextProps {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}

// 创建一个主题上下文
const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);
