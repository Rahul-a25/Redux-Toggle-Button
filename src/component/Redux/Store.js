import { legacy_createStore,applyMiddleware } from "redux";
import MyReducer from "./Reducer";
const MyStore =legacy_createStore(MyReducer,applyMiddleware)
export default MyStore