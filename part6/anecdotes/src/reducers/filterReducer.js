const reducer = (state = '', action) => {
    switch(action.type){
        case 'FILTER':
            return action.payload.filter
        default:
            return state
    }
}

export const filterAnecdotes = (filter) => {
    return {type: 'FILTER', payload: { filter }}
}

export default reducer