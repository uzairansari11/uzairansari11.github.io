import "./contact.css";
import { SiGmail } from "react-icons/si";
import { IoMdCall } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";

function Contact() {
  const openLink = (url) => {
    window.open(url);
  };
  return (
    <div className="contact-main" id="contact">
      <div className="headingwrapper">
        <h1 className="contactheading">Contact</h1>
        <div className="headingwrapperDiv">
          <div className="headingwrapperDivLeft">
            <img
              src="https://www.genscript.com/gsimages/support/image-contactus.png"
              alt="contactme"
            />
          </div>
          <div className="headingwrapperDivRight">
            <div className="contact-gmail" id="contact-email">
              <SiGmail /> uzairans532@gmail.com
            </div>
            <div className="contact-number" id="contact-phone">
              <IoMdCall /> +91-7271880500
            </div>
            <div className="contact-location">
              <MdLocationOn /> Mumbai, Maharastra
            </div>
            <div className="contact-socialLink">
              <img
                onClick={() => openLink("https://github.com/uzairansari11")}
                src={'https://cdn-icons-png.flaticon.com/512/733/733553.png'}
                alt="About"
                id="contact-github"
              />
              <img
                onClick={() =>
                  openLink("https://www.linkedin.com/in/uzairansari11")
                }
                src={'https://cdn-icons-png.flaticon.com/512/145/145807.png'}
                alt="About"
                id="contact-linkedin"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
