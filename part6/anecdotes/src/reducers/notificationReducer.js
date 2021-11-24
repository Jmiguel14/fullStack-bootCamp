const reducer = (state = null, action) => {
  switch (action.type) {
    case "NOTIFY":
      return action.payload.message;
    
    default:
      return state;
  }
};

export default reducer;

export const createNotification = (message, time) => {
    return async dispatch => {
        dispatch({ type: 'NOTIFY', payload: { message } })
        setTimeout(() => {
            dispatch({ type: 'REMOVE' })
        }, time * 1000)       
    }
}
