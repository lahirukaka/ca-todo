import React from 'react';
import AddNewItem from '../../components/AddNewItem';
import AllTodos from '../../components/AllTodos';

const Dashboard = ()=>
{
    return (
        <section className="py-8">
            <AddNewItem />
            <hr className=" mb-8"/>
            <AllTodos />
        </section>
    );
}

export default Dashboard;