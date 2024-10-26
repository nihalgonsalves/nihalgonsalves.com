import "./index.css";

export default async function HomePage() {
	return (
		<div>
			<div>
				<img className="profile-img" alt="Profile" src="/images/profile.webp" />
				<main>
					<h1>Nihal Gonsalves</h1>
					<h2>Senior Software Engineer</h2>
					<ul className="key-data">
						<li>
							<i className="fa fa-map-marker" /> Berlin, Germany
						</li>
					</ul>
					<ul className="link-icons">
						<li>
							<a title="Email" href="mailto:me@nihalgonsalv.es">
								<i className="fa fa-envelope" />
							</a>
						</li>
						<li>
							<a
								title="LinkedIn: Nihal Gonsalves"
								href="https://www.linkedin.com/in/nihal-gonsalves"
							>
								<i className="fa fa-linkedin" />
							</a>
						</li>
						<li>
							<a
								title="GitHub: nihalgonsalves"
								href="https://github.com/nihalgonsalves"
							>
								<i className="fa fa-github" />
							</a>
						</li>
						<li>
							<a
								title="Instagram: @nihalgonsalves"
								href="https://www.instagram.com/nihalgonsalves"
							>
								<i className="fa fa-instagram" />
							</a>
						</li>
					</ul>
				</main>
				<div style={{ clear: "both" }} />
			</div>
		</div>
	);
}

export const getConfig = async () => {
	return {
		render: "static",
	};
};
