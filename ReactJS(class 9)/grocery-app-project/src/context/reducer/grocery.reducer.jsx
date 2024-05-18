
export const groceryReducer = (states, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            return [...states, action.payload];

        case "REMOVE_ITEM":
            return states.filter(g => g.id !== action.payload.id);

        case "TOGGLE_BUY":
            return states.map(g => {
                if (action.payload.id == g.id) {
                    return { ...g, buy: !g.buy }
                }
                return g;
            });

        default:
            states;
    }
}