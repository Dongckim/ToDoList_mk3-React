const AddTodo = "ADD_todo"
const changeStatus = 'changeStatusHandler'
const deleteTodo = 'deleteTodo'

export const AddList = (payload) => {
   return { type : AddTodo, payload}
} 
export const changeStatusHandler = (payload) => {
    return { type : changeStatus, payload}
}
export const deleteitem = (payload) => {
    return {type : deleteTodo, payload}
}

const initialState = [
	{
		id: 0,
		title: "리액트 강의보기",
		todo: "챕터 1부터 챕터 12까지 학습",
		isDone: true,
	},
	{
		id: 1,
		title: "점심 먹기",
		todo: "점심 뭐먹지..?",
		isDone: false
	}
]

const reducer = (state = initialState, action) => {
switch (action.type) {
    case AddTodo:
        state.map((item,idx) => item.id = idx)
        return [...state, action.payload]

    case changeStatus:
        const newtodo = state.map((item) => {
            if(item.id === action.payload){
                item.isDone = !item.isDone 
                return item
            } else {
                return item
            }
        })
        return (newtodo)

    case deleteTodo:
        const delTodo = state.filter((item) => item.id !== action.payload)
        return (delTodo)

    default:
    return state;
}
};
  
  export default reducer;