import Axios from 'axios'

const BASE_URL = 'http://localhost:3001/api'

const user = JSON.parse(localStorage.getItem('persist:root'))?.user
const currentUser = user && JSON.parse(user).currentUser
const TOKEN = currentUser?.accessToken

export const publicRequest = Axios.create({
	baseURL: BASE_URL,
})

export const userRequest = Axios.create({
	baseURL: BASE_URL,
	headers: { token: `Bearer ${TOKEN}` },
})
