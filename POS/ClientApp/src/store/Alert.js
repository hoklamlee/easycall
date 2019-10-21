const SUCCESS = 'ALERT_SUCCESS';
const ERROR = 'ALERT_ERROR';
const CLEAR = 'ALERT_CLEAR';


const initialState = { type: '', message: '' };

export const actionCreators = {
    success: message => async (dispatch, getState) => {
        dispatch({ type: SUCCESS, message });
    },

    error: message => async (dispatch, getState) => {

        dispatch({ type: ERROR, message });
    },

    clear: message => async (dispatch, getState) => {
        dispatch({ type: CLEAR });
    }
};

export const reducer = (state, action) => {
    state = state || initialState;

    if (action.type == SUCCESS) {
        return {
            ...state,
            type: 'alert-success',
            message: action.message
        }
    }

    if (action.type == ERROR) {
        return {
            ...state,
            type: 'alert-danger',
            message: action.message
        }
    }

    if (action.type == CLEAR) {
        return {
            ...state,
            type: null,
            message: null,
        }
    }
    return state;
};
