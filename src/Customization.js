import './customization.css'
import { motion } from 'framer-motion'
import { Input } from './components/Inputs'
import { useState } from 'react'

export default function Customization() {
	const [x, setx] = useState(0)
	const [y, sety] = useState(0)
	const [rotate, setRotate] = useState(0)
	const [red, setRed] = useState(180)
	const [blue, setBlue] = useState(180)
	const [green, setGreen] = useState(180)
	const [height, setHeight] = useState(200)
	const [width, setWidth] = useState(200)
	const [opacity, setOpacity] = useState(30)
	let reds, blues, greens
	if (red.toString(16).length === 1) {
		reds = '0' + red.toString(16)
	} else {
		reds = red.toString(16)
	}
	if (blue.toString(16).length === 1) {
		blues = '0' + blue.toString(16)
	} else {
		blues = blue.toString(16)
	}
	if (green.toString(16).length === 1) {
		greens = '0' + green.toString(16)
	} else {
		greens = green.toString(16)
	}
	let color = '#' + reds + greens + blues
	console.log(red, green, blue, color)
	return (
		<>
			<motion.div
				className="box"
				initial={{ opacity: 100 }}
				animate={{
					x,
					y,
					rotate,
					backgroundColor: color,
					height,
					width,
					opacity,
				}}
				transition={{ type: 'spring' }}
			/>
			<div className="inputs">
				<Input value={x} set={setx} min={0} max={window.innerWidth - width}>
					x
				</Input>
				<Input value={y} set={sety} min={0} max={window.innerHeight - height}>
					y
				</Input>
				<Input value={rotate} set={setRotate} min={-180} max={180}>
					rotate
				</Input>
				<Input value={red} set={setRed} min={0} max={255}>
					red
				</Input>
				<Input value={blue} set={setBlue} min={0} max={255}>
					blue
				</Input>
				<Input value={green} set={setGreen} min={0} max={255}>
					green
				</Input>
				<Input value={height} set={setHeight} min={0} max={750}>
					height
				</Input>
				<Input value={width} set={setWidth} min={0} max={750}>
					width
				</Input>
				<Input value={opacity} set={setOpacity} min={0} max={100}>
					opacity
				</Input>
			</div>
		</>
	)
}
