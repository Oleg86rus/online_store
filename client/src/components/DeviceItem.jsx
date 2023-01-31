import React from 'react'
import { Card, Col, Image } from 'react-bootstrap'
import star from '../assets/star.png'
import { useNavigate } from 'react-router-dom'
import { DEVICE_ROUTE } from '../utils/constants'

const DeviceItem = ({device}) => {
	const history = useNavigate()
	
	return (
		<Col md={3} className='mt-3' onClick={() => history(DEVICE_ROUTE + '/' + device.id)}>
			<Card
				style={{cursor: 'pointer', width: 150}}
				border={'light'}
			>
				<Image width={150} height={150} src={process.env.REACT_APP_API_URL + device.img} />
				<div className='mt-1 text-black-50 d-flex justify-content-between align-items-center'>
					<div>Samsung...</div>
					<div className='d-flex align-items-center'>
						<div>{device.rating}</div>
						<Image width={20} height={20} src={star}/>
					</div>

				</div>
				<div>
					{device.name}
				</div>
			</Card>
			
		</Col>
	)
}

export default DeviceItem