import { SHOW_PRODUCTS } from './actions';

export const products = (state = [], action) => {

    const { type, payload } = action;

    switch (type) {

        case SHOW_PRODUCTS: {

            const { text } = payload;
            return state;

        }

        default:
            return state;
    }

};
