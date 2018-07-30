// Accepts 2 arguments: 1) _current_ state, 2) action
// Action - always contains 'type'
// Reducer - always returns a (modified) state

export default (items = [], action) => {
    switch (action.type) {
        case 'LOAD_ITEM':
            // action = {type: 'LOAD_FORECAST', forecast: {}}
            console.log('Load item Action ', action);
            return [...action.items];
        case 'ADD_ITEM':
            console.log('ADD ITEM CALLED', action);
            // Return: 1) take existing array 2) add item to existing array
            return [...items, action.item];
        case 'DELETE_ITEM':
            console.log('DELETE ITEM CALLED', action);
            // Return: 1) take existing array 2) add item to existing array
            console.log('items ', items);
            console.log('action ', action);
            return items.filter(item => item._id !== action.item);
            
        default: 
            return items;
    }
}
