import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchBscLiquidityScan = createAsyncThunk('bscLiquidityScan/fetchBscLiquidityScan', async (contractAddress) => {
    const response = await axios.get(`https://api.develocity.finance/api/v1/contract/getBscLiquidityScan/${contractAddress}`)
    return response.data.result
})



const bscLiquidityScanSlice = createSlice({
    name: 'bscLiquidityScan',
    initialState: {
        bscLiquidity: null,
        loading: false,
        error: null,
    },
    extraReducers: {
        [fetchBscLiquidityScan.fulfilled]: (state, action) => {
            state.bscLiquidity = action.payload
            state.loading = 'success'
        },
        [fetchBscLiquidityScan.pending]: (state, action) => {
            state.loading = true
            state.error = null
            state.bscLiquidity = action.payload
        },
        [fetchBscLiquidityScan.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        }

    }
})


export default bscLiquidityScanSlice.reducer