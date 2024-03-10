import { combineReducers } from "redux";
import cartReducer from "./cart_reducer";
import productsReducer from "./products_reducer";
import reviewsReducer from "./reviewsReducer";

import usersReducer from "./users_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  cart: cartReducer
});

export default entitiesReducer;