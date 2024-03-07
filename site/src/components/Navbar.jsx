import { Link } from 'react-router-dom'
import '../index.css'

const Navbar = () => {
    return (
        <div className='nav1'>
            {/* Navbar */}
            <div className="nav2">
                <div id='navHome'>
                    <Link to="/">Home</Link>
                </div>
                <div>
                    <a href="#aboutme">About</a>
                </div>
                <div>
                    <a href="#projects">Projects</a>
                </div>
                <div>
                    <Link to="/">Photography</Link>
                </div>
            </div>

            {/* Social Media Icons */}
            <div id='navSocials'>
                <img src='../../assets/linkedin_icon.svg' alt='Linkedin icon' width='36'/>
                <img src='../../assets/email_icon.svg' alt='E-mail icon' width='45'/>
                <img src='../../assets/github_icon.svg' alt='GitHub icon' width='40'/>
            </div>
        </div>
    )

}

export default Navbar