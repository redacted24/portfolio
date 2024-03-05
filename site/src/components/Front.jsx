const Front = () => {
    return (
        <div id='frontContainer'>
            <img src='../../assets/bigRadial.png' alt='bigRadial.png' id='bigRadial'/>
            <img src='../../assets/smallRadial.png' alt='smallRadial.png' id='smallRadial'/>

            {/* Title Page and CodeBox */}
            <div className="flex">
                <div id='mainTitle'>
                    <span>hey, <br/>I'm <span className="redGlow">Qiuyu</span>.<br/></span>
                    <span>a programmer</span>
                </div>
                <div id='codeBox'>
                    <div>
                        <p>
                            // Loading...<br/>
                            Enumerating objects... (30432/31923)<br/>
                            Hi! I'm Qiuyu <br/>
                        </p>
                    </div>
                </div>
            </div>

            {/* About Me */}
            <div>
                <h2 className="headings" >About me</h2>
                <div className="gotham font24px spaceEvenly">
                    <div>
                        <p id='aboutmep1'>I am currently a student at <span className="redGlow">Marianopolis College</span> looking to study SE at UWaterloo.</p>
                        <p id='aboutmep2'>Here are some of the things I've worked with:</p>
                        <div className="flex">
                            <ul>
                                <li>React.js</li>
                                <li>Javascript ES6+</li>
                            </ul>
                            <ul>
                                <li>Python</li>
                                <li>Express</li>
                            </ul>
                        </div>
                        <p id='aboutmep3'>Outside of school, I do snowboarding, photography and I enjoy playing/developing <span className="redGlow">video games.</span></p>
                    </div>
                    <img src='../../assets/photome.jpg' alt='photo of me' id='myPhoto'/>
                </div>
            </div>
        </div>
    )
}

export default Front