import { FETCH_AD_REQUEST, FETCH_AD_SUCCESS, FETCH_AD_FAILURE, FETCH_AD_STATUS } from './actions';

const initialState = {
    loading: false,
    status: false,
    ads: [],
    error: ''
}

export const AdReducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_AD_REQUEST:
            return {
                ...state,
                loading: true
            }
        
        case FETCH_AD_STATUS:
            return {
                ...state,
                status: true
            }
        
        case FETCH_AD_SUCCESS:
            return {
                ...state,
                loading: false,
                ads: action.payload
            }

        case FETCH_AD_FAILURE:
            return {
                ...state,
                loading: false,
                ads: [],
                error: action.payload
            }
    
        default: return state
    }

}

export default AdReducer;