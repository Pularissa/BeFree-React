import React from "react";
import "./testimonies.css";

import drug from './assets/drug.jpg';
import logo from './assets/logo1.png';
import person1 from './assets/man2.jpeg';
import person2 from './assets/profession.jpg';
import person3 from './assets/woman1.jpeg';

function App() {
  return (
    <div className="app">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">
          <img src={logo} alt="BeFree Logo" />
        </div>
        <nav>
          <ul>
            <li>Home</li>
            <li>Chatting</li>
            <li>Testimonies</li>
            <li>Meeting Schedule</li>
          </ul>
        </nav>
        <div className="sidebar-bottom">
          <p>Profile</p>
          <p>Logout</p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Banner */}
        <header className="banner">
          <img src={drug} alt="Community" />
          <div className="overlay">
            <h1>JOIN THE BeFree COMMUNITY</h1>
            <div className="socials">
              <a href="/">Instagram</a>
              <a href="/">Twitter</a>
              <a href="/">Facebook</a>
              <a href="/">LinkedIn</a>
            </div>
          </div>
        </header>

        {/* Stories */}
        <section className="stories">
          <h2>Stories of Hope and Recovery</h2>
          <p>
            See how BeFree has helped people find happiness and live peacefully free from drugs.
          </p>

          <div className="stories-grid">
            <div className="story-card">
              <img src={person1} alt="Shyaka" />
              <div>
                <h3>Shyaka – Peaceful</h3>
                <p>“Thanks to the support I received, I’ve found peace and purpose beyond addiction.”</p>
              </div>
            </div>

            <div className="story-card">
              <img src={person2} alt="Keza" />
              <div>
                <h3>Keza – Confidence Booster</h3>
                <p>“BeFree helped me rebuild my confidence. I finally feel in control of my life again.”</p>
              </div>
            </div>

            <div className="story-card">
              <img src={person2} alt="Kate" />
              <div>
                <h3>Kate – Confidence Booster</h3>
                <p>“BeFree helped me rebuild my confidence. I finally feel in control of my life again.”</p>
              </div>
            </div>

            <div className="story-card">
              <img src={person1} alt="Shami" />
              <div>
                <h3>Shami – Peaceful</h3>
                <p>“Thanks to the support I received, I’ve found peace and purpose beyond addiction.”</p>
              </div>
            </div>

            <div className="story-card">
              <img src={person1} alt="Rwema" />
              <div>
                <h3>Rwema – Peaceful</h3>
                <p>“Thanks to the support I received, I’ve found peace and purpose beyond addiction.”</p>
              </div>
            </div>

            <div className="story-card">
              <img src={person3} alt="Kami" />
              <div>
                <h3>Kami – Confidence Booster</h3>
                <p>“BeFree helped me rebuild my confidence. I finally feel in control of my life again.”</p>
              </div>
            </div>
          </div>
        </section>

        <h3 className="quotes">Impactful Quotes</h3>

        {/* Footer */}
        <footer className="footer">
          <div>
            <h3>BeFree</h3>
            <p>Rwanda, Kigali</p>
            <p>Phone: +2507888888</p>
            <p>Email: doeg@gmail.com</p>
          </div>

          <div className="links">
            <h4>Useful Links</h4>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Services</li>
              <li>Hardworking Team</li>
            </ul>
          </div>

          <div>
            <h4>Contact Us</h4>
            <ul>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Facebook</li>
              <li>LinkedIn</li>
            </ul>
          </div>

          <div className="resources">
            <h4>Resources</h4>
            <ul>
              <li>RBC</li>
              <li>NDERA</li>
              <li>NRS</li>
              <li>WHO</li>
            </ul>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
