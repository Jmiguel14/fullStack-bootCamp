const reducer = (state = null, action) => {
  switch (action.type) {
    case "NOTIFY":
      return action.payload.message;
    case 'REMOVE':
    return null
    
    default:
      return state;
  }
};

export default reducer;

export const createNotification = (message) => {
 return { type: 'NOTIFY', payload: { message } }
}

export const removeNotification = () => {
    return { type: 'REMOVE' }
}