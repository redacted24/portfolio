import '../index.css'

const Navbar = () => {
    return (
        <div className='nav1'>
            {/* Navbar */}
            <div className="nav2">
                <div id='navHome'>
                    Home
                    {/* <span className='decoration'>0.1435342<br/>0.4314242<br/>0.5677373<br/>0.4153623</span> */}
                </div>
                <div>
                    About
                </div>
                <div>
                    Coding
                </div>
                <div>
                    Photography
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