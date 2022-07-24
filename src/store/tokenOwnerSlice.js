import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchTokenOwner = createAsyncThunk('tokenOwner/fetchTokenOwner', async (tokenAddress) => {
    const response = await axios.get(`https://api.develocity.finance/api/v1/contract/getBSCOwnerDetails?contractAddress=${tokenAddress}`)
    return response.data.result
})



const tokenOwnerSlice = createSlice({
    name: 'tokenOwner',
    initialState: {
        tokenOwner: [],
        loading: false,
        error: null,
    },
    extraReducers: {
        [fetchTokenOwner.fulfilled]: (state, action) => {
            state.tokenOwner = action.payload
            state.loading='success'
        },
        [fetchTokenOwner.pending]: (state, action) => {
            state.loading = true
            state.error = null
            state.tokenOwner = action.payload
        },
        [fetchTokenOwner.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        }

    }
})


export default tokenOwnerSlice.reducer