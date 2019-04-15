import React, { Component }  from 'react';
// import Particles from 'react-particles-js';
import Navbar from '../components/Navbar';
import Jumbotron from '../components/Jumbotron';
import Header from '../components/Header';
import Section from '../components/Section';
import Image from '../components/Image';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
import Portrait from '../assets/images/Thinker Portrait.png';

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
                    <Header className="h1" style={{ whiteSpace: "nowrap", backgroundColor: "brown", margin: "auto 0", padding: "10px", height: "32px" }}>
                            Christopher O'Connell
                    </Header>
                    <div className="btn-group" style={{ width: "34%" }}>
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
                    <Section id="summary">
                        <Image id="profile-image" src={Portrait} alt="Christopher O'Connell" style={{width: "300px"}}/>
                        <Paragraph id="summary">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris nunc sem, aliquet sagittis dolor a, aliquet lacinia justo.
                            Fusce commodo, leo eu mollis feugiat, magna nisl vulputate diam, ac malesuada leo orci sed ante.
                            Cras ultrices vulputate justo ut scelerisque. In et egestas nulla.
                            Sed ac imperdiet sapien, non pellentesque est.
                            Proin sit amet tincidunt sapien. Donec placerat ipsum vitae dictum posuere.
                            Sed posuere diam vitae nisi vulputate posuere.
                        </Paragraph>
                    </Section>
                </Jumbotron>
                <div className="btn btn-group" style={{width: "100%"}}>
                    <Button href="/about" id="about">
                        Learn More
                    </Button>
                </div>
            </div>
        );
    };
};

export default Index;