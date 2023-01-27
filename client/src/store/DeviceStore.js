import { makeAutoObservable } from 'mobx'

export default class DeviceStore {
	constructor () {
		this._types = [
			{id: 1, name: 'Холодильники'},
			{id: 2, name: 'Смартфоны'},
			{id: 3, name: 'Ноутбуки'},
			{id: 4, name: 'Планшеты'}
		]
		this._brands = [
			{id: 1, name: 'Apple'},
			{id: 2, name: 'Lenovo'},
			{id: 3, name: 'Samsung'},
			{id: 4, name: 'Asus'}
		]
		this._devices = [
			{id: 1, name: '12pro', price: 100000, rating: 5, img: `https://www.hdretail.ru/upload/iblock/8d0/8d01c02a7a68c45e7d021d9d44efab9f.jpg`},
			{id: 2, name: '13pro', price: 100000, rating: 5, img: `https://www.hdretail.ru/upload/iblock/8d0/8d01c02a7a68c45e7d021d9d44efab9f.jpg`},
			{id: 3, name: '11pro', price: 100000, rating: 5, img: `https://www.hdretail.ru/upload/iblock/8d0/8d01c02a7a68c45e7d021d9d44efab9f.jpg`}
		]
		this._selectedType = {}
		this._selectedBrand = {}
		makeAutoObservable(this)
	}
	
	setTypes(types) {
		this._types = types
	}
	
	setBrands(brands) {
		this._brands = brands
	}
	
	setDevice(devices) {
		this._devices = devices
	}
	
	setSelectedType(type) {
		this._selectedType = type
	}
	
	setSelectedBrand(brand) {
		this._selectedBrand = brand
	}
	
	get types() {
		return this._types
	}
	
	get brands() {
		return this._brands
	}
	
	get devices() {
		return this._devices
	}
	
	get selectedType() {
		return this._selectedType
	}
	
	get selectedBrand() {
		return this._selectedBrand
	}
}