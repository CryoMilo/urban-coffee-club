import { ThemeProvider } from "next-themes";

const Providers = ({ children }) => {
	return (
		<ThemeProvider defaultTheme="system" attribute="class" enableSystem>
			{children}
		</ThemeProvider>
	);
};

export default Providers;
