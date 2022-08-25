import React from 'react';
import {Outlet} from 'react-router-dom'

const Dashboard = () => {
    return (
        <div>
            this is dashboard page
            <Outlet />
        </div>
    );
};

export default Dashboard;