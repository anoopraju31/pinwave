import { createSlice } from '@reduxjs/toolkit'

export const sidebarToggleSlice = createSlice({
	name: 'sidebarToggle',
	initialState: false,
	reducers: {
		toggle: (state) => {
			state != state
		},
	},
})

export const { toggle } = sidebarToggleSlice.actions
export default sidebarToggleSlice.reducer
