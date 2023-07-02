import { legacy_createStore,applyMiddleware } from "redux";
import MyReducer from "./Reducer";
import logger from "redux-logger";
const MyStore =legacy_createStore(MyReducer,applyMiddleware(logger))
export default MyStore