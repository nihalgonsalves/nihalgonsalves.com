import type { ReactNode } from "react";

import "../styles.css";

type RootElementProps = { children: ReactNode };

const getCsp = () => {
	const config: [
		string,
		("'self'" | "'unsafe-inline'" | `https://${string}` | "*")[],
	][] = [
		["default-src", ["'self'"]],
		["script-src", ["'self'", "'unsafe-inline'"]],
		[
			"style-src",
			[
				"'self'",
				...(import.meta.env.DEV ? ["'unsafe-inline'" as const] : []),
				"https://fonts.googleapis.com/css2",
			],
		],
		["font-src", ["'self'", "https://fonts.gstatic.com"]],
	];

	if (import.meta.env.DEV) {
		config.push(["connect-src", ["*"]]);
	}

	return config
		.map(([directive, sources]) => {
			return `${directive} ${sources.join(" ")}`;
		})
		.join("; ");
};

export default async function RootElement({ children }: RootElementProps) {
	return (
		<html lang="en">
			<head>
				<meta httpEquiv="Content-Security-Policy" content={getCsp()} />
				<title>Nihal Gonsalves</title>
				<meta charSet="utf-8" />
				<meta content="Nihal Gonsalves" name="author" />
				<meta name="description" content="Software Engineer in Berlin, DE" />
				<meta content="width=device-width, initial-scale=1" name="viewport" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
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
