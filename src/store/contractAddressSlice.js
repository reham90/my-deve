import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    contractAddress: '',
}

export const contractAddressSlice = createSlice({
    name: 'contractAddress',
    initialState,
    reducers: {
        setContractAddress: (state, action) => {
            state.contractAddress = action.payload
        }
    }
})

export const { setContractAddress } = contractAddressSlice.actions
export default contractAddressSlice.reducer
