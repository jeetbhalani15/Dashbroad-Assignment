// OrdersTable.jsx
import React, { useState, useMemo } from 'react';
import {
  Box,
  Typography,
  TextField,
  IconButton,
  Menu,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  Avatar,
  useTheme,
  Pagination,
  Stack,
} from '@mui/material';
import { MoreVert, Add, FilterList, Sort } from '@mui/icons-material';
import { useTable, useSortBy } from 'react-table';
import Person1 from '../RightPanel/Images/person1.svg';
import Person2 from '../RightPanel/Images/person2.svg';
import Person3 from '../RightPanel/Images/person3.svg';
import Person4 from '../RightPanel/Images/person4.svg';

const initialData = [
  { id: '#CM9801', user: 'Natali Craig', project: 'Landing Page', address: 'Meadow Lane Oakland', date: 'Just now', status: 'In Progress', icon: Person1 },
  { id: '#CM9802', user: 'Kate Morrison', project: 'CRM Admin pages', address: 'Larry San Francisco', date: 'A minute ago', status: 'Complete', icon: Person2 },
  { id: '#CM9803', user: 'Drew Cano', project: 'Client Project', address: 'Bagwell Avenue Ocala', date: '1 hour ago', status: 'Pending', icon: Person3 },
  { id: '#CM9804', user: 'Orlando Diggs', project: 'Admin Dashboard', address: 'Washburn Baton Rouge', date: 'Yesterday', status: 'Approved', icon: Person4 },
  { id: '#CM9805', user: 'Andi Lane', project: 'App Landing Page', address: 'Nest Lane Olivette', date: 'Feb 2, 2023', status: 'Rejected', icon: Person2 },
  { id: '#CM9806', user: 'Emma Jones', project: 'E-commerce Site', address: 'Maple Street Denver', date: '2 days ago', status: 'Pending', icon: Person1 },
  { id: '#CM9807', user: 'Liam Smith', project: 'Marketing Dashboard', address: 'Broadway NY', date: '3 days ago', status: 'In Progress', icon: Person2 },
  { id: '#CM9808', user: 'Ava Brown', project: 'Portfolio Website', address: 'Pine Lane LA', date: 'Last week', status: 'Approved', icon: Person3 },
  { id: '#CM9809', user: 'Ethan Clark', project: 'HR Portal', address: 'Downtown Dallas', date: 'Last month', status: 'Rejected', icon: Person4 },
  { id: '#CM9810', user: 'Sophia Wilson', project: 'Banking System', address: 'River Road Miami', date: '3 months ago', status: 'Complete', icon: Person1 },
];

const getStatusColor = (theme, status) => {
  const map = {
    'In Progress': '#4C82F7',
    'Complete': '#38C976',
    'Pending': '#FFAB00',
    'Approved': '#FFA26B',
    'Rejected': theme.palette.mode === 'dark' ? '#777' : '#9E9E9E',
  };
  return map[status] || (theme.palette.mode === 'dark' ? '#B0BEC5' : '#9E9E9E');
};

const columns = [
  { Header: 'Order ID', accessor: 'id' },
  { Header: 'User', accessor: 'user' },
  { Header: 'Project', accessor: 'project' },
  { Header: 'Address', accessor: 'address' },
  { Header: 'Date', accessor: 'date' },
  { Header: 'Status', accessor: 'status' },
];

const OrdersTable = ({ isDarkMode }) => {
  const [searchInput, setSearchInput] = useState('');
  const [menuAnchor, setMenuAnchor] = useState(null);
  const [selectedRows, setSelectedRows] = useState({});
  const [page, setPage] = useState(1);
  const rowsPerPage = 8;

  const data = useMemo(() => initialData, []);

  const filteredData = useMemo(() =>
    data.filter(row => row.user.toLowerCase().includes(searchInput.toLowerCase()) ||
      row.project.toLowerCase().includes(searchInput.toLowerCase())
    ), [searchInput, data]
  );

  const paginatedData = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    return filteredData.slice(start, start + rowsPerPage);
  }, [page, filteredData]);

  const tableInstance = useTable({ columns, data: paginatedData }, useSortBy);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

  const getStatusColor = (status) => {
    const map = {
      'In Progress': '#4C82F7',
      'Complete': '#38C976',
      'Pending': '#FFAB00',
      'Approved': '#FFA26B',
      'Rejected': isDarkMode ? '#777' : '#9E9E9E',
    };
    return map[status] || (isDarkMode ? '#B0BEC5' : '#9E9E9E');
  };

