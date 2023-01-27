import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { Context } from '../index'

const DeviceList = observer(() => {
	const {device} = useContext(Context)
	
	return (
		<div>
		
		</div>
	)
})

export default DeviceList