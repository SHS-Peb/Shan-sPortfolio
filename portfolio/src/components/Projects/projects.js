import React from 'react';
import './projects.css';
import Portfolio1 from '../../assets/portfolio-1.png';
import Portfolio2 from '../../assets/portfolio-2.png';
import Portfolio3 from '../../assets/portfolio-3.png';
import Portfolio4 from '../../assets/portfolio-4.png';

const Projects = () => {
    return (
        <section id='projects'>
            <h2 className="projectsTitle">My Portfolio</h2>
            <span className="projectsDesc">Please view my projects below. I appreciate any and all feedback</span>
            <div className="projectsImgs">
                <img src={Portfolio1} alt="" className="projectssImg" />
                <img src={Portfolio2} alt="" className="projectsImg" />
                <img src={Portfolio3} alt="" className="projectsImg" />
                <img src={Portfolio4} alt="" className="projectsImg" />
            </div>
            <button className="projectsBtn">See More</button>
        </section>
    );
}

export default Projects;