import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { urlApi } from '../../../utils/api/address'

export const putProject = createAsyncThunk(
  'projects/updateProject',
  async ({ projectId, formData }, { getState }, thunkAPI) => {
    try {
      const state = getState()
      const token = state.signIn.admin
      const response = await fetch(urlApi + `/admin/edit/${projectId}`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: formData
      })
      const data = await response.json()
      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong')
      }
      return data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

const putProjectsSlice = createSlice({
  name: 'putProject',
  initialState: {
    projects: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(putProject.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(putProject.fulfilled, (state, action) => {
        state.loading = false
        state.projects = state.projects.map((project) =>
          project._id === action.payload._id ? action.payload : project
        )
      })
      .addCase(putProject.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  }
})

export default putProjectsSlice.reducer
