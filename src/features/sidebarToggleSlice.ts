import { createSlice } from '@reduxjs/toolkit'

export const sidebarToggleSlice = createSlice({
	name: 'sidebarToggle',
	initialState: false,
	reducers: {
		toggle: (state) => {
			return !state
		},
		close: () => {
			return false
		},
	},
})

export const { toggle, close } = sidebarToggleSlice.actions
export default sidebarToggleSlice.reducer
