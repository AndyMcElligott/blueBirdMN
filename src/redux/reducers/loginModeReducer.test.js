import loginReducer from './loginModeReducer';

describe('tesing loginModeReducer', () => {
    test('should switch to register mode', () => {
        let state = 'login';
        let action = { type: 'SET_TO_REGISTER_MODE' }
    


        let returnedState = loginReducer(state, action);

        expect(returnedState).toEqual('register');
    });

    test('should switch to register mode', () => {
        let state = 'login';
        let action = { type: 'SET_TO_REGISTER_MODE' }
    

        
        let returnedState = loginReducer(state, action);

        expect(returnedState).toEqual('register');
    });

    test('should have correct initial state', ()=> {
        let state = undefined;
        let action = {};



        let returnedState = loginReducer(state, action);
        expect(returnedState).toEqual('login');
    })
})