import pic from "../assets/cv2.png"
import {useEffect} from "react"
import Aos from "aos"
import "aos/dist/aos.css";

const Header = () => {

    useEffect(() => {
        Aos.init({duration: 1000})
    }, [])

    return (
        <div className="header">
            <img src={pic} alt="Profile" className="profile" data-aos="fade-right"/>
            <div className="brief" data-aos="fade-left">
                <h1>Julieta Mullen</h1>
                <h2>SOFTWARE DEVELOPER</h2>
            </div>
            <div className="circle"></div>
        </div>
    )
}

export default Header