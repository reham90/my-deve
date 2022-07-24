import axios from 'axios';
import {createSlice , createAsyncThunk} from '@reduxjs/toolkit';

export const fetchDistribution =  createAsyncThunk('distribution/fetchScore',
async (contractAddress)=>{
   
    const response = await axios.get(`https://api.develocity.finance/api/v1/contract/BSCholderScan?contractAddress=${contractAddress}`)
    return response.data
      
    });
   



const Dist =  createSlice({
    name: " distribution",
    reducers:{
       
    },
    initialState :{
        data:[],
        status : null

    },
    extraReducers:{
        [fetchDistribution.fulfilled] : (state,{payload}) =>{
            state.data = payload;
            state.status = "success";

        },
        [fetchDistribution.pending] : (state) =>{
            state.status = "loading";

        },
        [fetchDistribution.rejected] : (state) =>{
            state.status = "failed";

        }

    }
})





export default Dist.reducer;