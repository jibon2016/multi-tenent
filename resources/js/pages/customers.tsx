import React from 'react';
import  AppLayout  from '@/layouts/app-layout';
import {
    GridComponent,
    ColumnsDirective,
    ColumnDirective,
    Page,
    Selection,
    Inject,
    Edit,
    Toolbar,
    Sort,
    Filter,
    Search
} from '@syncfusion/ej2-react-grids';
import { customersData, customersGrid} from '@/data/dummy';
import { Header } from '@/components';

const Customers = () => {
    return (
        <AppLayout>
            <div className='m-2 md:m-10  p-2 md:p-10 bg-white rounded-2xl'>
                <Header category="Page" title="Customers" />
                <GridComponent
                    dataSource={customersData}
                    allowPaging
                    allowSorting
                    toolbar={['Delete']}
                    width="auto"
                    editSettings={{ allowEditing: true, allowDeleting: true }}
                >
                    <ColumnsDirective>
                        {customersGrid.map((item, index) => (
                            <ColumnDirective key={index} {...item} />
                        ))}
                    </ColumnsDirective>
                    <Inject services={[ Page, Toolbar, Selection, Search, Edit, Sort, Filter]} />
                </GridComponent>
            </div>
        </AppLayout>
    );
};
export default Customers;
