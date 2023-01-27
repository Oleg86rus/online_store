import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Auth from '../pages/Auth'
import Basket from '../pages/Basket'
import DevicePage from '../pages/DevicePage'
import Shop from '../pages/Shop'
import { Context } from '../index'
import AdminPanel from '../pages/AdminPanel'

const AppRouter = () => {
	const {user} = useContext(Context)
	
	return (
		<Routes>
			{
				user.isAuth && (<>
						<Route path='/admin' element={<AdminPanel />}/>
						<Route path='/basket' element={<Basket />}/>
					</>)
			}
			<Route path='/shop' element={<Shop />}/>
			<Route path='/login' element={<Auth />}/>
			<Route path='/registration' element={<Auth />}/>
			<Route path='/device/:id?' element={<DevicePage />}/>
			<Route path='*' element={<Navigate to='/shop' replace/>}/>
		</Routes>
	)
}

export default AppRouter