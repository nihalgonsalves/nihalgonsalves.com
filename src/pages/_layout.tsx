import "../styles.css";

import type { ReactNode } from "react";

type RootLayoutProps = { children: ReactNode };

export default async function RootLayout({ children }: RootLayoutProps) {
	return (
		<>
			<title>Nihal Gonsalves</title>
			<meta charSet="utf-8" />
			<meta content="Nihal Gonsalves" name="author" />
			<meta content="width=device-width, initial-scale=1" name="viewport" />
			<link
				href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
				rel="stylesheet"
				type="text/css"
			/>
			<link
				href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css"
				rel="stylesheet"
				type="text/css"
			/>

			<div className="container">{children}</div>
		</>
	);
}

export const getConfig = async () => {
	return {
		render: "static",
	};
};
