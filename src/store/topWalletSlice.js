import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


export const fetchWallet = createAsyncThunk('wallet/fetchWallet', async (tokenAddress) => {
    const response = await axios.get(`https://api.develocity.finance/api/v1/contract/BSCholderScan?contractAddress=${tokenAddress}`)
    return response.data.result
})

const topWalletSlice = createSlice({
    name: 'topWallet',
    initialState: {
        topWallet: [],
        loading: false,
        error: null,
    },
    extraReducers: {
        [fetchWallet.fulfilled]: (state, action) => {
            state.topWallet = action.payload
        },
        [fetchWallet.pending]: (state, action) => {
            state.loading = true
            state.error = null
            state.topWallet = action.payload
        },
        [fetchWallet.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        }

    }
})


export default topWalletSlice.reducer


