import {
	loginFailure,
	loginStart,
	loginSuccess,
	updateUserStart,
	updateUserSuccess,
	updateUserFailure,
} from './userRedux'
import {
  getOrderStart,
  getOrderSuccess,
  getOrderFailure,
  addOrderStart,
  addOrderSuccess,
  addOrderFailure,
} from './orderRedux'
import { publicRequest, userRequest } from '../services/requestMethods'
import { useEffect, useState } from 'react'

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
export const updateUser = async (id, user, dispatch) => {
  dispatch(updateUserStart());
  try {
    // update
    const res = await userRequest.put(`users/${id}`, user);
    dispatch(updateUserSuccess(res.data));
  } catch (err) {
    dispatch(updateUserFailure());
  }
};

// ORDER

export const createOrder = async (order, dispatch) => {
	dispatch(addOrderStart())
	try {
		const res = await userRequest.post('/orders/new', order);
		dispatch(addOrderSuccess(res.data));
	} catch (err) {
		dispatch(addOrderFailure());
	}
}