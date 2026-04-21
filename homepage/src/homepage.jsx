import React from "react";
import "./homepage.css";
import Logo from './assets/logo1.png';
import twophoto from './assets/twopeople.png';
import sandra from './assets/sandra.png';
import melissa from './assets/melissa.png';
import anitha from './assets/anitha.png';
import sonia from './assets/Sonia.jpg';
import shoulamite from './assets/shoulamite.jpg';
import me from './assets/me.jpg';
import facebook from './assets/facebook.png';
import instagram from './assets/instagram.png';
import twitter from './assets/twitter.png';
import linkedin from './assets/linkedin.png';
import { Link } from 'react-router-dom';

function HomePage() {
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="ho">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-logo">
          <img src={Logo} alt="BeFree Logo" width="70" height="70" />
        </div>

        <div className="nav-links">
          <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="active">
            HOME
          </a>
          <a href="#about" onClick={(e) => handleNavClick(e, '#about')}>
            ABOUT
          </a>
          <a href="#services" onClick={(e) => handleNavClick(e, '#services')}>
            SERVICES
          </a>
          <a href="#team" onClick={(e) => handleNavClick(e, '#team')}>
            TEAM
          </a>
          <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>
            CONTACT
          </a>

          <Link to="/signup">
            <button className="btn signup">SIGN UP</button>
          </Link>
          <Link to="/login">
            <button className="btn login">LOGIN</button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero" id="home">
        <div className="home">
          <div className="home-text">
            <h1>
              <span>BeFree</span>
            </h1>
            <p>
              BeFree is a youth-centered initiative dedicated to stopping drug abuse
              within the Rwandan community. Through our innovative app, we aim to
              educate, support, and empower young people to make healthier choices,
              access reliable information, and find the help they need.
            </p>
          </div>

          <div className="home-img">
            <img
              src={twophoto}
              alt="Youth supporting each other against drug abuse"
              width="520"
            />
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about">
        <h1>ABOUT US</h1>
        <div className="about">
          <div className="vision">
            <h2>OUR VISION</h2>
            <p>
              A Rwandan community where every young person lives free from the grip
              of drugs — empowered with knowledge, guidance, and opportunities to
              build healthy, productive, and purposeful lives.
            </p>
          </div>

          <div className="mission">
            <h2>OUR MISSION</h2>
            <p>
              To stop drug abuse among youth by creating accessible, innovative, and
              supportive solutions through the BeFree app — raising awareness and
              building a strong support system.
            </p>
          </div>

          <div className="values">
            <h2>OUR VALUES</h2>
            <p>
              Respect for every individual’s dignity, non-judgmental listening,
              collaboration with families, schools, and communities to bring lasting
              change and a healthier generation.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services">
        <h1>OUR SERVICES</h1>
        <div className="service">
          <div className="upper">
            <div className="chatting">
              <h2>Chatting</h2>
              <p>
                A safe space where young people share experiences and support each
                other in making informed choices.
              </p>
            </div>

            <div className="zoom">
              <h2>Zoom Meetings</h2>
              <p>
                Online sessions connecting counsellors and youth for guidance,
                awareness, and encouragement.
              </p>
            </div>

            <div className="testimonies">
              <h2>Testimonies</h2>
              <p>
                Inspiring stories from people who overcame drug abuse — showing that
                recovery is possible.
              </p>
            </div>
          </div>

          <div className="lower">
            <div className="counselling">
              <h2>Counselling</h2>
              <p>
                Professional support to help young people stop drug use and rebuild
                their lives.
              </p>
            </div>

            <div className="skills">
              <h2>Skills Training</h2>
              <p>
                Life skills and empowerment sessions to build resilience and healthy
                alternatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team">
        <h1>
          OUR HARDWORKING <span>TEAM</span>
        </h1>

        <div className="team1">
          <div className="team-member shoulamite">
            <img src={shoulamite} alt="ISHEMA SHOULAMITE" />
            <div className="name">ISHEMA SHOULAMITE</div>
          </div>

          <div className="team-member melisa">
            <img src={melissa} alt="SHAMI MELISSA" />
            <div className="name">SHAMI MELISSA</div>
          </div>

          <div className="team-member sonia">
            <img src={sonia} alt="UWASE SONIA" />
            <div className="name">UWASE SONIA</div>
          </div>
        </div>

        <div className="team2">
          <div className="team-member sandra">
            <img src={sandra} alt="CYUZUZO SANDRA" />
            <div className="name">CYUZUZO SANDRA</div>
          </div>

          <div className="team-member anitha">
            <img src={anitha} alt="IRAKOZE ANITHA" />
            <div className="name">IRAKOZE ANITHA</div>
          </div>

          <div className="team-member prisca">
            <img src={me} alt="LARISSA PRISCA" />
            <div className="name">LARISSA PRISCA</div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact">
        <div className="footer">
          <div className="location">
            <h2>BeFree</h2>
            <p>Rwanda, Kigali</p>
            <p>
              <strong>Phone:</strong> +250 788 888 888
            </p>
            <p>
              <strong>Email:</strong> befree@gmail.com
            </p>
          </div>

          <div className="links">
            <h2>Useful Links</h2>
            <ul>
              <li>
                <a href="#home" onClick={(e) => handleNavClick(e, '#home')}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleNavClick(e, '#about')}>
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleNavClick(e, '#services')}>
                  Services
                </a>
              </li>
              <li>
                <a href="#team" onClick={(e) => handleNavClick(e, '#team')}>
                  Team
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="contacts">
            <h2>Contact us</h2>
            <div className="insta">
              <img src={instagram} alt="Instagram" />
              <span>Instagram</span>
            </div>
            <div className="twit">
              <img src={twitter} alt="Twitter" />
              <span>Twitter</span>
            </div>
            <div className="fb">
              <img src={facebook} alt="Facebook" />
              <span>Facebook</span>
            </div>
            <div className="linked">
              <img src={linkedin} alt="LinkedIn" />
              <span>LinkedIn</span>
            </div>
          </div>

          <div className="resources">
            <h2>Resources</h2>
            <ul>
              <li>
                <a href="https://www.rbc.gov.rw/" target="_blank" rel="noopener noreferrer">
                  RBC
                </a>
              </li>
              <li>
                <a href="https://caraesnderahospital.rw/" target="_blank" rel="noopener noreferrer">
                  NDERA
                </a>
              </li>
              <li>
                <a href="https://www.nrs.gov.rw/" target="_blank" rel="noopener noreferrer">
                  NRS
                </a>
              </li>
              <li>
                <a href="https://www.who.int/rwanda" target="_blank" rel="noopener noreferrer">
                  WHO Rwanda
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;