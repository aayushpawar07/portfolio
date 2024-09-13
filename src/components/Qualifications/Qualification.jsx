import React, { useState } from 'react';
import './Qualification.css';

function Qualification() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <section className='qualification section'>
      <h2 className='section__title'>Qualification</h2>
      <span className='section__subtitle'>My Personal Journey</span>

      <div className='qualification__container container'>
        <div className='qualification__tabs'>
          <div 
            className={`qualification__button button--flex ${activeTab === 1 ? 'qualification__active' : ''}`} 
            onClick={() => setActiveTab(1)}
          >
            <i className='uil uil-graduation-cap qualification__icon'></i>Education
          </div>
          <div 
            className={`qualification__button button--flex ${activeTab === 2 ? 'qualification__active' : ''}`} 
            onClick={() => setActiveTab(2)}
          >
            <i className='uil uil-briefcase-alt qualification__icon'></i>Experience
          </div>
          <div 
            className={`qualification__button button--flex ${activeTab === 3 ? 'qualification__active' : ''}`} 
            onClick={() => setActiveTab(3)}
          >
            <i className='uil uil-star qualification__icon'></i>Skills
          </div>
          <div 
            className={`qualification__button button--flex ${activeTab === 4 ? 'qualification__active' : ''}`} 
            onClick={() => setActiveTab(4)}
          >
            <i className='uil uil-trophy qualification__icon'></i>Certifications
          </div>
          <div 
            className={`qualification__button button--flex ${activeTab === 5 ? 'qualification__active' : ''}`} 
            onClick={() => setActiveTab(5)}
          >
            <i className='uil uil-project-diagram qualification__icon'></i>Projects
          </div>
        </div>

        <div className="qualification__sections">
          {/* Education Section */}
          <div className={`qualification__content ${activeTab === 1 ? 'qualification__content-active' : ''}`}>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">B.Tech in Computer Science</h3>
                <span className="qualification__subtitle">SISTEC Bhopal</span>
                <div className="qualification__calender">
                  <i className='uil uil-calendar-alt'></i>2019 - 2023
                </div>
              </div>
              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Higher Secondary School</h3>
                <span className="qualification__subtitle">ABC Higher Secondary School</span>
                <div className="qualification__calender">
                  <i className='uil uil-calendar-alt'></i>2017 - 2019
                </div>
              </div>
              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div className={`qualification__content ${activeTab === 2 ? 'qualification__content-active' : ''}`}>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Frontend Developer Intern</h3>
                <span className="qualification__subtitle">XYZ Software Solutions</span>
                <div className="qualification__calender">
                  <i className='uil uil-calendar-alt'></i>June 2022 - Aug 2022
                </div>
              </div>
              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Full Stack Developer</h3>
                <span className="qualification__subtitle">Freelancer</span>
                <div className="qualification__calender">
                  <i className='uil uil-calendar-alt'></i>Sept 2023 - Present
                </div>
              </div>
              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className={`qualification__content ${activeTab === 3 ? 'qualification__content-active' : ''}`}>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Programming Languages</h3>
                <span className="qualification__subtitle">Java, JavaScript, Python</span>
              </div>
              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Frameworks & Libraries</h3>
                <span className="qualification__subtitle">React, Spring Boot, Laravel</span>
              </div>
              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Tools & Technologies</h3>
                <span className="qualification__subtitle">Docker, Git, MySQL</span>
              </div>
              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>
          </div>

          {/* Certifications Section */}
          <div className={`qualification__content ${activeTab === 4 ? 'qualification__content-active' : ''}`}>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Certified Java Developer</h3>
                <span className="qualification__subtitle">Oracle</span>
                <div className="qualification__calender">
                  <i className='uil uil-calendar-alt'></i>2023
                </div>
              </div>
              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Full Stack Web Development</h3>
                <span className="qualification__subtitle">Udemy</span>
                <div className="qualification__calender">
                  <i className='uil uil-calendar-alt'></i>2022
                </div>
              </div>
              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>
          </div>

          {/* Projects Section */}
          <div className={`qualification__content ${activeTab === 5 ? 'qualification__content-active' : ''}`}>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Paperless Scholarship Disbursement System</h3>
                <span className="qualification__subtitle">Personal Project</span>
                <div className="qualification__calender">
                  <i className='uil uil-calendar-alt'></i>2024
                </div>
                <p className="qualification__description">
                  Developed a web application for scholarship disbursement with blockchain integration for security and Python-based AI for document verification.
                </p>
              </div>
              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">E-Commerce Platform</h3>
                <span className="qualification__subtitle">Freelance Project</span>
                <div className="qualification__calender">
                  <i className='uil uil-calendar-alt'></i>2023
                </div>
                <p className="qualification__description">
                  Created an e-commerce website using React and Laravel for a local business, featuring product management and payment integration.
                </p>
              </div>
              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Qualification;
