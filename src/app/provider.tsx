import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextProps {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}

// 创建一个主题上下文
const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);
// 主题提供者组件
export const ThemeProvider: React.FC<any> = ({ children }) => {
  // 创建一个状态来保存主题
  const [theme, setTheme] = useState<Theme>("light");

  // 使用 useEffect 来在组件加载时从 localStorage 中获取主题
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme;
    setTheme(savedTheme || "light");
  }, []);

  // 使用 useEffect 来在主题改变时保存主题到 localStorage
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  // 使用主题上下文来提供主题和设置主题的函数
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 自定义的 useTheme 钩子
export const useTheme = () => {
  // 使用 useContext 来从主题上下文获取主题和设置主题的函数
  const context = useContext(ThemeContext);
  // 如果 useTheme 不在 ThemeProvider 内部被调用，那么抛出错误
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
