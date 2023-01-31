import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Image } from 'react-bootstrap'
import bigStar from '../assets/bigStar.png'
import { useParams } from 'react-router-dom'
import { fetchOneDevice } from '../http/deviseAPI'

const DevicePage = () => {
	const [device, setDevice] = useState({info: []})
	const { id } = useParams()
	
	const bigStarStyle = {
		background: `url(${bigStar}) no-repeat center center`,
		width: 240,
		height: 240,
		backgroundSize: 'cover',
		fontSize: 64
	}
	
	useEffect(() => {
		fetchOneDevice(id).then(data => setDevice(data))
	}, [])
	
	return (
		<Container className='mt-3'>
			<div className='d-flex gap-2'>
				<Col md={4}>
					<Image width={300} height={300} src={process.env.REACT_APP_API_URL + device.img}/>
				</Col>
				<Col md={4}>
					<div className='d-flex gap-2'>
						<h2>{device.name}</h2>
						<div
							className='d-flex align-items-center justify-content-center'
							style={bigStarStyle}
						>
							{device.rating}
						</div>
					</div>
				</Col>
				<Col md={4}>
					<Card
						className='d-flex flex-column align-items-center justify-content-around'
						style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
					>
						<h3>от {device.price} рублей</h3>
						<Button variant={'outline-dark'}>Добавить в корзину</Button>
					</Card>
				</Col>
			</div>
			<div className='d-flex gap-2 flex-column mt-3'>
				<h1>Характеристики</h1>
				{device.info.map((info, index) =>
					<div
						className='d-flex gap-2'
						key={info.id}
						style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}
					>
						{info.title}: {info.description}
					</div>
				)}
			</div>
		</Container>
	)
}

export default DevicePage