import axios from "axios";
import {createSlice , createAsyncThunk} from '@reduxjs/toolkit';

export const fetchBSCResult=createAsyncThunk('bsc/fetchBSCResult',
    async(contractaddress)=>{
        const response= await axios.get(`https://api.develocity.finance/api/v1/contract/getBSCContractDetail/${contractaddress}`) 
        return response.data
    }
);

const GetBSCdata=createSlice({
    name:'bsc',
    reducers:{

    },
    initialState:{
        data:[],
        status:null
    },
    extraReducers:{
        [fetchBSCResult.fulfilled] : (state,{payload}) =>{
            state.data = payload;
            state.status = "success";

        },
        [fetchBSCResult.pending] : (state) =>{
            state.status = "loading";

        },
        [fetchBSCResult.rejected] : (state) =>{
            state.status = "failed";

        }
    }

})

export default GetBSCdata.reducer;
