import Cell from '../components/smaller_components/Cell'
import DisplayDivs from '../components/smaller_components/DisplayDivs'

const Front = () => {
    return (
        <div id='frontContainer'>
            <DisplayDivs/>
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
                <div className='headings'>
                    <img src="../../assets/separation.svg" alt="separator" className='separator'/>
                    <h2 id="aboutme">About me</h2>
                </div>
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

            {/* Projects Cells */}
        <div>
            <div className='headings'>
                    <img src="../../assets/separation.svg" alt="separator" className='separator'/>
                    <h2>Projects</h2>
                </div>
                <div id='projects'>
                    <Cell title="Duel Vision" description="As a team, built a multiplayer game inspired from the classical spaceship game, with a twist: instead of controlling the spaceship with arrow keys, you control it with your hand." skills={["React.js", "Javascript"]} link="https://github.com/redacted24/duelvision" bookmarked={true}/>
                    <Cell title="CodeML Exo" link="https://github.com/redacted24/codeml" description="As a team, built an ML model trained to predict bus ridership on buses where sensor data is missing." skills={["Python", "Tensorflow", "KerasTuner", "Pandas", "Numpy"]}/>
                    <Cell title="SAP Mechanic" link="https://github.com/sivabalansm/conuhacks" description="As part of ConuHacks 2024, our team built a web-based internal application for optimizing scheduling times of an auto repair shop while reducing losses." skills={["React.js", "Javascript"]}/>
                </div>
            </div>
        </div>
    )
}

export default Front