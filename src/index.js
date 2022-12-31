import { StrictMode /* useState */ } from 'react'
import * as ReactDOMClient from 'react-dom/client'

import App from './Navbar'
import './css/index.css'
// import { Refresh } from './template/Refresh'

function AppWithUI() {
	// const [count, setCount] = useState(0)

	return (
		<StrictMode>
			{/* <Refresh onClick={() => setCount(count + 1)} /> */}
			<header>
				<App />
			</header>
			<footer></footer>
		</StrictMode>
	)
}

const rootElement = document.getElementById('root')
const root = ReactDOMClient.createRoot(rootElement)
root.render(<AppWithUI />)
