"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from "@/components/ui/switch"; // ShadCN switch component
import { Moon, Sun } from "lucide-react"; // Icon pack

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch by ensuring this only runs on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDarkMode = theme === "dark";

  return (
    <div className="flex items-center space-x-2">
      <Sun className="w-4 h-4 text-gray-700 dark:text-gray-400" />
      <Switch
        checked={isDarkMode}
        onCheckedChange={() => setTheme(isDarkMode ? "light" : "dark")}
      />
      <Moon className="w-4 h-4 text-gray-700 dark:text-gray-400" />
    </div>
  );
}
