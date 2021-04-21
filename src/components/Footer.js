import githubImg from "../assets/github.png"
import linkedInImg from "../assets/linkedin.png"
import {useEffect} from "react"
import Aos from "aos"
import "aos/dist/aos.css";

const Footer = () => {

    useEffect(() => {
        Aos.init({duration: 1000})
    }, [])

    return (
        <div id="contact">
            <div className="circle"></div>
            <section className="contactInfo" data-aos="fade-right">
                <h2>Let's talk!</h2>
                <p>Please feel free to contact me if you found this interesting or if you feel I could be of help in any project you have, I would love to hear from you!</p>
                <p><b>Email:</b> mul.julieta@gmail.com</p>
                <a href="https://github.com/julietamullen" target="_blank" rel="noreferrer"><img src={githubImg} alt="GitHub" className="icon"/></a>
                <a href="https://www.linkedin.com/in/julietamullen/" target="_blank" rel="noreferrer"><img src={linkedInImg} alt="LinkedIn" className="icon"/></a>
            </section>
        </div>
    )
}

export default Footer