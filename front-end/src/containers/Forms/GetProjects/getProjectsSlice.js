import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { urlApi } from '../../../utils/api/address'

export const getProjects = createAsyncThunk('GetProjects', async (thunkAPI) => {
  try {
    const response = await fetch(urlApi + '/projects', {
      method: 'get'
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

const getProjectsSlice = createSlice({
  name: 'getProjects',
  initialState: {
    loading: false,
    error: null,
    projects: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProjects.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(getProjects.fulfilled, (state, action) => {
        state.loading = false
        state.error = null
        state.projects = action.payload
      })
      .addCase(getProjects.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  }
})

// export const {} = getProjectsSlice.actions
export default getProjectsSlice.reducer
