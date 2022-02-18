import s from './Dashboard.module.css';

import { DataGrid } from '@mui/x-data-grid';
import { styled } from '@mui/system';
import { useSelector } from 'react-redux';
import { transactionsSelectors } from '../../redux/transactions';

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

    // '&:nth-of-type(5)': {
    //   color: 'green',
    // },
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
  const allTransactions = useSelector(transactionsSelectors.getTransactions);
  const rows = allTransactions.map((row) => {
    const date = new Date(row.createdAt);
    return {
      id: row._id,
      date: date.toLocaleString({
        year: '2-digit',
        month: 'numeric',
        day: 'numeric',
      }),
      type: row.type,
      category: row.category,
      comment: row.comment,
      sum: row.sum,
      balance: row.balance,
    };
  });
  console.log(rows);
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
      field: 'sum',
      headerName: 'Sum',
      type: 'number',
      width: 100,
      sortable: true,
      editable: false,
      disableColumnMenu: true,
      // sx: {
      //   '& .MuiDataGrid-cell': {
      //     '&:nth-of-type(5)': {
      //       valueGetter: (params) => (`${params.row.type}` ? 'red' : 'green'),

      //       // color: 'red',
      //       fontWeight: 700,
      //     },
      //   },
      //   // color: 'red',
      // },
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
