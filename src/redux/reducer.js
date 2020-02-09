import ActionTypes from './action.Types';
import employeelist from './employee.data'

const INITAL_STATE = {
    isLoginPending: false,
    isLoginSuccess: false,
    loginError: null,
    employeeList: employeelist.user
}

const Reducer = (state = INITAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.SET_LOGIN_PENDING:
            return {
                ...state,
                isLoginPending: action.isLoginPending,
            }
        case ActionTypes.SET_LOGIN_SUCCESS:
            return {
                ...state,
                isLoginSuccess: action.isLoginSuccess
            }

        case ActionTypes.SET_LOGIN_ERROR:
            return {
                ...state,
                loginError: action.loginError
            }
        case ActionTypes.LOG_OUT:
            return {
                ...state,
                isLoginSuccess: action.payload
            }
        default:
            break;
    }

    return state;
}

export default Reducer;