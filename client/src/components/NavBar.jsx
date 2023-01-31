import React, { useContext } from 'react'
import { Context } from '../index'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useNavigate } from 'react-router-dom'
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/constants'
import { Button } from 'react-bootstrap'
import { observer } from 'mobx-react-lite'

const NavBar = observer(() => {
	const {user} = useContext(Context)
	const history = useNavigate()
	
	const logout = () => {
		user.setUser({})
		user.setIsAuth(false)
	}
	
	return (
		<Navbar bg="dark" variant="dark">
			<Container>
				<NavLink className='text-white text-decoration-none' to={SHOP_ROUTE}>КупиДевайс</NavLink>
				{
					user.isAuth ?
						<Nav className="ml-auto text-white">
							<Button
								variant={'outline-light'}
								onClick={() => history(ADMIN_ROUTE)}
							>
								Админ панель
							</Button>
							<Button
								variant={'outline-light'}
								className='ms-2'
								onClick={() => logout()}
							>
								Выйти
							</Button>
						</Nav>
						:
						<Nav className="ml-auto text-white">
							<Button variant={'outline-light'} onClick={() => history(LOGIN_ROUTE)}>Авторизация</Button>
						</Nav>
				}
			</Container>
		</Navbar>
	)
})

export default NavBar