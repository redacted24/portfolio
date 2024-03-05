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
            </div>
        </div>
    )
}

export default Front