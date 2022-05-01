
const initialSate = {
    error: null,
    msg: ''
};

export const errorReducers = ( state =initialSate, action ) => {

    switch ( action.type ) {

        case 'ERROR_MSG':    
            return {
                ...state,
                error: true,
                msg: action.payload
            };

        case 'CLEAR_ERROR_MSG':
            return {
                ...state,
                error: false,
                msg: ''
            };
    
        default:
            return state;
    };

};
