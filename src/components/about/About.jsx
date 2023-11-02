import "./about.css";
function About() {
	const openLink = (url) => {
		window.open(url);
	};
	return (
		<div className="about section" id="about">
			<h1 className="aboutH1">About Me</h1>
			<div className="aboutWrapper">
				<div className="aboutWrapperDiv">
					<div className="aboutMe" id="user-detail-intro">
						A highly motivated Full Stack Web Developer experienced in the MERN
						Stack, proficient in HTML, CSS, JavaScript, React, Redux, Node.js,
						Express.js, and Chakra UI. Skilled in web and mobile development,
						with React Native expertise. Seeking challenges and opportunities to
						excel in a dynamic organization.
					</div>

					<div className="about-socialLink">
						<img
							onClick={() => openLink("https://github.com/uzairansari11")}
							src={process.env.PUBLIC_URL + "./Images/github.png"}
							alt="About"
						/>
						<img
							onClick={() =>
								openLink("https://www.linkedin.com/in/uzairansari11")
							}
							src={process.env.PUBLIC_URL + "./Images/linkedin1.png"}
							alt="About"
						/>
					</div>
				</div>

				<div className="aboutWrapperExp">
					<div>
						{" "}
						<span
							style={{ color: "teal", fontSize: "40px", fontWeight: "500" }}
						>
							{" "}
							1200+{" "}
						</span>{" "}
						<br /> Hrs Coding
					</div>
					<div>
						<div>
							{" "}
							<span
								style={{ color: "teal", fontSize: "40px", fontWeight: "500" }}
							>
								{" "}
								30+{" "}
							</span>{" "}
							<br /> Mini Projects{" "}
						</div>
						<div>
							{" "}
							<span
								style={{ color: "teal", fontSize: "40px", fontWeight: "500" }}
							>
								{" "}
								5+{" "}
							</span>{" "}
							<br /> Major Projects{" "}
						</div>
						<div>
							{" "}
							<span
								style={{ color: "teal", fontSize: "40px", fontWeight: "500" }}
							>
								{" "}
								300+{" "}
							</span>{" "}
							<br /> DSA Problem{" "}
						</div>
						<div>
							{" "}
							<span
								style={{ color: "teal", fontSize: "40px", fontWeight: "500" }}
							>
								{" "}
								200+{" "}
							</span>{" "}
							<br /> Hrs Soft Skills{" "}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
