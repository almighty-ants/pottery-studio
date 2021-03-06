import axios from 'axios';

// import { setCart } from './cart';

const SET_GUEST = 'SET_GUEST';

export const setGuest = (user) => {
  return {
    type: SET_GUEST,
    user,
  };
};

export const checkout = (guestCart, history) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post('/api/guest', guestCart);
      console.log('confirmation', data);
      dispatch(setGuest(data.user));
      // dispatch(setCart(data.cart));
      history.push('/confirmation');
    } catch (err) {
      console.log(err);
    }
  };
};

const initialState = null;

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_GUEST:
      return action.user;
    default:
      return state;
  }
}
