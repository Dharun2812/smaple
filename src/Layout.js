import { Outlet, Link } from 'react-router-dom'

const Layout = () => {
	return (
		<>
			<nav>
				<ul className="navbar">
					<li>
						<Link to="/customization">Blogs</Link>
					</li>
					<li>
						<Link to="/templates">Contact</Link>
					</li>
				</ul>
			</nav>

			<Outlet />
		</>
	)
}

export default Layout