return (
  <Box
    sx={{
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    minHeight: 0,
    height: '100%',
    p: 3,
    bgcolor: isDarkMode ? '#1C1C1C' : '#fff',
    color: isDarkMode ? '#fff' : '#000',
  }}
  >
    {/* Header and Search */}
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 2 }}>
      <Typography variant="h6" sx={{ color: isDarkMode ? '#fff' : '#000' }}>
        Order List
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <IconButton sx={{ color: isDarkMode ? '#fff' : 'inherit' }}><Add /></IconButton>
          <IconButton sx={{ color: isDarkMode ? '#fff' : 'inherit' }}><FilterList /></IconButton>
          <IconButton sx={{ color: isDarkMode ? '#fff' : 'inherit' }}><Sort /></IconButton>
        </Box>
        <TextField
          size="small"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          sx={{
            width: 240,
            '& .MuiInputBase-root': {
              bgcolor: isDarkMode ? '#333' : '#fff',
              color: isDarkMode ? '#fff' : '#000',
            },
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: isDarkMode ? '#666' : '#ccc',
            },
          }}
        />
      </Box>
    </Box>

    {/* Table should grow and scroll */}
    <Box sx={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column' }}>
      <TableContainer
        component={Paper}
        sx={{
          flex: 1,
          overflow: 'auto',
          bgcolor: isDarkMode ? '#2A2A2A' : '#fff',
          color: isDarkMode ? '#fff' : '#000',
        }}
      >
        <Table {...getTableProps()} stickyHeader>
         <TableHead>
  <TableRow sx={{ backgroundColor: isDarkMode ? '#333' : '#f5f5f5' , cursor: 'pointer' }}>
    <TableCell
      padding="checkbox"
      sx={{
        color: isDarkMode ? '#ccc' : '#000',
        backgroundColor: isDarkMode ? '#333' : '#f5f5f5',
      }}
    >
      <Checkbox sx={{ color: isDarkMode ? '#ccc' : undefined }} />
    </TableCell>
    {headerGroups.map(headerGroup =>
      headerGroup.headers.map(column => (
        <TableCell
          key={column.id}
          {...column.getHeaderProps(column.getSortByToggleProps())}
          sx={{
            color: isDarkMode ? '#ccc' : '#000',
            backgroundColor: isDarkMode ? '#333' : '#f5f5f5',
            fontWeight: 'bold',
          }}
        >
          {column.render('Header')}
        </TableCell>
      ))
    )}
  </TableRow>
</TableHead>

          <TableBody {...getTableBodyProps()}>
            {rows.map(row => {
              prepareRow(row);
              const statusColor = getStatusColor(row.original.status);
              return (
                <TableRow key={row.original.id} {...row.getRowProps()}>
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={!!selectedRows[row.original.id]}
                      onChange={() =>
                        setSelectedRows(prev => ({
                          ...prev,
                          [row.original.id]: !prev[row.original.id],
                        }))
                      }
                      sx={{ color: isDarkMode ? '#ccc' : undefined }}
                    />
                  </TableCell>
                  {row.cells.map(cell => (
                    <TableCell
                      key={cell.column.id}
                      {...cell.getCellProps()}
                      sx={{ color: isDarkMode ? '#eee' : '#000' }}
                    >
                      {cell.column.id === 'user' ? (
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Avatar src={row.original.icon} sx={{ width: 24, height: 24 }} />
                          {cell.render('Cell')}
                        </Box>
                      ) : cell.column.id === 'status' ? (
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Box
                            sx={{
                              width: 8,
                              height: 8,
                              borderRadius: '50%',
                              backgroundColor: statusColor,
                            }}
                          />
                          <Typography sx={{ fontSize: '0.75rem', color: statusColor }}>
                            {cell.render('Cell')}
                          </Typography>
                        </Box>
                      ) : (
                        cell.render('Cell')
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination stays at the bottom */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', pr: 2, mt: 2 }}>
        <Pagination
          count={Math.ceil(filteredData.length / rowsPerPage)}
          page={page}
          onChange={(_, value) => setPage(value)}
          shape="rounded"
          sx={{
            '& .MuiPaginationItem-root': {
              color: isDarkMode ? '#fff' : '#000',
            },
          }}
        />
      </Box>
    </Box>
  </Box>
);

};


export default OrdersTable;
