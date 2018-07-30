// Accepts 2 arguments: 1) _current_ state, 2) action
// Action - always contains 'type'
// Reducer - always returns a (modified) state

export default (item = {}, action) => {
    switch (action.type) {
        case 'LOAD_ITEM':
            // action = {type: 'LOAD_FORECAST', forecast: {}}
            console.log('Load item Action ', action);
            return {...action.item};
        default: 
            return item;
    }
}
