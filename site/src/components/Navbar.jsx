import { Link } from "react-router-dom"
import "../index.css"

const Navbar = () => {
    return (
        <>
            <div id="tempfix"></div>
            <div className="nav1">
                {/* Navbar */}
                <div className="nav2">
                    <div id="navHome">
                        <Link to="/">Home</Link>
                    </div>
                    <div className="anchor">
                        <a href="#aboutme" className="anchor">About</a>
                    </div>
                    <div>
                        <a href="#projects" className="anchor">Projects</a>
                    </div>
                    <div>
                        <a href="#projects" className="anchor">Photography</a>
                    </div>
                </div>

                {/* Social Media Icons */}
                <div id="navSocials">
                    <img src="../../assets/linkedin_icon.svg" alt="Linkedin icon" width="36"/>
                    <img src="../../assets/email_icon.svg" alt="E-mail icon" width="45"/>
                    <img src="../../assets/github_icon.svg" alt="GitHub icon" width="40"/>
                </div>
            </div>
        </>

    )

}

export default Navbar