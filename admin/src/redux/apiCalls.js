import { loginFailure, loginStart, loginSuccess } from './userRedux'
import { publicRequest } from '../services/requestMethods'

export const login = async (dispatch, user) => {
	dispatch(loginStart())
	try {
		const res = await publicRequest.post('/auth/login', user)
		dispatch(loginSuccess(res.data))
	} catch (err) {
		dispatch(loginFailure())
	}
}

export const registerUser = async (data) => {
	try {
		const res = await publicRequest.post('/auth/register', data)
		return res.data
	} catch (error) {
		throw error
	}
}
