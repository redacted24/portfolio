import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Front from './components/Front'
import Navbar from './components/Navbar'

const App = () => {
    const [count, setCount] = useState(0)
    return (
		<Router>
			<Navbar/>
			<Routes>
				<Route path = '/' element = {<Front/>}/>
			</Routes>
		</Router>
    )
}

export default App
