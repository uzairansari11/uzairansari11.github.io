import "./about.css";

function About() {
  const openLink = (url) => {
    window.open(url);
  };

  return (
    <div className="about section" id="about">
      <div class="text-divider-about"></div>
      <h1 className="aboutH1">About me</h1>
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
            // src={process.env.PUBLIC_URL + "./Images/Right_Side.gif"}
            src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWNhY2ExNGM5MjM4ZDFlMTljYWI5NjFmMmViNzhkODA2MzYyY2FkNyZjdD1n/SWoSkN6DxTszqIKEqv/giphy.gif"
            alt="About"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
