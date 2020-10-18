
  const state = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };

export const FEATURE = {
    ADD: 'add',
    REMOVE: 'remove',
}

export const Reducer = (state, action) => {
    switch (action.type) {
        case "FEATURE.ADD":
            return {
                ...state,
                additionalPrice: state.additionalPrice + action.payload.price,
                car: {
                    ...state.car, feature: [
                        ...state.car.feature, action.payload
                    ],
                    addditionalFeatures: [...state.additionalFeatures, ]
                }
            }
        case "FEATURE.REMOVE":
            return {
                ...state,
                addtionalPrice: state.additionalFeatures - action.payload.price,
                car: {
                    feature: [...state.car.feature.filter((item) => item.id !== action.payload.id)],
                    additionalFeatures: [...state.addditionalFeatures, ]
                }
            }
        default:
            return state;
    }
}