import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { urlApi } from '../../../utils/api/address'

export const sendMessage = createAsyncThunk('sendMessage', async ({ formData }, thunkAPI) => {
  try {
    const response = await fetch(urlApi + '/send-email', {
      method: 'POST',
      body: formData
    })

    if (!response.ok) {
      const errorMessage = await response.text()
      throw new Error('Failed to send message', errorMessage)
    }
    const data = await response.json()
    return data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})

const contactSlice = createSlice({
  name: 'message',
  initialState: {
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendMessage.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(sendMessage.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.error = null
      })
      .addCase(sendMessage.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})

export default contactSlice.reducer
