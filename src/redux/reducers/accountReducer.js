import constants from '../constants'

var initialState = {
    user: {photos: []}
}

export default(state = initialState, action) => {
    let newState = Object.assign({}, state);
    switch(action.type){
        case constants.USER_RECEIVED:
            const user = {
                id: action.data.user.id,
                photos: action.data.photos
            }
            console.log(user);
            newState.user = user;
            return newState;
        default:
            return state
    }
}