import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchBSCTrasaction= createAsyncThunk('bSCTrasaction/fetchBSCTrasaction', async (tokenAddress) => {
    const response = await axios.get(`https://api.develocity.finance/api/v1/contract/getBSCTrasaction?contractAddress=${tokenAddress}`)
    return response.data.result
})



const bSCTrasactionSlice = createSlice({
    name: 'bSCTrasaction',
    initialState: {
        bSCTrasaction: [],
        loading: false,
        error: null,
    },
    extraReducers: {
        [fetchBSCTrasaction.fulfilled]: (state, action) => {
            state.bSCTrasaction = action.payload
            state.loading='success'
        },
        [fetchBSCTrasaction.pending]: (state, action) => {
            state.loading = true
            state.error = null
            state.bSCTrasaction = action.payload
        },
        [fetchBSCTrasaction.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        }

    }
})


export default bSCTrasactionSlice.reducer