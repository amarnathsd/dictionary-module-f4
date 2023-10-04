import { FETCH_REQ_STARTED, FETCH_REQ_SUCCESS, FETCH_REQ_FAILURE, CLEAR_DATA } from "../Action/actionType"

const initialState = {
    loading : false,
    data : [],
    error : null
}

const fetchReducer = (state = initialState, action)=>{
    switch(action.type){
        case FETCH_REQ_STARTED :
            return {
                ...state, loading:true, data: [], error:null
            };
        case FETCH_REQ_SUCCESS :
            return {
                ...state, loading:false, data:action.payload, error:null 
            };
        case FETCH_REQ_FAILURE :
            return {
                ...state, loading:false, data:[], error:action.payload 
            };
        case CLEAR_DATA : return initialState;
        default : return state;
    }
}

export default fetchReducer;