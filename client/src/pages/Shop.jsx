import React from 'react'
import { Col, Container } from 'react-bootstrap'
import TypeBar from '../components/TypeBar'
import BrandBar from '../components/BrandBar'
import DeviceList from '../components/DeviceList'

const Shop = () => {
	return (
		<Container>
			<div className='d-flex gap-2 mt-2'>
				<Col md={3}>
					<TypeBar/>
				</Col>
				<Col md={9}>
					<BrandBar/>
					<DeviceList/>
				</Col>
			</div>
		</Container>
	)
}

export default Shop