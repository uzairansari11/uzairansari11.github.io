import {
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerOverlay,
	useDisclosure,
} from "@chakra-ui/react";
import { CgMenuGridO } from "react-icons/cg";
import { HiDownload } from "react-icons/hi";
import { Link } from "react-scroll";
import "./navbar.css";

function Navbar() {
	const openLink = (url) => {
		window.open(url);
	};

	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<div id="nav-menu" className="navbar">
			<div className="wrapper">
				<div className="wrapperLeft">
					<Link to="home" smooth={true} offset={-50} duration={500}>
						<img src="./logo.png" alt="icon" />
					</Link>
				</div>
				<div className="wrapperRight">
					<div>
						<Link
							to="home"
							smooth={true}
							offset={-50}
							duration={500}
							className="nav-link home"
						>
							Home
						</Link>
					</div>
					<div>
						<Link
							to="about"
							smooth={true}
							offset={-50}
							duration={500}
							className="nav-link about"
						>
							About
						</Link>
					</div>
					<div>
						<Link
							to="skills"
							smooth={true}
							offset={-50}
							duration={500}
							className="nav-link skills"
						>
							Skills
						</Link>
					</div>

					<div>
						<Link
							to="projects"
							smooth={true}
							offset={-50}
							duration={500}
							className="nav-link projects"
						>
							Projects
						</Link>
					</div>
					{/* <div>
						<Link
							to="github-main"
							smooth={true}
							offset={-50}
							duration={500}
							className="nav-link skills"
						>
							Github
						</Link>
					</div> */}
					<div>
						<Link
							to="contact"
							smooth={true}
							offset={-50}
							duration={500}
							className="nav-link contact"
						>
							Contact
						</Link>
					</div>
					<div>
						<a
							href="https://drive.google.com/uc?id=1OT-kgHq6aB7NFX32qP5AJUISBtMEM8jw&export=download"
							className="nav-link resume"
							id="resume-link-1"
						>
							<div
								onClick={() =>
									openLink(
										"https://drive.google.com/file/d/1OT-kgHq6aB7NFX32qP5AJUISBtMEM8jw/view?usp=share_link"
									)
								}
								className="navbar-resume"
								id="resume-button-1"
							>
								Resume <HiDownload />
							</div>
						</a>
					</div>
				</div>
				<div className="responce">
					<CgMenuGridO onClick={onOpen} />
					<Drawer isOpen={isOpen} placement="left" onClose={onClose}>
						<DrawerOverlay />
						<DrawerContent backgroundColor="rgb(169,204,227)">
							<DrawerCloseButton />

							<DrawerBody>
								<div className="drawerbody">
									<div>
										<Link
											to="home"
											smooth={true}
											offset={-50}
											duration={500}
											onClick={onClose}
										>
											Home
										</Link>
									</div>
									<div>
										<Link
											to="about"
											smooth={true}
											offset={-50}
											duration={500}
											onClick={onClose}
										>
											About
										</Link>
									</div>
									<div>
										<Link
											to="skills"
											smooth={true}
											offset={-50}
											duration={500}
											onClick={onClose}
										>
											Skills
										</Link>
									</div>

									<div>
										<Link
											to="projects"
											smooth={true}
											offset={-50}
											duration={500}
											onClick={onClose}
										>
											Projects
										</Link>
									</div>
									{/* <div>
										<Link
											to="github-main"
											smooth={true}
											offset={-50}
											duration={500}
											onClick={onClose}
										>
											Github
										</Link>
									</div> */}
									<div>
										<Link
											to="contact"
											smooth={true}
											offset={-50}
											duration={500}
											onClick={onClose}
										>
											Contact
										</Link>
									</div>
									<div>
										<a href="https://drive.google.com/uc?id=1OT-kgHq6aB7NFX32qP5AJUISBtMEM8jw&export=download">
											<div
												className="navbar-resume"
												onClick={() => {
													onClose();
													openLink(
														"https://drive.google.com/file/d/1OT-kgHq6aB7NFX32qP5AJUISBtMEM8jw/view?usp=share_link"
													);
												}}
											>
												Resume <HiDownload />
											</div>
										</a>
									</div>
								</div>
							</DrawerBody>
						</DrawerContent>
					</Drawer>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
