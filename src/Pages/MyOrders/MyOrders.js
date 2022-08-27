import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';
import Table from 'react-bootstrap/Table';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user, loading, error] = useAuthState(auth);
    useEffect(() =>{
        axios.get(`http://localhost:5000/myOrders?email=${user?.email}`)
        .then(res => {
            setOrders(res.data);
        })
    },[user])
    return (
        <div>
            <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                <th>#</th>
                <th>Name</th>
                <th>Tool's Name</th>
                <th>Address</th>
                <th>Email</th>
                <th>Tools Ordered Quantity</th>
                <th>Cancel Order</th>
                </tr>
            </thead>
            <tbody>
                {
                    orders.map((order, i) => <tr>
                            <td>{i+1}</td>
                            <td>{order?.name}</td>
                            <td>{order?.tool?.name}</td>
                            <td>{order?.address}</td>
                            <td>{order?.email}</td>
                            <td>{order?.minQuantity}</td>
                            <td>
                                <button className="btn btn-danger">Cancel</button>
                            </td>
                        </tr>)
                }
            </tbody>
            </Table>
        </div>
    );
};

export default MyOrders;