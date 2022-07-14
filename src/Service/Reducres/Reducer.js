import { ADD_TO_CART, REMOVE_TO_CART } from "../Constans";

const initialState = {
  cartData: [],
};

export default function cartItems(state = [], action) {
  console.log(action);
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, { cartData: action.data }];

      break;

    case REMOVE_TO_CART:
      return state.filter((cartData) => cartData.id !== action.payload.id);

      break;

    default:
      return state;
  }
}
