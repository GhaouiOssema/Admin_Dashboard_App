import React from 'react';
import {
	GridComponent,
	ColumnsDirective,
	ColumnDirective,
	Resize,
	Sort,
	ContextMenu,
	Filter,
	Page,
	ExcelExport,
	PdfExport,
	Edit,
	Inject,
} from '@syncfusion/ej2-react-grids';
import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy';
import { Header } from '../components';
// import { useStateContext } from '../contexts/ContextProvider';

const Orders = () => {
	const editing = { allowDeleting: true, allowEditing: true };
	// const { currentMode } = useStateContext();
	return (
		<div className='m-2 md:m-4 p-2 md:p-9 bg-white rounded-3xl'>
			<Header category='Page' title='Orders' />
			<GridComponent
				id='gridcomp'
				dataSource={ordersData}
				allowPaging
				allowSorting
				allowExcelExport
				allowPdfExport
				allowDeleting
				contextMenuItems={contextMenuItems}
				// background={currentMode === 'Dark' ? '#33373E' : '#fff'}
				editSettings={editing}>
				<ColumnsDirective>
					{/* eslint-disable-next-line react/jsx-props-no-spreading */}
					{ordersGrid.map((item, index) => (
						<ColumnDirective key={index} {...item} />
					))}
				</ColumnsDirective>
				<Inject
					services={[
						Resize,
						Sort,
						ContextMenu,
						Filter,
						Page,
						ExcelExport,
						PdfExport,
						Edit,
					]}
				/>
			</GridComponent>
		</div>
	);
};

export default Orders;
