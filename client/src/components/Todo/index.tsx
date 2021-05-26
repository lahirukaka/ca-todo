import { Button, Card, Switch } from 'antd';
import moment from 'moment';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Todo } from '../../store/todos/Todo';
import { changeCompleted, deleteTodo } from '../../store/todos/todoSlice';

const TodoComp = (props: any) => {

    const dispatch = useDispatch();

    const item: Todo = props.item;

    const handleCompleted = () => {
        dispatch(changeCompleted(!item.completed, item._id!));
    }

    const handleDelete = () =>
    {
        dispatch(deleteTodo(item._id!));
    }

    return (
        <Card title={moment(item?.deadline).fromNow()} bordered={false} className="w-100">
            <p className={item?.completed?'line-through':''}>{item?.text}</p>

            <div className="flex justify-between items-center">
                <Button type="default" danger onClick={handleDelete}>
                    Delete
                </Button>
                <Switch checked={item?.completed} onChange={handleCompleted} />
            </div>
        </Card>
    );
}

export default TodoComp;