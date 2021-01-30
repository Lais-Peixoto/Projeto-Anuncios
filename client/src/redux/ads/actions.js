import Axios from 'axios';

export const FETCH_AD_REQUEST = "FETCH_AD_REQUEST";
export const FETCH_AD_STATUS  = "FETCH_AD_STATUS";
export const FETCH_AD_SUCCESS = "FETCH_AD_SUCCESS";
export const FETCH_AD_FAILURE = "FETCH_AD_FAILURE";

export const fetchAdRequest = () => {
    return {
        type: FETCH_AD_REQUEST
    }
}

export const fetchAdSuccess = (ads) => {
    return {
        type: FETCH_AD_SUCCESS,
        payload: ads
    }
}

export const fetchAdStatus = () => {
    return {
        type: FETCH_AD_STATUS
    }
}

export const fetchAdFailure = (error) => {
    return {
        type: FETCH_AD_FAILURE,
        payload: error
    }
}

export const PostOneAd = (title, content) => {
    return (
        (dispatch) => {
            const ad = {
                title: title,
                content: content
            };
            
            dispatch(fetchAdRequest());
            Axios.post("http://localhost:3001/create", ad)
                .then( () => {
                    // const newStatus = response.status;
                    dispatch(fetchAdStatus());
                })
                .catch(error => {
                    const errorMsg = error.message;
                    dispatch(fetchAdFailure(errorMsg));
                })
        }
    );
};

export const GetAllAds = () => {
    return (
        (dispatch) => {
            dispatch(fetchAdRequest());
            Axios.get("http://localhost:3001/")
                .then(response => {
                    const ads = response.data;
                    dispatch(fetchAdSuccess(ads));
                })
                .catch(error => {
                    const errorMsg = error.message;
                    dispatch(fetchAdFailure(errorMsg));
                })
        }
    );
}