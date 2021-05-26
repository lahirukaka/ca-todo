import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Todo } from '../../store/todos/Todo';
import { getAllTodos, selectTodos } from '../../store/todos/todoSlice';
import TodoComp from '../Todo';

const AllTodos = ()=>
{
    const dispatch = useDispatch();
    const todos:Todo[] = useSelector(selectTodos);

    useEffect(()=>{
        dispatch(getAllTodos());
    },[]);

    return (
        <section className="grid grid-flow-row grid-cols-4 gap-2">
            {
                todos.map(todo=>(
                    <TodoComp item={todo} key={todo._id} />
                ))
            }
        </section>
    );
}
export default AllTodos;