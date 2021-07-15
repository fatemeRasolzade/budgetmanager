export const AddCost= (cost) => dispatch=> {
    dispatch({type:"ADD_COST", payload: cost})
}

export const DeleteCost= (cost) => dispatch => {
    dispatch({type:"DELETE_COST", payload: {...cost}});
}
export const EditCost = (index , cost) => dispatch => {
    dispatch({type:"EDIT_COST", payload: {index : index , cost : cost}});
}
