import React, { useContext, useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import { Col, Dropdown, Form } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { Context } from '../../index'
import DropdownToggle from 'react-bootstrap/DropdownToggle'
import DropdownMenu from 'react-bootstrap/DropdownMenu'
import DropdownItem from 'react-bootstrap/DropdownItem'
import {
	createDevice,
	fetchBrands,
	fetchDevices,
	fetchTypes,
} from '../../http/deviseAPI'
import { observer } from 'mobx-react-lite'

const CreateDevice = observer(({show, onHide}) => {
	const {device} = useContext(Context)
	const [name, setName] = useState([])
	const [price, setPrice] = useState([])
	const [file, setFile] = useState(null)
	const [info, setInfo] = useState([])
	
	const addInfo = () => {
		setInfo([...info, {title: '', description: '', number: Date.now()}])
	}
	const removeInfo = (number) => {
		setInfo(info.filter(i => i.number !== number))
	}
	
	const selectFile = (event) => {
		setFile(event.target.files[0])
	}
	
	const changeInfo = (key, value, number) => {
		setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
	}
	
	const addDevice = () => {
		const formData = new FormData()
		formData.append('name', name)
		formData.append('price', `${price}`)
		formData.append('img', file)
		formData.append('brandId', device.selectedBrand.id)
		formData.append('typeId', device.selectedType.id)
		formData.append('info', JSON.stringify(info))
		createDevice(formData).then(data => onHide())
	}
	
	useEffect(() => {
		fetchTypes().then(data => device.setTypes(data))
		fetchBrands().then(data => device.setBrands(data))
		fetchDevices().then(data => device.setDevice(data.rows))
	}, [])
	
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
						<DropdownToggle>{device.selectedType.name || 'Выберите тип'}</DropdownToggle>
						<DropdownMenu>
							{device.types.map(type =>
								<DropdownItem
									key={type.id}
									onClick={() => device.setSelectedType(type)}
								>
									{type.name}
								</DropdownItem>
							)}
						</DropdownMenu>
					</Dropdown>
					<Dropdown className='mt-3 mb-2'>
						<DropdownToggle>{device.selectedBrand.name || 'Выберите бренд'}</DropdownToggle>
						<DropdownMenu>
							{device.brands.map(brand =>
								<DropdownItem
									key={brand.id}
									onClick={() => device.setSelectedBrand(brand)}
								>
									{brand.name}
								</DropdownItem>
							)}
						</DropdownMenu>
					</Dropdown>
					<Form.Control
						className='mt-3'
						value={name}
						onChange={e => setName(e.target.value)}
						placeholder={'Введите название устройства'}
					/>
					<Form.Control
						className='mt-3'
						value={price}
						onChange={e => setPrice(Number(e.target.value))}
						placeholder={'Введите стоимость устройства'}
						type='number'
					/>
					<Form.Control
						className='mt-3'
						onChange={selectFile}
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
								<Form.Control
									value={i.title}
									onChange={e => changeInfo('title', e.target.value, i.number)}
									placeholder='Введите название свойства'
								/>
							</Col>
							<Col md={4}>
								<Form.Control
									value={i.description}
									onChange={e => changeInfo('description', e.target.value, i.number)}
									placeholder='Введите описание свойства'
								/>
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
				<Button variant={'outline-success'} onClick={addDevice}>Добавить</Button>
			</Modal.Footer>
		</Modal>
	)
})

export default CreateDevice