import React from 'react';
import DashboardSidebar from './DashboardSidebar/DashboardSidebar';

const Dashboard = () => {
    return (
        <div className='w-full min-h-[90vh] grid grid-cols-12'>
            <DashboardSidebar></DashboardSidebar>
            <div>
                {/* left part item */}

                {/* Right part item */}
            </div>
        </div>
    );
};

export default Dashboard;