import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Button from '../components/Button';
import Section from '../components/Section';
import Image from '../components/Image';
import Aside from '../components/Aside';
import Paragraph from '../components/Paragraph';
import Portrait from '../assets/images/Thinker Portrait.png';

class About extends Component {
    render() {
        return(
            <div className="about">
                <Navbar id="about">
                    <Header className="h1" style={{whiteSpace: "nowrap"}}>
                        <Button href="/" id="index">
                            Christopher O'Connell
                        </Button>
                    </Header>
                    <div className="btn-group">
                        <Header className="h3">
                            <Button href="/portfolio" id="portfolio">
                                Portfolio
                            </Button>
                        </Header>
                        <Header className="h3">
                            <Button href="/contact" id="contact">
                                Contact
                            </Button>
                        </Header>
                        <Header className="h3">
                            <Button href="https://bit.ly/2UHhypN" id="resume">
                                Resume
                            </Button>
                        </Header>
                    </div>
                </Navbar>
                <Section id="about-section">
                    <Header className="h2" style={{textDecoration: 'underline'}}>About</Header>
                    <Section id="image-background-section">
                        <Image className="about" id="profile-image" src={Portrait} alt="Christopher O'Connell" style={{width: "150px", height: "150px"}}/>
                        <Aside id="background-section">
                            <Paragraph id="background">
                                I am an Eagle Scout with a Bachelor's of Science degree in Physics,
                                which means that I persevere through difficult challenges.
                                Both awards required me to overcome several challenges
                                such as: organizing and carrying out an Eagle Project to help my local community
                                or a challenging electricity lab.
                                I saw through every obstacle in my way to attain both of those awards.
                                <br/><br/>
                                I have numerous interests that includes:
                                photography, mathematics, physics, science, engineering, philosophy, art, general learning and gaming.
                                My love for learning has kept me searching for new skills to acquire which is precisely why I turned
                                my attention to computer programming and UCF's Coding Bootcamp.
                                I am now a <strong>Full Stack Web Developer</strong>.
                                {/* I am an Eagle Scout that graduated from college with my B.S. degree in Physics.
                                I have several varied interests that includes the following:
                                photography, videogaming, tabletop gaming, math, science, engineering,
                                philosophy, art and general learning.

                                These varied interests have kept me always looking towards the horizon
                                as I am definitely a dreamer and my love of learning is my main reason for wanting to learn
                                computer programming.
                                So here I am at Coding Bootcamp looking to get into one of the fastest growing fields out there! */}
                            </Paragraph>
                        </Aside>
                    </Section>
                    <Section id="skills-section">
                        <Paragraph id="skills">
                            Throughout my experiences I have acquired numerous skills, be that technical or non-technical.
                            {/* For example, while working towards my Eagle Scout award I had to organize an Eagle Project
                            to help my community. This Project required me to communicate with the organization that I was attempting
                            to aid while also leading my fellow scouts that assisted me by assigning them specific tasks to complete.
                            <br/><br/> */}<br/>
                            While I was in UCF's Coding Bootcamp this past year I was required to complete several projects that
                            utilized my skills as a web developer, be that actual coding in HTML/CSS/Javascript or just planning out
                            the project via wireframes and hand-drawn pictures. The skill that I wound up using the most was actually,
                            my ability to figure things out for myself as that is crucial for debugging code.                            
                        </Paragraph>
                    </Section>
                </Section>
            </div>
        );
    };
};

export default About;