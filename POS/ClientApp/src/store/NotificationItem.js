import { notificationItemService } from '../services/notificationItemService';
import { history } from '../helpers/history';
import { actionCreators as alertAction } from './Alert';



const GETALL_REQUEST = 'NOTIFICATIONITEM_GETALL_REQUEST';
const GETALL_SUCCESS = 'NOTIFICATIONITEM_GETALL_SUCCESS';
const GETALL_FAILURE = 'NOTIFICATIONITEM_GETALL_FAILURE';

const GET_REQUEST = 'NOTIFICATIONITEM_GET_REQUEST';
const GET_SUCCESS = 'NOTIFICATIONITEM_GET_SUCCESS';
const GET_FAILURE = 'NOTIFICATIONITEM_GET_FAILURE';

const ADD_REQUEST = 'NOTIFICATIONITEM_ADD_REQUEST';
const ADD_SUCCESS = 'NOTIFICATIONITEM_ADD_SUCCESS';
const ADD_FAILURE = 'NOTIFICATIONITEM_ADD_FAILURE';

const DELETE_REQUEST = 'NOTIFICATIONITEM_DELETE_REQUEST';
const DELETE_SUCCESS = 'NOTIFICATIONITEM_DELETE_SUCCESS';
const DELETE_FAILURE = 'NOTIFICATIONITEM_DELETE_FAILURE';

const UPDATE_REQUEST = 'NOTIFICATIONITEM_UPDATE_REQUEST';
const UPDATE_SUCCESS = 'NOTIFICATIONITEM_UPDATE_SUCCESS';
const UPDATE_FAILURE = 'NOTIFICATIONITEM_UPDATE_FAILURE';

const initialState = {
    createSuccess: false,
    loading: false,
    error: '',
    items: [],
    item: null,
    currentUser: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).userId : null,
};

export const actionCreators = {
    addNotificationItem: (name,type, pageContent, notificationItemMedias, notificationItemMethods, userId) => async (dispatch, getState) => {
        dispatch({ type: ADD_REQUEST });

        return new Promise((resolve, reject) => {
            notificationItemService.addNotificationItem(name, type, pageContent, notificationItemMedias, notificationItemMethods, userId)
                .then(
                    item => {
                        dispatch({ type: ADD_SUCCESS, item });
                        resolve(true);
                    },
                    error => {
                        dispatch({ type: ADD_FAILURE, error });
                        dispatch(alertAction.error(error));
                        resolve(false);

                    }
                );

        });

    },
    updateNotificationItem: (NotificationItemId,name, location, phoneNo, contactPerson, userId) => async (dispatch, getState) => {
        dispatch({ type: UPDATE_REQUEST });

        return new Promise((resolve, reject) => {
            notificationItemService.updateNotificationItem(NotificationItemId,name, location, phoneNo, contactPerson, userId)
                .then(
                    item => {
                        dispatch({ type: UPDATE_SUCCESS, item });
                        resolve(true);
                    },
                    error => {
                        dispatch({ type: UPDATE_FAILURE, error });
                        dispatch(alertAction.error(error));
                        resolve(false);

                    }
                );

        });
    },
    deleteNotificationItem: (notificationItemId) => async (dispatch, getState) => {
        dispatch({ type: DELETE_REQUEST });

        notificationItemService.deleteNotificationItem(notificationItemId)
            .then(
                item => {
                    dispatch({ type: DELETE_SUCCESS, item });
                },
                error => {
                    dispatch({ type: DELETE_FAILURE, error });
                    dispatch(alertAction.error(error));
                }
            );
    },
    getNotificationItemsByCategory: (category) => async (dispatch, getState) => {
        dispatch({ type: GETALL_REQUEST });

        notificationItemService.getNotificationItemsByCategory(category)
            .then(
                items => {
                    dispatch({ type: GETALL_SUCCESS, items });
                },
                error => {
                    dispatch({ type: GETALL_FAILURE, error });
                    dispatch(alertAction.error(error));
                }
            );
    },
    getNotificationItemById: (id) => async (dispatch, getState) => {
        dispatch({ type: GET_REQUEST });

        notificationItemService.getNotificationItemById(id)
            .then(
                item => {
                    dispatch({ type: GET_SUCCESS, item });
                },
                error => {
                    dispatch({ type: GET_FAILURE, error });
                    dispatch(alertAction.error(error));
                }
            );
    },
    getAllNotificationItems: () => async (dispatch, getState) => {
        dispatch({ type: GETALL_REQUEST });

        notificationItemService.getAllNotificationItems()
            .then(
                items => {
                    dispatch({ type: GETALL_SUCCESS, items });
                },
                error => {
                    dispatch({ type: GETALL_FAILURE, error });
                    dispatch(alertAction.error(error));
                }
            );
    }
};

export const reducer = (state, action) => {
    state = state || initialState;

    if (action.type == GETALL_REQUEST) {
        return {
            ...state,
            loading: true
        }
    }

    if (action.type == GETALL_SUCCESS) {
        //console.log(action.items)
        action.items.map(i => {
            i.key = i.notificationItemId;
        })
        return {
            ...state,
            items: action.items,
            loading: false
        }
    }

    if (action.type == GETALL_FAILURE) {
        return {
            ...state,
            error: action.error,
            loading: false
        }
    }


    if (action.type == GET_REQUEST) {
        return {
            ...state,
            loading: true
        }
    }

    if (action.type == GET_SUCCESS) {
        return {
            ...state,
            item: action.item,
            loading: false
        }
    }

    if (action.type == GET_FAILURE) {
        return {
            ...state,
            error: action.error,
            loading: false
        }
    }


    if (action.type == ADD_REQUEST) {
        return {
            ...state,
            loading: true
        }
    }

    if (action.type == ADD_SUCCESS) {
        return {
            ...state,
            //items: state.items.push(action.item),
            loading: false
        }
    }

    if (action.type == ADD_FAILURE) {
        return {
            ...state,
            error: action.error,
            loading: false
        }
    }

    if (action.type == DELETE_REQUEST) {
        return {
            ...state,
            loading: true
        }
    }

    if (action.type == DELETE_SUCCESS) {
        var newItems = state.items.filter(function (obj) {
            return obj.notificationItemId !== action.item.notificationItemId;
        });

        return {
            ...state,
            items: newItems,
            loading: false
        }
    }

    if (action.type == DELETE_FAILURE) {
        return {
            ...state,
            error: action.error,
            loading: false
        }
    }

    if (action.type == UPDATE_REQUEST) {
        return {
            ...state,
            loading: true,
        }
    }

    if (action.type == UPDATE_SUCCESS) {
        return {
            ...state,
            //item: action.item,
            loading: false,
        }
    }

    if (action.type == UPDATE_FAILURE) {
        return {
            ...state,
            loading: false,
        }
    }



    return state;
};
