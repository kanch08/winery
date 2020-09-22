import * as actions from '../actions/Action';
import * as types from '../actions/actionTypes/cartActions';

describe('actions', () => {
    it('should create an action to add to cart', () => {
        const data = {id: '201', color: 'blue'};
        const expectedAction = {
            type: types.ADD_TO_CART,
            data
        }
        expect(actions.addToCart(data)).toEqual(expectedAction)
    })
})