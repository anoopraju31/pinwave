import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import sidebarToggleReducer from './features/sidebarToggleSlice'

const store = configureStore({
	reducer: {
		sidebartoggle: sidebarToggleReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
