import {
	GithubIcon,
	InstagramIcon,
	LinkedinIcon,
	MailIcon,
	MapPinHouseIcon,
} from "lucide-react";

export default async function HomePage() {
	return (
		<div className="grid h-full place-items-center p-4 lg:p-8">
			<div className="flex h-full w-full max-w-[1400px] flex-col gap-8 rounded-lg border bg-card p-8 text-card-foreground lg:h-auto lg:flex-row lg:items-center">
				<img
					alt="Profile"
					src="/images/profile.webp"
					className="size-[150px] rounded-lg"
				/>
				<main className="flex flex-col gap-4">
					<h1 className="text-3xl lg:text-4xl">Nihal Gonsalves</h1>
					<section>
						<h2 className="text-lg">Staff Software Engineer</h2>
						<div className="flex items-center gap-2">
							<MapPinHouseIcon aria-label="Location" className="size-5" />
							Berlin, Germany
						</div>
					</section>
					<section className="flex flex-col gap-2 lg:flex-row">
						<a
							href="mailto:me@nihalgonsalv.es"
							className="flex shrink-0 items-center gap-2 rounded border px-2 py-1 hover:border-primary"
						>
							<MailIcon
								className="relative top-[1px] size-5 shrink-0"
								aria-label="Email"
							/>
							me@nihalgonsalv.es
						</a>

						<a
							href="https://www.linkedin.com/in/nihal-gonsalves"
							className="flex shrink-0 items-center gap-2 rounded border px-2 py-1 hover:border-primary"
						>
							<LinkedinIcon className="size-5 shrink-0" aria-label="LinkedIn" />
							Nihal Gonsalves
						</a>

						<a
							href="https://github.com/nihalgonsalves"
							className="flex shrink-0 items-center gap-2 rounded border px-2 py-1 hover:border-primary"
						>
							<GithubIcon
								className="relative top-[1px] size-5 shrink-0"
								aria-label="GitHub"
							/>
							nihalgonsalves
						</a>

						<a
							href="https://www.instagram.com/nihalgonsalves"
							className="flex shrink-0 items-center gap-2 rounded border px-2 py-1 hover:border-primary"
						>
							<InstagramIcon
								className="relative top-[1px] size-5 shrink-0"
								aria-label="Instagram"
							/>
							nihalgonsalves
						</a>
					</section>
				</main>
			</div>
		</div>
	);
}

export const getConfig = async () => {
	return {
		render: "static",
	};
};
