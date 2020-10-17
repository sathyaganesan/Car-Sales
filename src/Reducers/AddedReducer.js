
const state = {
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };

export const AddedReducer = (state = additionalFeatures, action) => {
    switch (action.type) {
        case "DELETEFEATURE":
            return {
                ...state, additionalFeatures: [state.additionalFeatures.filter((e) => e.id !== state.additionalFeatures.id)]
            }
        default:
            return state;
    }
}