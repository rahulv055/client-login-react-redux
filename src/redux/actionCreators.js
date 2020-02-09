import ActionTypes from './action.Types';


export function login(username,password){
    return  dispatch => {
        dispatch(setLoginPending(true))
        dispatch(setLoginSuccess(false));
        dispatch(setLoginError(null));
        //  callLoginApi(username, password, error => {
        //     dispatch(setLoginPending(false));
        //   if (!error) {
        //     dispatch(setLoginSuccess(true));
        //   } else {
        //     dispatch(setLoginError(error));
        //   }
        // });
let promise = new Promise(function(resolve,reject){
          setTimeout(() => {
            dispatch(setLoginPending(false));
            if (username === 'hruday@gmail.com' && password === 'hruday123') {
              localStorage.setItem('username', 'hruday@gmail.com');
              localStorage.setItem('password','hruday123');
              localStorage.setItem('authenticated',true);
              resolve();
            } else {
               reject(new Error('Invalid email and password'));
            }
          }, 1000);
        }).then(function() { 
          dispatch(setLoginSuccess(true));
      }).catch(function(error) { 
        dispatch(setLoginError(error));
    })

    return promise
    }

}


function setLoginPending(isLoginPending) {
  return {
    type: ActionTypes.SET_LOGIN_PENDING,
    isLoginPending
  };
}

function setLoginSuccess(isLoginSuccess) {
  return {
    type: ActionTypes.SET_LOGIN_SUCCESS,
    isLoginSuccess
  };
}

function setLoginError(loginError) {
  return {
    type: ActionTypes.SET_LOGIN_ERROR,
    loginError
  }
}

// function callLoginApi(email, password, callback) {
//     setTimeout(() => {
//     if (email === 'hruday@gmail.com' && password === 'hruday123') {
//       localStorage.setItem('username', 'hruday@gmail.com');
//       localStorage.setItem('password','hruday123');
//       localStorage.setItem('authenticated',true);
//       return callback(null);
//     } else {
//       return callback(new Error('Invalid email and password'));
//     }
//   }, 1000);
// }