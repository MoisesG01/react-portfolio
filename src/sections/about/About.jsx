import AboutImage from "../../assets/about.jpg";
import CV from "../../assets/cv.pdf";
import { PiDownloadFill } from "react-icons/pi";
import data from "./data";
import Card from "../../components/Card";
import "./about.css";

const About = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="" />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
            {data.map((item) => (
              <Card key={item.id} className="about__card">
                <span className="about__card-icon">{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>
            ))}
          </div>
          <p>
            I am a passionate web developer with a keen interest in creating
            dynamic and responsive web applications. I enjoy building
            user-friendly interfaces and ensuring optimal performance across
            different devices.
          </p>
          <p>
            Hi, my name is Moisés Gonçalves from São Paulo, Brazil. I'm a
            full-stack developer with a focus on creating efficient and scalable
            web applications. I have experience in both front-end and back-end
            development, allowing me to build complete solutions that meet user
            needs. I am always eager to learn new technologies and improve my
            skills to deliver the best possible results. Check out my resume
            below!
          </p>
          <a href={CV} download className="btn primary">
            Download CV
            <PiDownloadFill />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
