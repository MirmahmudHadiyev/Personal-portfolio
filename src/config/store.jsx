import {configureStore} from '@reduxjs/toolkit';
import darkModeReducer from './dark'
export const store = configureStore({
    reducer:{
       darkMode:darkModeReducer
    }
});