import React, { useContext, useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import { Col, Dropdown, Form } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { Context } from '../../index'
import DropdownToggle from 'react-bootstrap/DropdownToggle'
import DropdownMenu from 'react-bootstrap/DropdownMenu'
import DropdownItem from 'react-bootstrap/DropdownItem'

const CreateDevice = ({show, onHide}) => {
	const {device} = useContext(Context)
	const [info, setInfo] = useState([])
	
	const addInfo = () => {
		setInfo([...info, {title: '', description: '', number: Date.now()}])
	}
	const removeInfo = (number) => {
		setInfo(info.filter(i => i.number !== number))
	}
	
	return (
		<Modal
			show={show}
			onHide={onHide}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					Добавить устройство
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Dropdown className='mt-3 mb-2'>
						<DropdownToggle>Выберите тип</DropdownToggle>
						<DropdownMenu>
							{device.types.map(type =>
								<DropdownItem key={type.id}>
									{type.name}
								</DropdownItem>
							)}
						</DropdownMenu>
					</Dropdown>
					<Dropdown className='mt-3 mb-2'>
						<DropdownToggle>Выберите бренд</DropdownToggle>
						<DropdownMenu>
							{device.brands.map(brand =>
								<DropdownItem key={brand.id}>
									{brand.name}
								</DropdownItem>
							)}
						</DropdownMenu>
					</Dropdown>
					<Form.Control
						className='mt-3'
						placeholder={'Введите название устройства'}
					/>
					<Form.Control
						className='mt-3'
						placeholder={'Введите стоимость устройства'}
						type='number'
					/>
					<Form.Control
						className='mt-3'
						placeholder={'Введите название устройства'}
						type='file'
					/>
					<hr/>
					<Button
						variant={'outline-dark'}
						onClick={addInfo}
					>
						Добавить новое свойство
					</Button>
					{info.map(i =>
						<div className='d-flex gap-2 mt-3 mb-4' key={i.number}>
							<Col md={4}>
								<Form.Control placeholder='Введите название свойства'/>
							</Col>
							<Col md={4}>
								<Form.Control placeholder='Введите описание свойства'/>
							</Col>
							<Col md={4}>
								<Button
									variant={'outline-danger'}
									onClick={() => removeInfo(i.number)}
								>
									Удалить
								</Button>
							</Col>
						</div>
					)}
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant={'outline-danger'} onClick={onHide}>Закрыть</Button>
				<Button variant={'outline-success'} onClick={onHide}>Добавить</Button>
			</Modal.Footer>
		</Modal>
	)
}

export default CreateDevice