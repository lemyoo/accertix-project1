import {TEST_TYPE} from '../types/types';

const initialState ={
    testADetails:{},
}

const reducers = (state=initialState, action)=>{
    switch(action.type){
        case TEST_TYPE:
            return {...state, testADetails: action.payload.data};
        default:
            return state;
        }

}

export default reducers;