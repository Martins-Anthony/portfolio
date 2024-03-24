import { createSlice } from '@reduxjs/toolkit'

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isOpen: false,
    typeModal: null
  },
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true
      state.typeModal = action.payload
    },
    closeModal: (state, action) => {
      state.isOpen = false
      state.typeModal = null
    }
  }
})

export const { openModal, closeModal } = modalSlice.actions
export default modalSlice.reducer
