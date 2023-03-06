import { createStore } from "redux";
import { combineReducers } from "redux";
import reducer from "../modules/todo_reducer";

//createStore()이랑 combineReducers() 이 뭔지 알려하지마!!!
//생각하지말고 그냥 무지성으로 쓰기.


const rootReducer = combineReducers({reducer}); 
const store = createStore(rootReducer); 

export default store; 
