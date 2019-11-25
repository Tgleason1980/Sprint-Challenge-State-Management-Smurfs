import {
    FETCH_SMURFS_START,
    FETCH_SMURFS_SUCCESS,
    FETCH_SMURFS_FAILURE, 
    REMOVE_SMURF
} from "../Actions";

const initialState = {
    form: [],
    smurfs: [],
    error: '',
    isLoading: false,
}

export const reducer = (state = initialState, action) => {
    console.log(state.smurfs)
    switch(action.type) {
        case FETCH_SMURFS_START:
            return {
                ...state,
                isLoading: true,
                error: ""
            }
        case FETCH_SMURFS_SUCCESS:
            return {
                ...state,
                 isLoading: false,
                 smurfs: action.payload,
                 error: ""
            }

        case FETCH_SMURFS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case REMOVE_SMURF:
            return {
                ...state,
                smurfs: state.smurfs.filter(id => {return id.id !== action.payload})
            }
        default:
            return state;
    }
}