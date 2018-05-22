import constants from '../constants'

export default {
    userReceived: (user) => {
        return {
            type: constants.USER_RECEIVED,
            data: user
        }
    }
}