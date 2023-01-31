import React, { useContext, useEffect } from 'react'
import { Col, Container } from 'react-bootstrap'
import TypeBar from '../components/TypeBar'
import BrandBar from '../components/BrandBar'
import DeviceList from '../components/DeviceList'
import { observer } from 'mobx-react-lite'
import { Context } from '../index'
import {
	fetchBrands,
	fetchDevices,
	fetchTypes,
} from '../http/deviseAPI'

const Shop = observer(() => {
	const {device} = useContext(Context)
	
	useEffect(() => {
		fetchTypes().then(data => device.setTypes(data))
		fetchBrands().then(data => device.setBrands(data))
		fetchDevices().then(data => device.setDevice(data.rows))
	}, [])
	
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
})

export default Shop