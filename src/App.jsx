import "./App.css";
import ScrollUp from "./components/ScrollUp/ScrollUp";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Calender from "./components/github/Calender";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Home />
			<About />
			<Skills />
			<Projects />
			<Calender />
			<Contact />
			<Footer />
			<ScrollUp />
		</div>
	);
}

export default App;
