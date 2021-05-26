import { createSlice } from '@reduxjs/toolkit'
import { stat } from 'fs';
import { host } from '../apis';
import { Todo } from './Todo';

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos:[] as Todo[]
  },
  reducers: {
    save: (state, action) => {
      state.todos = action.payload;
    },
  },
});

export const getAllTodos = ()=> async (dispatch:any)=>
{
    const response = await fetch(host, {method:'GET'});
    const body = await response.json();
    dispatch(save(body));
}

export const changeCompleted = (completed:boolean, id:string) => async (dispatch:any) =>
{
    const response = await fetch(`${host}/${id}`, 
        {
            method:'PATCH', 
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({completed})
        }
    );
    if(response.status === 200){
        dispatch(getAllTodos());
    }
}

export const createNew = (todo:Todo) => async (dispatch:any)=>
{
    const response = await fetch(host, 
        {
            method:'POST', 
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({todo})
        }
    );
    if(response.status === 200) dispatch(getAllTodos());
    
}

export const deleteTodo = (id:string) => async (dispatch:any)=>
{
    const response = await fetch(`${host}/${id}`, {method:'DELETE'});
    if(response.status === 200) dispatch(getAllTodos());
}

export const { save } = todoSlice.actions

export const selectTodos = (state:any)=>state.todo.todos;

export default todoSlice.reducer