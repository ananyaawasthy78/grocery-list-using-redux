import {configureStore} from '@reduxjs/toolkit';
import groceryreducer from './features/grocery/groceryslice'
export const store= configureStore({
    reducer: {
      grocery:  groceryreducer}
})   