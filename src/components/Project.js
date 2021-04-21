import vercelImg from "../assets/vercel.png"
import githubImg from "../assets/github.png"
import {useEffect} from "react"
import Aos from "aos"
import "aos/dist/aos.css";


const Project = (props) => {

    useEffect(() => {
        Aos.init({duration: 1000})
    }, [])

    const {title, description, img, vercel, github} = props

    return(
        <div className="project" data-aos="fade-down">
            <h3>{title}</h3>
            <div className="image" style={{ backgroundImage: `url(${img})`}}>
            </div>
            <div className="description">
                <p>{description}</p>
                <div className="links">
                    <a href={github} target="_blank" rel="noreferrer"><img src={githubImg} alt="See on Github" className="icon"/></a>
                    <a href={vercel} target="_blank" rel="noreferrer"><img src={vercelImg} alt="See on Vercel" className="icon"/></a>
                </div>
            </div>
        </div>
    )
}

export default Project