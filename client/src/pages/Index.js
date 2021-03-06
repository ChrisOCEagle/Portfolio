import React, { Component }  from 'react';
// import Particles from 'react-particles-js';
import Navbar from '../components/Navbar';
import Jumbotron from '../components/Jumbotron';
import Header from '../components/Header';
import Section from '../components/Section';
import Image from '../components/Image';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
import Portrait from '../assets/images/Thinker Portrait(update).JPG';
import Footer from '../components/Footer';

class Index extends Component {
    render() {
        return(
            <div className="index">
                {/* <Particles
                    params={{
                        polygon: {
                            enable: true,
                            type: 'inside',
                            move: {
                                radius: 10
                            },
                            url: 'https://placeholder.pics/svg/100x100/888888/My%20Label'
                        }
                    }}
                /> */}
                <Navbar id="index">
                    <Header className="h1" style={{ whiteSpace: "nowrap", color: "white", backgroundColor: "#ed3330", margin: "auto 0", padding: "10px", height: "32px" }}>
                            Christopher O'Connell
                    </Header>
                    <div className="btn-group" style={{ width: "40%" }}>
                        <Header className="h3">
                            <Button href="/about" id="about">
                                About
                            </Button>
                        </Header>
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
                    {/* <Header className="h1" style={{ backgroundColor: "brown", margin: "25px", padding: "10px", width: "100%" }}>
                        Christopher O'Connell
                    </Header> */}
                </Navbar>
                <Jumbotron id="index">
                    <div className="bg-image"></div>
                    <Section id="summary">
                        <Image className="index" id="profile-image" src={Portrait} alt="Christopher O'Connell" style={{width: "300px"}}/>
                        <Paragraph id="summary">
                            I am an Eagle Scout and Full Stack Web Developer with a Bachelor's of Science degree in Physics.
                            I have numerous technical and non-technical skills that include:
                            Leadership potential, Logical Reasoning, Quick Learning, HTML5, CSS3, and Javascript.
                        </Paragraph>
                    </Section>
                </Jumbotron>
                <div className="btn btn-group" style={{width: "100%"}}>
                    <Button href="/about" id="about">
                        Learn More
                    </Button>
                </div>
                <Footer id="footer">Contact me at chris.webdeveloper@yahoo.com</Footer>
            </div>
        );
    };
};

export default Index;