import React from 'react';
import './Portfolio.css';
import profileImg from './assets/profile.jpeg'; 

const Portfolio = () => {
  const skills = [
    { name: 'Java' }, { name: 'Python' }, { name: 'C' }, 
    { name: 'JavaScript' }, { name: 'HTML' }, { name: 'CSS' }, 
    { name: 'React.js' }, { name: 'Node.js' }, { name: 'Express.js' }, 
    { name: 'SQL' }, { name: 'MongoDB' }, { name: 'Machine Learning' }
  ];

  const leetcodeTopics = [
    'Arrays', 'Strings', 'Linked Lists', 'Trees', 
    'Sliding Window', 'Binary Search', 'Greedy Algorithms'
  ];

  return (
    <div className="portfolio-wrapper">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-container">
          <span className="logo">NK<span className="accent">.</span></span>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Achievements</a>
            <a href="/Nikhil_Kumar_Resume.pdf" download className="nav-resume-link">Resume 📥</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-content">
          
          {/* Profile Image Frame */}
          <div className="profile-image-container">
            <img src={profileImg} alt="Nikhil Kumar" className="profile-image" />
          </div>

          <div className="badge-container">
            <span className="badge">Available for Roles</span>
          </div>
          
          <h1 className="hero-heading">
            <span className="text-gradient">Nikhil Kumar</span>
          </h1>

          <p className="tagline">Computer Science Student | Problem Solver</p>
          <p className="sub-tagline">IMS Engineering College, Ghaziabad</p>
          
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">300+</span>
              <span className="stat-label">LeetCode Solved</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">1+</span>
              <span className="stat-label">Years of Building</span>
            </div>
          </div>

          <div className="cta-buttons">
            <a href="/Nikhil_Kumar_Resume.pdf" download className="btn btn-resume">
              Download Resume 📥
            </a>
            <a href="https://leetcode.com/u/nik_1001/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">LeetCode Profile</a>
            <a href="https://github.com/nikhilkumar821824" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">GitHub</a>
            <a href="https://www.linkedin.com/in/nikhil-kumar-9b3116293" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">LinkedIn</a>
          </div>
        </div>
      </header>

      <main className="main-content">
        {/* About Me Section */}
        <section id="about" className="section-container">
          <div className="section-header">
            <h2>About Me</h2>
          </div>
          <div className="pro-card about-card">
            <p>
              I am a 4th-year B.Tech Computer Science student deeply passionate about software engineering, 
              full-stack web development, and machine learning. My core focus lies in breaking down complex backend 
              architectures and mastering data structures & algorithms. With a solid foundation built on continuous 
              problem-solving, I thrive on engineering real-world solutions that are both scalable and efficient.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section-container">
          <div className="section-header">
            <h2>Technical Skills</h2>
          </div>
          <div className="skills-grid-layout">
            <div className="pro-card inner-skills-card">
              <h3>Core Skills</h3>
              <div className="skills-tags">
                {skills.map((skill, index) => (
                  <span key={index} className="skill-tag-badge">{skill.name}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Project Section */}
        <section id="projects" className="section-container">
          <div className="section-header">
            <h2>Project</h2>
          </div>
          
          <div className="pro-card project-card-featured">
            <div className="project-meta">
              <span className="project-type">Full Stack System</span>
              <h3>Public Transport Feedback System</h3>
              <div className="tech-pill-container">
                {['MongoDB', 'Express.js', 'React.js', 'Node.js'].map((tech, i) => (
                  <span key={i} className="tech-pill">{tech}</span>
                ))}
              </div>
            </div>
            <div className="project-desc">
              <ul className="custom-bullets">
                <li>Engineered a real-time system enabling commuters to easily report structural public transport inefficiencies.</li>
                <li>Designed role-based tracking pipelines for administrators addressing passenger delays and service qualities.</li>
                <li>Constructed secure, high-throughput RESTful APIs with Node.js and Express to interact with dynamic React interfaces.</li>
                <li>Optimized MongoDB pipelines ensuring sub-second visual rendering for live metrics tracking.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Coding Achievements Section */}
        <section id="experience" className="section-container">
          <div className="section-header">
            <h2>Achievements</h2>
          </div>
          <div className="achievements-split">
            <div className="pro-card metrics-card">
              <div className="platform-title">
                <h3>LeetCode Data</h3>
                <span className="leet-badge">Solved 300+ Problems</span>
              </div>
              <p className="subtext">Consistently working across abstract algorithms and rigorous platform test suites. Core focus areas include:</p>
              <div className="topics-grid">
                {leetcodeTopics.map((topic, idx) => (
                  <div key={idx} className="topic-pill-item">
                    <span className="checkmark">✔</span> {topic}
                  </div>
                ))}
              </div>
            </div>

            <div className="pro-card education-card-pro">
              <h3>Education</h3>
              <div className="edu-timeline">
                <div className="edu-item">
                  <h4>IMS Engineering College, Ghaziabad</h4>
                  <p className="edu-degree">B.Tech in Computer Science Engineering</p>
                  <span className="edu-year">4th Year Status</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer-pro">
        <div className="footer-content">
          <p>Designed & Built by Nikhil Kumar</p>
          <p className="footer-year">© 2026 | All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;