import { FETCH_REQ_STARTED, FETCH_REQ_SUCCESS, FETCH_REQ_FAILURE, CLEAR_DATA } from "./actionType";
import axios from "axios";

const fetchReqStarted = ()=>{
    return {
        type: FETCH_REQ_STARTED,
    }
}
const fetchReqSuccess = (data)=>{
    return {
        type: FETCH_REQ_SUCCESS,
        payload: data
    }
}
const fetchReqFailure = (error)=>{
    return {
        type: FETCH_REQ_FAILURE,
        payload: error
    }
}
export const clearData = ()=>{
    return {
        type: CLEAR_DATA,
    }
}

const fetchData =(term)=> {
    return async (dispatch)=>{
        dispatch(fetchReqStarted());
        try{
            const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${term}`);
            dispatch(fetchReqSuccess(await response.data));
        }catch(error){
            dispatch(fetchReqFailure(error));
        }
    };
}
export default fetchData;