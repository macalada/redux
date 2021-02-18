const redux = require('redux')
const reduxLogger = require('redux-logger')

const logger =reduxLogger.createLogger()
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware

const BUY_CAKE='BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM'
function buyCake(){
    return {
        type:BUY_CAKE,
        info:'First redux action'
    }
}
function buyIceCream(){
    return {
        type:BUY_ICECREAM,
        info:'First redux action'
    }
}
const initialCakeState  = {
    numOfCakes:10
}
const initialIceState  = {
    numOfIceCream:20
}
const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes -1
        }           
        default: return state
    }
}
const iceCreamReducer = (state = initialIceState, action) => {
    switch (action.type) {
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCream: state.numOfIceCream -1
        }           
        default: return state
    }
}
const rootReducers = combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer
})
const store =redux.createStore(rootReducers, applyMiddleware(logger))
console.log('Initial state', store.getState())
const unsubscribe = store.subscribe(()=> {})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe()