import React from 'react';
import AppLayout from '@/layouts/app-layout';
import {
    GridComponent,
    ColumnsDirective,
    ColumnDirective,
    Page,
    Toolbar,
    Edit,
    Search,
    Inject,
} from '@syncfusion/ej2-react-grids';
import {employeesGrid, employeesData} from '@/data/dummy';
import { Header } from '@/components';

const Employees = () => {
    return (
        <AppLayout>
            <div className='m-2 md:m-10  p-2 md:p-10 bg-white rounded-2xl'>
                <Header category="Page" title="Employees" />
                <GridComponent
                    dataSource={employeesData}
                    allowPaging
                    allowSorting
                    toolbar={['Search']}
                    width="auto"
                    editSettings={{ allowEditing: true, allowAdding: true, allowDeleting: true }}
                >
                    <ColumnsDirective>
                        {employeesGrid.map((item, index) => (
                            <ColumnDirective key={index} {...item} />
                        ))}
                    </ColumnsDirective>
                    <Inject services={[ Page, Search, Toolbar,Edit]} />
                </GridComponent>
            </div>
        </AppLayout>
    );
};
export default Employees;
