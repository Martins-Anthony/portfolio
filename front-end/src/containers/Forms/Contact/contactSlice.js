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
  name: 'email',
  initialState: {
    status: 'idle',
    error: null,
    message: null
  },
  reducers: {
    resetMessage: (state) => {
      state.message = null
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendMessage.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(sendMessage.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.error = null
        state.message = action.payload
      })
      .addCase(sendMessage.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})

export const { resetMessage } = contactSlice.actions
export default contactSlice.reducer
