import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import authReducer from "./reducers/authReducer";
import dialogReducer from "./reducers/dialogReducer";
import merchantRegisterReducer from "./reducers/merchantRegisterReducer";
import postAGigReducer from "./reducers/postAGigReducer";
import progressReducer from "./reducers/progressReducer";
import ProductReviewReducer from "./reducers/ProductReviewReducer";
import CreateSellerProfileReducer from "./reducers/CreateSellerProfileReducer";
import chatReducer from "./reducers/chatReducer";
import ratingReducer from "./reducers/ratingReducer";
import searchReducer from "./reducers/searchReducer"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      dialog: dialogReducer,
      progress: progressReducer,
      postAGig: postAGigReducer,
      ProductReviewReducer: ProductReviewReducer,
      merchantRegister: merchantRegisterReducer,
      createSellerProfile: CreateSellerProfileReducer,
      chatDialog: chatReducer,
      rating: ratingReducer,
      searchGig: searchReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
