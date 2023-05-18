import React, { useState, useEffect, useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./Carousel.css";

const Carousel = ({ projects }) => {
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
    const autoPlayIntervalRef = useRef();

    useEffect(() => {
        autoPlayIntervalRef.current = setInterval(() => {
            setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
        }, 3000);

        return () => {
            clearInterval(autoPlayIntervalRef.current);
        };
    }, [projects.length]);

    const handleSlideChange = (currentIndex) => {
        if (autoPlayIntervalRef.current) {
            clearInterval(autoPlayIntervalRef.current);
        }
        setCurrentProjectIndex(currentIndex);
    };

    const renderProjects = () => {
        return projects.map((project, index) => (
            <div key={index} className="project-carousel-container">
                <img src={project.image} alt={project.title} className="project-image" />
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-techstacks">
                    {project.techStacks.map((techStack, i) => (
                        <span key={i} className="tech-stack">
                            {techStack.title}
                        </span>
                    ))}
                </div>
                <div className="project-buttons">
                    <a href={project.deploy} target="_blank" rel="noopener noreferrer">
                        View
                    </a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                        Github
                    </a>
                </div>
            </div>
        ));
    };

    const renderSlideButtons = () => {
        return projects.map((_, index) => (
            <button
                key={index}
                className={`slide-button ${index === currentProjectIndex ? "active" : ""}`}
                onClick={() => handleSlideChange(index)}
                type="button"
            />
        ));
    };

    return (
        <div className="carousel-container">
            <AliceCarousel
                mouseTracking
                items={renderProjects()}
                responsive={{
                    0: { items: 1 },
                    600: { items: 2 },
                    1024: { items: 2 },
                }}
                autoPlay
                autoPlayInterval={3000}
                infinite
                disableDotsControls
                disableButtonsControls
                onSlideChanged={handleSlideChange}
                activeIndex={currentProjectIndex}
            />
            <div className="slide-buttons-container">{renderSlideButtons()}</div>
        </div>
    );
};

export default Carousel;
