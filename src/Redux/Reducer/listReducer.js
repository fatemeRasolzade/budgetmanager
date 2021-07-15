const initialState={
    list:[],
}
export const listReducer= (state=initialState, action) =>{
    
    switch (action.type) {
        case 'ADD_COST':
            return {
                ...state,
                // totalIncome : action.payload.isIncome ? state.totalIncome + parseInt(action.payload.value) : state.totalIncome ,
                // totalExpense : !action.payload.isIncome ? state.totalExpense + parseInt(action.payload.value) : state.totalExpense ,
                list: [action.payload, ...state.list ]
            };
        case 'DELETE_COST':
            return {
                ...state,
                list: state.list.filter(i => i.id !== action.payload.id)
            }
        case 'EDIT_COST':{
            let newList = state.list
            newList.splice(action.payload.index , 1 , action.payload.cost)
            return {
                ...state,
                list : newList
            }
        }
        default:
            return state;
    }
}