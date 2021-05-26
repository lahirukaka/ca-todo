import { Button, DatePicker, Form, Input } from 'antd';
import moment from 'moment';
import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { createNew, deleteTodo } from '../../store/todos/todoSlice';

const AddNewItem = () => 
{

    const dispatch = useDispatch();
    const formRef:any = useRef();

    const handleSubmit = (e:any) =>
    {
        const text = e.text;
        const deadline = e.datetime.valueOf();
        dispatch(createNew({text, deadline}));
        formRef.current.resetFields();
    }

    return (

        <Form
            name="basic"
            initialValues={{ remember: true }}
            className="w-4/5"
            onFinish={handleSubmit}
            ref={formRef}
        >
            <div>Add New TODO</div>
            <div className="flex">
                <Form.Item
                    name="text"
                    className="flex-grow"
                    rules={[{ required: true, message: 'type your content' }]}
                >
                    <Input placeholder="Your content here" />
                </Form.Item>
                <Form.Item
                    name="datetime"
                    rules={[{ required: true, message: 'Pick a deadline' }]}
                >
                    <DatePicker
                        format="YYYY-MM-DD HH:mm:ss"
                        showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }}
                    />
                </Form.Item>

                <Form.Item className="ml-3">
                    <Button type="primary" htmlType="submit">
                        Add New
                    </Button>
                </Form.Item>
            </div>
        </Form>

    );
}

export default AddNewItem;