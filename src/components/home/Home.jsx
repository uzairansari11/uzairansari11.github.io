import { useEffect, useState } from "react";
import "./home.css";

import { HiDownload } from "react-icons/hi";

function Home() {
	const [screenSize, setScreenSize] = useState({
		width: window.innerWidth
	});
	useEffect(() => {

	}, [screenSize.width])
	const openLink = (url) => {
		window.open(url);
	};
	return (
		<div className="home-main" id="home">
			<div className="homeWrapper">
				<div className="homeLeft">
					<div id="user-detail-name">
						Hello I Am <br />
						<span style={{ color: "teal" }}>U</span>zair{" "}
						<span style={{ color: "teal" }}>A</span>nsari
					</div>

					<div >
						<img
							id="user-detail-intro"
							src={
								screenSize.width <= 1024
									? "https://readme-typing-svg.herokuapp.com?font=Archivo&weight=400&size=25&pause=1000&color=000000&background=39393900&center=true&vCenter=true&lines=A+Full+Stack+Web+Developer;An+Enthusiast+%26+Life+Long+Learner"
									: "https://readme-typing-svg.herokuapp.com?font=Archivo&weight=400&size=25&pause=1000&color=000000&background=39393900&vCenter=true&&lines=A+Full+Stack+Web+Developer;An+Enthusiast+%26+Life+Long+Learner"
							}

							alt="Typing SVG"
						
						/>
					</div>

					<a
						href="https://drive.google.com/uc?id=1OT-kgHq6aB7NFX32qP5AJUISBtMEM8jw&export=download"
						id="resume-link-2"
					>
						<div
							onClick={() =>
								openLink(
									"https://drive.google.com/file/d/1OT-kgHq6aB7NFX32qP5AJUISBtMEM8jw/view?usp=share_link",
								)
							}
							className="home-resume"
							id="resume-button-2"
						>
							Resume <HiDownload />
						</div>
					</a>
				</div>

				<div className="homeright">
					<img
						className="home-img"
						src={process.env.PUBLIC_URL + "./Images/profile.png"}
						alt="profile"
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
