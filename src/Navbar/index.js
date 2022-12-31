import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './../Home'
import Blogs from './Blogs'
import Contact from './Contact'
import NoPage from './NoPage'
import Customization from '../Customization'
import Templates from '../Templates'

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="blogs" element={<Blogs />} />
					<Route path="contact" element={<Contact />} />
					<Route path="*" element={<NoPage />} />
					<Route path="customization" element={<Customization />} />
					<Route path="templates" element={<Templates />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}
