import{ FEATURE }from '../Reducers/Reducer';

export const addFeature = (feature) => {
    return {
        type: FEATURE.ADD,
        payload: feature,
    };
};