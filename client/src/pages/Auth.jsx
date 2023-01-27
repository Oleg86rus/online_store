import React from 'react'
import { Button, Card, Container, Form } from 'react-bootstrap'
import { NavLink, useLocation } from 'react-router-dom'
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/constants'

const Auth = () => {
	const containerHeight = {height: window.innerHeight - 54}
	const location = useLocation()
	const isLogin = location.pathname === LOGIN_ROUTE
	
	return (
		<Container className='d-flex justify-content-center align-items-center' style={containerHeight}>
			<Card className='p-5 w-75'>
				<h2 className='m-auto'>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
				<Form className='d-flex flex-column'>
					<Form.Control className='mt-3' placeholder='Введите ваш email...'/>
					<Form.Control className='mt-3' placeholder='Введите ваш пароль...'/>
					<div className='d-flex justify-content-between mt-3 '>
						{isLogin ?
							<div>
								Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйтесь</NavLink>
							</div>
							:
							<div>
								Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войти</NavLink>
							</div>
						}
						<Button variant={'outline-success'}>{isLogin ? 'Войти' : 'Регистрация'}</Button>
					</div>
				</Form>
			</Card>
		</Container>
	)
}

export default Auth