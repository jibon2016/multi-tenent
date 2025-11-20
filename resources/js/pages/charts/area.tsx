import React from 'react';
import AppLayout from '@/layouts/app-layout';
import { Header } from '@/components';
import AreaChart from '@/components/Charts/AreaChart';

const Area = () => {
    return (
        <AppLayout>
            <div className='m-4 md:m-10 mt-24 p-2 md:p-10 dark:bg-secondary-dark-bg bg-white rounded-3xl'>
                <Header category="Area" title="Inflation Rate in Percentage" />
                <div className="w-full">
                    <AreaChart />
                </div>
            </div>
        </AppLayout>
    );
};
export default Area;
