import "./about.css";
function About() {
  const openLink = (url) => {
    window.open(url);
  };
  return (
    <div className="about section" id="about">
      <div class="text-divider-about"></div>
      <img src="https://readme-typing-svg.herokuapp.com?font=Archivo&weight=800&size=12&pause=500&color=000000&background=39393900&center=true&vCenter=true&repeat=false&width=435&height=34&lines=About+Me" alt="Typing SVG" />
      <div className="aboutWrapper">
        <div className="aboutWrapperDiv">
          <div className="aboutMe" id="user-detail-intro">
            <span id="user-detail-name">I am Uzair Ansari</span> a passionate and
            adaptable full stack web developer, skilled in JavaScript, Node JS,
            Express, MongoDB, with proficiency in problem-solving. A dependable
            and responsible team player with an eye to detail. Looking for a
            position to enhance once skills while significantly contributing to
            the company's growth.
          </div>
          <div className="about-socialLink">
            <img
              onClick={() => openLink("https://github.com/uzairansari11")}
              src={process.env.PUBLIC_URL + "./Images/github.png"}
           
              alt="About"
            />
            <img
              onClick={() => openLink("www.linkedin.com/in/uzairansari11")}
              src={process.env.PUBLIC_URL + "./Images/linkedin.png"}
              alt="About"
            />
          </div>
        </div>
        <div className="aboutWrapperImg">
          <img
            src="https://technext.github.io/satner/img/about-us.png"
            alt="About"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
