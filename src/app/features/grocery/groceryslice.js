import {createSlice, nanoid} from '@reduxjs/toolkit';
const initialState = {
    grocerylist:[{
        id:1,
        text:"milk"
    }]
}

export const glslice= createSlice({
    name:'grocerylist',
    initialState,
    reducers:{
        addgrocery:(state, action)=>{
            const grocery={
                id: nanoid(),
                text: action.payload.text
            }
            state.grocerylist.push(grocery)
        },
        removegrocery:(state, action)=>{
            state.grocerylist=state.grocerylist.filter((grocery)=> grocery.id !==action.payload.id)

        }
    }
})
export const{addgrocery, removegrocery}= glslice.actions
export default glslice.reducer