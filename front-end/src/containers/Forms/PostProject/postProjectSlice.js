import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { urlApi } from '../../../utils/api/address'

export const postProject = createAsyncThunk(
  'PostProject',
  async (payload, { getState }, thunkAPI) => {
    try {
      const state = getState()
      const token = state.signIn.admin
      const response = await fetch(urlApi + '/admin/edit', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: payload
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
  }
)

const postProjectSlice = createSlice({
  name: 'postProject',
  initialState: {
    loading: false,
    error: null,
    editMode: false
  },
  reducers: {
    resetError: (state) => {
      state.error = null
    },
    handleEditMode: (state) => {
      state.editMode = !state.editMode
    },
    resetEditMode: (state) => {
      state.editMode = false
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(postProject.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(postProject.fulfilled, (state) => {
        state.loading = false
        state.error = null
      })
      .addCase(postProject.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  }
})

export const { resetError, handleEditMode, resetEditMode } = postProjectSlice.actions
export default postProjectSlice.reducer
