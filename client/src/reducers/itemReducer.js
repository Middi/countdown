// Accepts 2 arguments: 1) _current_ state, 2) action
// Action - always contains 'type'
// Reducer - always returns a (modified) state

export default (items = [], action) => {
    switch (action.type) {
        case 'LOAD_ITEM':
            console.log('Load item Action ', action);
            return [...action.items];
        case 'ADD_ITEM':
            console.log('ADD ITEM CALLED', action);
            return [...items, action.item];
        case 'DELETE_ITEM':
            console.log('DELETE ITEM CALLED', action);
            return items.filter(item => item.id !== action.id);
        default: 
            return items;
    }
}
