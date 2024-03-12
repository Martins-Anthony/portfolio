import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { urlApi } from '../../utils/api/address'

export const signIn = createAsyncThunk('signIn', async (id, thunkAPI) => {
  try {
    const response = await fetch(urlApi + '/admin/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(id)
    })
    const data = await response.json()
    if (data.error) {
      throw new Error(data.error)
    } else {
      return data
    }
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})

const signInSlice = createSlice({
  name: 'signIn',
  initialState: {
    loading: false,
    error: null,
    isSignedIn: false,
    admin: null
  },
  reducers: {
    signOut: (state) => {
      state.isSignedIn = false
      state.admin = null
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.isSignedIn = true
        state.admin = action.payload
        state.loading = false
        state.error = null
      })
      .addCase(signIn.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  }
})

export const { signOut } = signInSlice.actions
export default signInSlice.reducer
