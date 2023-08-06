import { createSlice } from '@reduxjs/toolkit'

export const sidebarToggleSlice = createSlice({
	name: 'sidebarToggle',
	initialState: false,
	reducers: {
		toggle: (state) => {
			return !state
		},
	},
})

export const { toggle } = sidebarToggleSlice.actions
export default sidebarToggleSlice.reducer
