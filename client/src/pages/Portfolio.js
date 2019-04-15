import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Button from '../components/Button';
import Section from '../components/Section';
import Image from '../components/Image';
import Label from '../components/Label';
import Sources from '../assets/images.js';
import Github from '../assets/images/github.svg';
import './style.css';

const projects = [
    {
        src: Sources["word-guess"],
        alt: 'Word Guess Game',
        link: 'https://chrisoceagle.github.io/Word-Guess-Game/',
        id: 'word-guess-game',
        github: 'https://github.com/ChrisOCEagle/Word-Guess-Game',
    },
    {
        src: Sources["gem-collector"],
        alt: 'Gem Collector Game',
        link: 'https://chrisoceagle.github.io/unit-4-game/',
        id: 'gem-collector-game',
        github: 'https://github.com/ChrisOCEagle/unit-4-game',
    },
    {
        src: Sources["pokemon"],
        alt: 'Trivia Game',
        link: 'https://chrisoceagle.github.io/TriviaGame/',
        id: 'trivia-game',
        github: 'https://github.com/ChrisOCEagle/TriviaGame',
    },
    {
        src: Sources["giphy"],
        alt: 'Giphy API',
        link: 'https://chrisoceagle.github.io/GIPHY/',
        id: 'giphy-api',
        github: 'https://github.com/ChrisOCEagle/GIPHY',
    },
    {
        src: Sources["train"],
        alt: 'Train Schedule',
        link: 'https://chrisoceagle.github.io/Train/',
        id: 'train-schedule',
        github: 'https://github.com/ChrisOCEagle/Train',
    },
    {
        src: Sources["IMB-logo"],
        alt: 'IMBored App',
        link: 'https://chrisoceagle.github.io/IMBored-App/',
        id: 'imbored-app',
        github: 'https://github.com/ChrisOCEagle/IMBored-App',
    },
    {
        src: Sources["friend-finder"],
        alt: 'Friend Finder',
        link: 'https://calm-mesa-27395.herokuapp.com/',
        id: 'friend-finder',
        github: 'https://github.com/ChrisOCEagle/FriendFinder',
    },
    {
        src: Sources["burger"],
        alt: 'Burger App',
        link: 'https://burger-app--cdoc.herokuapp.com/',
        id: 'burger-app',
        github: 'https://github.com/ChrisOCEagle/burger',
    },
    {
        src: Sources["eventree"],
        alt: 'evenTree App',
        link: 'https://agile-fjord-37443.herokuapp.com/',
        id: 'eventree-app',
        github: 'https://github.com/ChrisOCEagle/evenTree',
    },
    {
        src: Sources["physics"],
        alt: 'physics news scraper',
        link: 'https://fathomless-cliffs-64610.herokuapp.com/',
        id: 'physics news scraper',
        github: 'https://github.com/ChrisOCEagle/Physics-News-Scraper',
    },
    {
        src: Sources["writespire"],
        alt: 'WriteSpire',
        link: 'https://writespire.herokuapp.com/',
        id: 'writespire',
        github: 'https://github.com/ChrisOCEagle/Story-Inspiration',
    },
    // {
    //     src: 'https://via.placeholder.com/150',
    //     alt: '150x150 pixels',
    //     link: 'https://placeholder.com',
    //     id: 'placeholder-image',
    //     github: 'https://github.com/ChrisOCEagle/project-name',
    // },
];

class Portfolio extends Component {
    render() {
        return(
            <div className="portfolio">
                <Navbar id="portfolio">
                    <Header className="h1" style={{whiteSpace: "nowrap"}}>
                        <Button href="/" id="index">
                            Christopher O'Connell
                        </Button>
                    </Header>
                    <div className="btn btn-group">
                        <Header className="h3">
                            <Button href="/about" id="about">
                                About
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
                <Header className="h2" style={{textDecoration: 'underline'}}>Projects</Header>
                <Section id="portfolio-section">
                    {projects.map((project, key) => (
                        <div className="project-link" key={key}>
                            <Button href={project.link} id="project-link">
                                <Image className="project-image" name={project.id} id={project.id} src={project.src} alt={project.alt}/>
                                <div className="hex-top"></div>
                                <div className="hex-bottom"></div>
                            </Button>
                            <div className="label github-link" style={{width: "100%", display: "flex", justifyContent: "space-around"}}>
                                <Label className="label" htmlFor={project.id} children={project.alt}/>
                                <Button href={project.github} id="github-link">
                                    <Image
                                        className="github-link"
                                        id={project.id + "-github"}
                                        src={Github}
                                        alt={project.alt + " github"}
                                    />
                                </Button>
                            </div>
                        </div>
                    ))}
                </Section>
            </div>
        );
    };
};

export default Portfolio;