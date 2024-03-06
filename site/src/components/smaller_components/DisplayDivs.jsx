import {useState} from 'react'

const DisplayDivs = () => {
    const [display, setDisplay] = useState(false)
    const handleDivClick = () => {
        console.log('tes')
        let temp = display
        setDisplay(!temp)
        const elem = document.getElementsByTagName("div")
        for (let i = 0; i < elem.length; i++) {
            elem[i].style.borderWidth = temp ? "1px" : "0px"
        }
    }
        
    return (
        <button id="displaydivs" onClick={handleDivClick}>display divs</button>
    )
}

export default DisplayDivs