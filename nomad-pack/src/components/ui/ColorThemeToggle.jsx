"use client"

import { useTheme } from 'next-themes'
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'
import {useEffect, useState} from "react";


export default function ColorThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false);

    // Prevent hydration errors by delaying rendering until after mount
    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    return (
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "dark" ? (
                <SunIcon className="text-contrast-foreground size-5" />
            ) : (
                <MoonIcon className="text-contrast-foreground size-5" />
            )}
        </button>
    );
}