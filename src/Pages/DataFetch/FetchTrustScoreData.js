import axios from 'axios';
import {createSlice , createAsyncThunk} from '@reduxjs/toolkit';
import { useState, useEffect } from "react";



export const fetchScore =  createAsyncThunk('score/fetchScore',
async (contractAddress)=>{
   
    const response = await axios.get(`https://api.develocity.finance/api/v1/contract/humanSummary/${contractAddress}`)
    return response.data
      
    });
   

const Score =  createSlice({
    name: " score",
    reducers:{
       
    },
    initialState :{
        data:[],
        status : null

    },
    extraReducers:{
        [fetchScore.fulfilled] : (state,{payload}) =>{
            state.data = payload;
            state.status = "success";

        },
        [fetchScore.pending] : (state) =>{
            state.status = "loading";

        },
        [fetchScore.rejected] : (state) =>{
            state.status = "failed";

        }

    }
})


export default Score.reducer;