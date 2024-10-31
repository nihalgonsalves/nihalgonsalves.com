import {
	GithubIcon,
	InstagramIcon,
	LinkedinIcon,
	MailIcon,
	MapPinHouseIcon,
} from "lucide-react";

export default async function HomePage() {
	return (
		<div className="h-full lg:p-8 dark:bg-slate-950">
			<div className="flex h-full flex-col gap-8 bg-sky-950 p-8 text-gray-200 lg:h-auto lg:flex-row lg:items-center lg:rounded-lg">
				<img
					className="max-w-48 rounded-full"
					alt="Profile"
					src="/images/profile.webp"
				/>
				<main className="relative bottom-2 flex flex-col gap-4">
					<h1 className="text-4xl">Nihal Gonsalves</h1>
					<section>
						<h2 className="text-lg">Senior Software Engineer</h2>
						<div className="flex items-center gap-2">
							<MapPinHouseIcon aria-label="Location" className="size-5" />
							Berlin, Germany
						</div>
					</section>
					<section className="flex flex-col gap-2 lg:flex-row lg:gap-4">
						<a
							href="mailto:me@nihalgonsalv.es"
							className="flex items-center gap-2 underline hover:no-underline"
						>
							<MailIcon
								className="relative top-[1px] size-5 shrink-0 text-white"
								aria-label="Email"
							/>
							me@nihalgonsalv.es
						</a>

						<a
							href="https://www.linkedin.com/in/nihal-gonsalves"
							className="flex items-center gap-2 underline hover:no-underline"
						>
							<LinkedinIcon
								className="size-5 shrink-0 text-white"
								aria-label="LinkedIn"
							/>
							Nihal Gonsalves
						</a>

						<a
							href="https://github.com/nihalgonsalves"
							className="flex items-center gap-2 underline hover:no-underline"
						>
							<GithubIcon
								className="relative top-[1px] size-5 shrink-0 text-white"
								aria-label="GitHub"
							/>
							nihalgonsalves
						</a>

						<a
							href="https://www.instagram.com/nihalgonsalves"
							className="flex items-center gap-2 underline hover:no-underline"
						>
							<InstagramIcon
								className="relative top-[1px] size-5 shrink-0 text-white"
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
