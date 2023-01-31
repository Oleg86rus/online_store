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
import Pages from '../components/Pages'

const Shop = observer(() => {
	const {device} = useContext(Context)
	
	useEffect(() => {
		fetchTypes().then(data => device.setTypes(data))
		fetchBrands().then(data => device.setBrands(data))
		fetchDevices(null, null, 1, 2).then(data => {
			device.setDevices(data.rows)
			device.setTotalCount(data.count)
		})
	}, [])
	console.log(device.selectedType.id, device.selectedBrand.id)
	useEffect(() => {
		fetchDevices(device.selectedType, device.selectedBrand, device.page, 2).then(data => {
			device.setDevices(data.rows)
			device.setTotalCount(data.count)
		})
	}, [device.page, device.selectedType, device.selectedBrand,])
	
	return (
		<Container>
			<div className='d-flex gap-2 mt-2'>
				<Col md={3}>
					<TypeBar/>
				</Col>
				<Col md={9}>
					<BrandBar/>
					<DeviceList/>
					<Pages/>
				</Col>
			</div>
		</Container>
	)
})

export default Shop