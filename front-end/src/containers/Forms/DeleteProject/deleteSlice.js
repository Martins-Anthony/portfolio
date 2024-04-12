import { createAsyncThunk } from '@reduxjs/toolkit'
import { urlApi } from '../../../utils/api/address'

export const deleteProject = createAsyncThunk(
  'projects/deleteProject',
  async (projectId, { getState }) => {
    try {
      const state = getState()
      const token = state.signIn.admin

      const response = await fetch(`${urlApi}/admin/edit/${projectId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      const data = await response.json()
      if (data.error) {
        throw new Error(data.error)
      } else {
        return data
      }
    } catch (error) {
      throw new Error(error.message)
    }
  }
)
