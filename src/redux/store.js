import { createStore } from "redux";
import { persistStore } from "redux-persist";
import rootReducer2 from "./rootReducer";

export const store = createStore(rootReducer2);
export const persistor = persistStore(store);
