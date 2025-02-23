import type { ReactNode } from "react";

type RootElementProps = { children: ReactNode };

export default async function RootElement({ children }: RootElementProps) {
	return (
		<html lang="en">
			<head>
				<title>Nihal Gonsalves</title>
				<meta charSet="utf-8" />
				<meta content="Nihal Gonsalves" name="author" />
				<meta name="description" content="Software Engineer in Berlin, DE" />
				<meta content="width=device-width, initial-scale=1" name="viewport" />
				<link
					rel="preload"
					href="/InterVariable.woff2"
					as="font"
					type="font/woff2"
					crossOrigin="anonymous"
				/>
				<link
					rel="preload"
					href="/InterVariable-Italic.woff2"
					as="font"
					type="font/woff2"
					crossOrigin="anonymous"
				/>
			</head>
			<body>{children}</body>
		</html>
	);
}

export const getConfig = async () => {
	return {
		render: "static",
	};
};
