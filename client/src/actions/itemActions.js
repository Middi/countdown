export const loadItem = (items = []) => ({
    type: 'LOAD_ITEM',
    items
});

export const addItem = (item) => ({
    type: 'ADD_ITEM',
    item
});

