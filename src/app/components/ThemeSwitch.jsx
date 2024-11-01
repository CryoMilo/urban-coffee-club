"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeSwitch = () => {
	const [mounted, setMounted] = useState(false);
	const { setTheme, resolvedTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<div className="flex gap-4">
			<button onClick={() => setTheme("light")}>Light</button>
			<button onClick={() => setTheme("dark")}>Dark</button>
			<p>Current Theme is : {resolvedTheme}</p>
		</div>
	);
};

export default ThemeSwitch;
