import './css/home.css'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Layout from './Layout'
// import Customization from './Customization'
// import Templates from './Templates'
import { Outlet, Link } from 'react-router-dom'

const Home = () => {
	return (
		<>
			<div className="content">
				<h1>Responsive Web Pages</h1>
				<h2>Create your own web pages</h2>
				<h3>with existing templates or customize one on your own</h3>
			</div>
			<div className="navs">
				<button className="button">
					<span>
						<Link to="/customization">Custom</Link>
					</span>
				</button>
				<button className="button">
					<span>
						<Link to="/templates">Templates</Link>
					</span>
				</button>
				<Outlet />
			</div>
			<div className="temp"></div>
		</>
	)
}

export default Home
