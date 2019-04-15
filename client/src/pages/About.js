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
                                I am an Eagle Scout that graduated from college with my B.S. degree in Physics.
                                I have several varied interests that includes the following:
                                photography, videogaming, tabletop gaming, math, science, engineering,
                                philosophy, art and general learning.

                                These varied interests have kept me always looking towards the horizon
                                as I am definitely a dreamer and my love of learning is my main reason for wanting to learn
                                computer programming.
                                So here I am at Coding Bootcamp looking to get into one of the fastest growing fields out there!
                            </Paragraph>
                        </Aside>
                    </Section>
                    <Section id="skills-section">
                        <Paragraph id="skills">
                            Sed quis vestibulum ligula.
                            Aenean laoreet, neque iaculis lacinia egestas, urna sapien iaculis odio, in pellentesque lorem ante sit amet ante.
                            Donec et blandit mi. Aliquam eu finibus libero, eget auctor libero. In id orci a enim tincidunt gravida.
                            Pellentesque maximus enim vel nisi vehicula interdum. Ut eleifend sem non est consequat ornare.
                            Vivamus non libero eu enim dictum dictum et mollis mi.
                            Vivamus tincidunt leo nec felis dapibus, lobortis aliquam nisl sollicitudin.
                            Nunc eget ornare quam. Vestibulum vitae ligula non quam fringilla ultricies.
                            Etiam commodo, nibh nec fringilla fermentum, justo velit luctus leo, quis convallis est massa eget lacus.
                            Praesent vitae dolor eu lectus tempus blandit eu ut leo.
                        </Paragraph>
                    </Section>
                </Section>
            </div>
        );
    };
};

export default About;