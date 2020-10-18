import{ FEATURE }from '../Reducers/Reducer';

export const removeFeature = (feature) => {
    return {
        type: FEATURE.REMOVE,
        payload: feature,
    };
};