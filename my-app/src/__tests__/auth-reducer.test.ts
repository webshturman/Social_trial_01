import {setAuthData, setErrorMessage, setLoginStatus} from "../Components/redux/actions/auth-actions";
import {authReducer, InitialStateAuthType} from "../Components/redux/reducers/auth-reducer";

let startState: InitialStateAuthType ;
beforeEach(() => {
    startState = {
        id:null,
        email:null,
        login:null,
        isAuth:false,
        errorMessage:null
    }
})
test('auth status should change', ()=> {
    const action = setLoginStatus(true)
    const endState = authReducer(startState, action)

    expect(endState.isAuth).toBeTruthy()
})
test('error message should be correct', ()=> {
    const message = 'Incorrect name';
    const action = setErrorMessage(message)
    const endState = authReducer(startState, action)

    expect(endState.errorMessage).toBe('Incorrect name')
})

test('login data should be filled correct', ()=> {
    const loginData = {
        id:'123456',
        email: 'kirill.zarya@inbox.ru',
        login: 'Websturman',
        isAuth: true,
    };
    const action = setAuthData(loginData)
    const endState = authReducer(startState, action)

    expect(endState.id).toBe('123456')
    expect(endState.login).toBe('Websturman')
    expect(endState.email).toBe('kirill.zarya@inbox.ru')
})