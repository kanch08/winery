import {reducer} from './rootReducer';
import * as types from '../../src/components/actions/actionTypes/cartActions';
import data from '../components/data';

describe('todos reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(
       { images: [], thumb: [], offers: [],  addedItems: [], wishlistItems:[], total: 0}
       )
    })

    it('should handle ADD_TODO', () => {
        expect(
            reducer([], {
                type: types.ADD_DATA,
                data: data,
            })
        ).toEqual(data)
    })


})