import Project from "./Project"
import hiragana from "../assets/hiragana.jpg"
import colors from "../assets/colors.jpg"
import rps from "../assets/rps.jpg"
import alchimia from "../assets/alchimia.jpg"
import challenge from "../assets/challenge.jpg"
import todo from "../assets/todo.jpg"
import jic from "../assets/jic.jpg"

const Projects = () => {

    const projects = [
        {
            title: "JIC Web",
            description: "Juan Ignacio Cali's personal webpage, consisting of 6 sections developed with NextJS.",
            github: "https://github.com/julietamullen/jic",
            vercel: "https://www.juanignaciocali.com",
            img: jic,
        },
        {
            title: "Hiragana Flashcards",
            description: "When learning japanese, knowing hiragana is one of the first steps, and having flashcards for it can come in really handy.",
            github: "https://github.com/julietamullen/hiragana-flashcards",
            vercel: "https://hiragana-flashcards-seven.vercel.app/",
            img: hiragana,
        },
        {
            title: "Japanese Colors",
            description: "This was my first project with JavaScript. It's a small collection of flashcards showing how some colors are written in japanese.",
            github: "https://github.com/julietamullen/japanesecolors",
            vercel: "https://japanesecolors.vercel.app/",
            img: colors,
        },
        {
            title: "Rock, Paper, Scissors",
            description: "You can play this against another player, or against the computer!",
            github: "https://github.com/julietamullen/rockpaperscissors",
            vercel: "https://rockpaperscissors-theta.vercel.app/",
            img: rps,
        },
        {
            title: "Alchimia",
            description: "A website for an imaginary bar. My goal was to play a little bit with animations and to come up with some fun drinks.",
            github: "https://github.com/julietamullen/alchimia",
            vercel: "https://alchimia.vercel.app/",
            img: alchimia,
        },
        {
            title: "Challenge",
            description: "This was a challenge for a job application! The idea was to make an app where users could redeem products through a points-based system.",
            github: "https://github.com/julietamullen/aerolab-challenge",
            vercel: "https://aerolab-challenge-phi.vercel.app/",
            img: challenge,
        },
        {
            title: "To-Do List",
            description: "A simple to-do list app that uses localStorage so you can come back to it later and remember you still have things to do.",
            github: "https://github.com/julietamullen/todolist-react",
            vercel: "https://todolist-react-nine.vercel.app/",
            img: todo,
        }
    ]

    return (
        <div className="wrapper" id="projects">
            <h2>Projects</h2>
        <div className="projects">
            {
                projects.map(project => {
                    return <Project 
                            title={project.title}
                            description={project.description}
                            github={project.github}
                            vercel={project.vercel}
                            img={project.img}
                            key={Math.floor(Math.random() * 100000)}/>
                })
            }
        </div>
        </div>
    )
}

export default Projects
