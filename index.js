const redux = require('redux');
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';


function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}
function buyIceCream() {
    return {
        type: BUY_ICECREAM
    }
}

const initialCakeState = {
    numOfCakes: 10
}

const initialIceCreamsState = {
    numofIceCreams: 20
}
const Cakereducer = (state = initialCakeState,action) => {

    switch(action.type){
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        
        default: return state
    }
}

const IceCreamreducer = (state = initialIceCreamsState,action) => {

    switch(action.type){
        case BUY_ICECREAM: return{
            ...state,
            numofIceCreams: state.numofIceCreams -1
        }
        default: return state
    }
}

const rootReducer = combineReducers({
    cake: Cakereducer,
    icecream: IceCreamreducer
})


const store = createStore(rootReducer);
console.log('Initial state', store.getState());
const unsubscribe= store.subscribe(() => console.log('Updated state', store.getState()));

store.dispatch(buyCake());
store.dispatch(buyIceCream());
unsubscribe();
