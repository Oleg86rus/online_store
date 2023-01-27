import React from 'react'
import { Col, Container } from 'react-bootstrap'
import TypeBar from '../components/TypeBar'

const Shop = () => {
	return (
		<Container>
			<div className='mt-3'>
				<Col md={3}>
					<TypeBar/>
				</Col>
				<Col md={9}>
				
				</Col>
			</div>
		</Container>
	)
}

export default Shop