import { useTheme } from "../hooks/useTheme";
import { SunIcon, MoonIcon, LaptopIcon } from "./Icons";

const options = [
  { value: "light", icon: SunIcon, label: "Light theme" },
  { value: "system", icon: LaptopIcon, label: "System theme" },
  { value: "dark", icon: MoonIcon, label: "Dark theme" },
];

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center gap-1 rounded-full border border-border bg-card p-1">
      {options.map(({ value, icon: Icon, label }) => (
        <button
          key={value}
          aria-label={label}
          onClick={() => setTheme(value)}
          className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors duration-300 ${
            theme === value
              ? "bg-primary text-white"
              : "text-muted hover:text-textmain"
          }`}
        >
          <Icon className="h-4 w-4" />
        </button>
      ))}
    </div>
  );
}
