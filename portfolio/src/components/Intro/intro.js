import React from 'react';
import './intro.css';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello</span>
                <span className="introText"><br />Welcome to my portfolio</span>
                <p className="introPara">Please be kind as you view my work</p>
            </div>
        </section>
    );
}

export default Intro;