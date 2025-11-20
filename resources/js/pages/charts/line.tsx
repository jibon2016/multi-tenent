import React from 'react';
import AppLayout from '@/layouts/app-layout';
import { Header, LineChart } from '@/components';

const Line = () => {
    return (
        <AppLayout>
            <div className='m-4 md:m-10 mt-24 p-2 md:p-10 dark:bg-secondary-dark-bg bg-white rounded-3xl'>
                <Header category="Charts" title="Inflation Rate" />
                <div className="w-full">
                    <LineChart />
                </div>
            </div>
        </AppLayout>
    );
};
export default Line;
