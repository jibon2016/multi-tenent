import React from 'react';
import AppLayout from '@/layouts/app-layout';
import { ColorPickerComponent} from '@syncfusion/ej2-react-inputs';
import { Header } from '@/components';

const Calendar = () => {
    const change = (args: any) => {
        (document.getElementById('preview') as HTMLElement).style.backgroundColor = args.currentValue.hex;
    }
    return (
        <AppLayout>
            <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
                <Header category="Apps" title="Color Picker" />
                <div className='text-center'>
                    <div className="" id='preview'/>
                    <div className='flex justify-center items-center gap-20 flex-wrap'>
                        <div>
                            <p className='text-2xl font-semibold mt-2 mb-4'>Inline Pallet</p>
                            <ColorPickerComponent
                                id='inline-pallet'
                                mode='Palette'
                                modeSwitcher={false}
                                inline
                                showButtons={false}
                                change={change}
                            />
                        </div>
                        <div>
                            <p className='text-2xl font-semibold mt-2 mb-4'>Inline Picker</p>
                            <ColorPickerComponent
                                id='inline-picker'
                                mode='Picker'
                                modeSwitcher={false}
                                inline
                                showButtons={false}
                                change={change}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
};
export default Calendar;
