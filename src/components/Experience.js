import React from 'react';
import './Experience.css';

import charusatLogo from '../Assets/charusat.png';
import techxiLogo from '../Assets/dhyey.png';
import dhyeLogo from '../Assets/enlighten.png';

const experiences = [
  {
    duration: 'Jan 2024 – Jun 2024',
    logo: techxiLogo,
    title: 'AI/ML Intern',
    org: 'Dhyey Technologies - TechXi',
    points: [
      'Developed an AI-driven health diagnostic system using GPU-optimized deep neural networks and real-time data pipelines with Kafka and Redis Streams, improving performance by 20% and model accuracy by 40%.',
      'Deployed ML models via Django, Fast & Flask APIs for 200+ users with Docker, Azure, and containerized deployment.',
    ]
  },
  {
    duration: 'May 2023 – Aug 2023',
    logo: charusatLogo,
    title: 'Machine Learning Intern',
    org: 'Charusat University',
    points: [
      'Engineered hybrid recommender combining collaborative/content-based filtering using TensorFlow, Kafka, ETL pipelines(PostgreSQL), and deep learning (PyTorch, CuBLAS) to cut misclassification by 25%.',
      'Optimized recommendation algorithms for e-commerce platforms (Amazon), boosting user engagement 20% and conversion rates 5% via personalized suggestions and rigorous model evaluation',
    ]
  },
  {
    duration: 'May 2022 – Jul 2022',
    logo: dhyeLogo,
    title: 'Python and ML Intern',
    org: 'Enlighten Infosystems',
    points: [
      'Devised ML-based expert system automating decision-making, reducing time by 30% and boosting system performance 10% via high-performance GPU computing.',
      'Applied image processing techniques to analyze visual data, improving accuracy 15%, reducing processing time 25%, and built intuitive GUIs achieving 90% user satisfaction',
    ]
  }
];

const Experience = () => {
  return (
    <div className="timeline-outer" id="experience">
      <h1 className="timeline-heading">Work Experience.</h1>
      <p className="timeline-subheading">MY JOURNEY SO FAR.</p>
      <div className="timeline">
        {experiences.map((exp, idx) => (
          <div key={idx} className="timeline-row">
            {/* Logo on white bar */}
            <div className="timeline-marker">
              <div className="timeline-circle">
                <img src={exp.logo} alt={`${exp.org} logo`} />
              </div>
            </div>

            {/* Experience card */}
            <div className={`timeline-entry ${idx % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h2 className="job-title">{exp.title}</h2>
                  <span className="job-duration">{exp.duration}</span>
                </div>
                <h3>{exp.org}</h3>
                <ul>
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
