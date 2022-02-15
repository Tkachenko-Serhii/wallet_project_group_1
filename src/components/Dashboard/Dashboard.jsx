import s from './Dashboard.module.css';

import { DataGrid } from '@mui/x-data-grid';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';

const StyledGrid = styled(DataGrid)({
  border: 'none',
  '& .root': { border: 'solid 3px red' },

  '& .MuiDataGrid-columnHeaders': {
    backgroundColor: '#fff',
    color: '#000',

    borderRadius: '30px',
  },
  '& 	.MuiDataGrid-iconSeparator': {
    display: 'none',
  },
  '& 	.MuiDataGrid-columnHeaderTitle ': {
    fontWeight: 700,
  },

  '& .MuiDataGrid-cell': {
    borderBottom: 0,

    '&:nth-of-type(5)': {
      color: 'green',
    },
  },

  '& .MuiDataGrid-cell:focus-within': {
    outline: 'none',
  },

  '& .MuiDataGrid-row:not(:last-child)': {
    borderBottom: 'solid 1px #DCDCDF',

    boxShadow: '0px 1px 0px rgba(255, 255, 255, 0.6)',
  },
});

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
      align: 'center',
      valueGetter: (params) => `${params.row.type ? '+' : '-'}`,
    },
    {
      field: 'category',
      headerName: 'Category',
      type: 'string',
      width: 130,
      sortable: false,
      editable: false,
    },
    {
      field: 'comment',
      headerName: 'Comment',
      type: 'string',
      width: 150,
      sortable: false,
      editable: false,
    },
    {
      field: 'value',
      headerName: 'Value',
      type: 'number',
      width: 100,
      sortable: true,
      editable: false,
      disableColumnMenu: true,
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
      category: 'qwssdfsdf sdf oooo',
      comment: 'asdf dsf  fsdfs fsdfg',
      value: 2146535544567,
      balance: 567846546579876,
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
      <StyledGrid
        border={0}
        rows={rows}
        columns={columns}
        disableColumnSelector
        hideFooter={true}
      />
    </div>
  );
}
