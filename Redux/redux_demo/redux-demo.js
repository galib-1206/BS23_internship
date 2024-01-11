const redux = require('redux');

//reducer func

//receive two parameters (old state, dispathched action) , return a new state object or can be a number also
const counterReducer =(state = {counter:0}, action) =>{
    if(action.type==='increment'){
        return{
            counter: state.counter + 1
        }
    }

    if(action.type==='decrement'){
        return{
            counter: state.counter - 1
        }

}
return state;
}
//central data center
const store = redux.createStore(counterReducer);

console.log(store.getState())

//subscriber func 
const counterSubscriber =()=>{
    const latestState = store.getState();
    console.log(latestState);
}
store.subscribe(counterSubscriber);

//action: dispatch a object
store.dispatch({type:'increment'})
store.dispatch({type:'decrement'})

