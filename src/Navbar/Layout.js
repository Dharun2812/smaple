import { Outlet, Link } from 'react-router-dom'
import './navbar.css'

const Layout = () => {
	return (
		<>
			<nav>
				<ul className="navbar">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/blogs">Blogs</Link>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/customization">Custom</Link>
					</li>
					<li>
						<Link to="/templates">Templates</Link>
					</li>
				</ul>
			</nav>

			<Outlet />
		</>
	)
}

export default Layout
