import { combineReducers } from "redux";

import shoppingReducer from "./Shopping/shopping-reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import storageSession from "redux-persist/lib/storage/session";
import { authReducer,authReducerNoRemember }from "./Auth/reducer";


const rootPersistConfig = {
  key: "root",
  storage,
  whitelist: ["shop", "auth"],
  blacklist: ["authNoReducer"],
}; 

const autNoPersistConfig = { key: "authNoReducer", storage: storageSession };
 // This is to session storage
const rootReducer = combineReducers({
  authNoReducer: persistReducer(autNoPersistConfig, authReducerNoRemember), // user subtree saved in session storage
  shop: shoppingReducer,
  auth: authReducer,
});
const rootReducer2 = persistReducer(rootPersistConfig, rootReducer);
export default rootReducer2;          


