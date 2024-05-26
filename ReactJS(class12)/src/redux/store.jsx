import { combineReducers, configureStore } from '@reduxjs/toolkit'
import counterSlice from './features/counter.slice';
import bonusSlice from './features/bonus.slice';
import postSlice from './features/posts.slice';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'



const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    blacklist: [ "bonus"]
    // whitelist: ["posts", "counter"]
}


const rootReducer = combineReducers({
    counter: counterSlice,
    bonus: bonusSlice,
    posts: postSlice,
})



const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
    reducer: persistedReducer,
});


export const persistor = persistStore(store)