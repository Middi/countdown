// Accepts 2 arguments: 1) _current_ state, 2) action
// Action - always contains 'type'
// Reducer - always returns a (modified) state

export default (isModalOpen = false, action) => {
    switch (action.type) {
        case 'MODAL_TOGGLE':
            // action = {type: 'LOAD_FORECAST', forecast: {}}
            console.log('Modal Action ', action);
            return !isModalOpen;
        default:
            return isModalOpen;
    }
}
