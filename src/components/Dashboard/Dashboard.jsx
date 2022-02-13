import s from './Dashboard.module.css';

import { DataGrid } from '@mui/x-data-grid';

export default function TransactionTable(props) {
  const columns = [
    {
      headerClassName: 'super-app-theme--header',
      field: 'date',
      headerName: 'Date',
      type: 'date',
      width: 80,
      sortable: true,
      editable: false,
      disableColumnMenu: true,
    },
    {
      field: 'type',
      headerName: 'Type',
      width: 70,
      sortable: true,
      editable: false,
      disableColumnMenu: true,
      valueGetter: (params) => `${params.row.type ? '+' : '-'}`,
    },
    {
      field: 'category',
      headerName: 'Category',
      type: 'text',
      width: 130,
      sortable: false,
      editable: false,
    },
    {
      field: 'comment',
      headerName: 'Comment',
      type: 'text',
      width: 150,
      sortable: false,
      editable: false,
      // disableColumnMenu: true,
    },
    {
      field: 'value',
      headerName: 'Value',
      type: 'number',
      width: 100,
      sortable: true,
      editable: false,
      // disableColumnMenu: true,
    },
    {
      field: 'balance',
      headerName: 'Balance',
      type: 'number',
      description: 'Total Balance.',
      sortable: false,
      width: 130,
      disableColumnMenu: true,
    },
  ];
  const rows = [
    {
      id: 1,
      date: '13.12.12',
      type: true,
      category: 'qwert',
      comment: 'asfg',
      value: 214567,
      balance: 56789876,
    },
    {
      id: 2,
      date: '12.12.12',
      type: true,
      category: 'qwert',
      comment: 'asfg',
      value: 214567,
      balance: 56789876,
    },
    {
      id: 3,
      date: '15.12.12',
      type: false,
      category: 'qwert',
      comment: 'asfg',
      value: 214567,
      balance: 56789876,
    },
    {
      id: 4,
      date: '16.12.12',
      type: false,
      category: 'qwert',
      comment: 'asfg',
      value: 214567,
      balance: 56789876,
    },
    {
      id: 5,
      date: '17.12.12',
      type: false,
      category: 'qwert',
      comment: 'asfg',
      value: 214567,
      balance: 56789876,
    },
    {
      id: 6,
      date: '18.12.12',
      type: true,
      category: 'qwert',
      comment: 'asfg',
      value: 214567,
      balance: 56789876,
    },
  ];

  return (
    <div className={s.wrapper}>
      <DataGrid
        rows={rows}
        autoHeight={true}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}
