import React from 'react';
import AppLayout from '@/layouts/app-layout';
import {
    GridComponent,
    ColumnsDirective,
    ColumnDirective,
    Resize,
    Sort,
    Filter,
    Page,
    ExcelExport,
    PdfExport,
    Edit,
    Inject,
    ContextMenu
} from '@syncfusion/ej2-react-grids';
import { ordersData, contextMenuItems, ordersGrid } from '@/data/dummy';
import { Header } from '@/components';

const Orders = () => {
    return (
        <AppLayout>
            <div className='m-2 md:m-10  p-2 md:p-10 bg-white rounded-2xl'>
                <Header category="Page" title="Orders" />
                <GridComponent
                    id="gridcomp"
                    dataSource={ordersData}
                    allowPaging
                    allowSorting
                >
                    <ColumnsDirective>
                        {ordersGrid.map((item, index) => (
                            <ColumnDirective key={index} {...item} />
                        ))}
                    </ColumnsDirective>
                    <Inject services={[Resize, ContextMenu, Sort, Filter, Page, ExcelExport, PdfExport, Edit]} />
                </GridComponent>
            </div>
        </AppLayout>
    );
};
export default Orders;
