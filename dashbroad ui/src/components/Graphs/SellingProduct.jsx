import React from 'react';
import styled from 'styled-components';

const TableContainer = styled.div`
  background-color: ${({ isDarkMode }) => (isDarkMode ? '#FFFFFF0D' : '#F7F9FB')};
  border-radius: 12px;
  padding: 24px;
  width: 100%;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: scale(1.02); 
    box-shadow: ${({ isDarkMode }) =>
    isDarkMode ? '0 4px 20px rgba(255, 255, 255, 0.2)' : '0 4px 20px rgba(0, 0, 0, 0.15)'};
  }

  @media (max-width: 429px) {
    width: 85%;
  }
`;


const TableTitle = styled.h2`
  font-size: 14px;
  font-weight: bold;
  color: ${({ isDarkMode }) => (isDarkMode ? '#FFFFFF' : 'black')};
  margin-bottom: 16px;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  font-size: 12px;
  font-weight: 500;
  color: ${({ isDarkMode }) => (isDarkMode ? '#FFFFFF66' : '#1C1C1C66')};
  text-align: left;
  padding-bottom: 12px;
  border-bottom: 1px solid ${({ isDarkMode }) => (isDarkMode ? '#FFFFFF1A' : '#e5e7eb')};
`;

const TableRow = styled.tr`
 
`;

const TableCell = styled.td`
  font-size: 12px;
  color: ${({ isDarkMode }) => (isDarkMode ? '#FFFFFF' : '#1C1C1C')};
  padding: 12px 0;
`;

const TopSellingProductsTable = ({ isDarkMode }) => {
  return (
    <TableContainer isDarkMode={isDarkMode}>
      <TableTitle isDarkMode={isDarkMode}>Top Selling Products</TableTitle>
      <StyledTable>
        <thead>
          <tr>
            <TableHeader isDarkMode={isDarkMode}>Name</TableHeader>
            <TableHeader isDarkMode={isDarkMode}>Price</TableHeader>
            <TableHeader isDarkMode={isDarkMode}>Quantity</TableHeader>
            <TableHeader isDarkMode={isDarkMode}>Amount</TableHeader>
          </tr>
        </thead>
        <tbody>
          <TableRow>
            <TableCell isDarkMode={isDarkMode}>ASOS Ridley High Waist</TableCell>
            <TableCell isDarkMode={isDarkMode}>$79.49</TableCell>
            <TableCell isDarkMode={isDarkMode}>82</TableCell>
            <TableCell isDarkMode={isDarkMode}>$6,518.18</TableCell>
          </TableRow>
          <TableRow>
            <TableCell isDarkMode={isDarkMode}>Marco Lightweight Shirt</TableCell>
            <TableCell isDarkMode={isDarkMode}>$128.50</TableCell>
            <TableCell isDarkMode={isDarkMode}>37</TableCell>
            <TableCell isDarkMode={isDarkMode}>$4,754.50</TableCell>
          </TableRow>
          <TableRow>
            <TableCell isDarkMode={isDarkMode}>Half Sleeve Shirt</TableCell>
            <TableCell isDarkMode={isDarkMode}>$39.99</TableCell>
            <TableCell isDarkMode={isDarkMode}>64</TableCell>
            <TableCell isDarkMode={isDarkMode}>$2,559.36</TableCell>
          </TableRow>
          <TableRow>
            <TableCell isDarkMode={isDarkMode}>Lightweight Jacket</TableCell>
            <TableCell isDarkMode={isDarkMode}>$20.00</TableCell>
            <TableCell isDarkMode={isDarkMode}>184</TableCell>
            <TableCell isDarkMode={isDarkMode}>$3,680.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell isDarkMode={isDarkMode}>Marco Shoes</TableCell>
            <TableCell isDarkMode={isDarkMode}>$79.49</TableCell>
            <TableCell isDarkMode={isDarkMode}>64</TableCell>
            <TableCell isDarkMode={isDarkMode}>$1,965.81</TableCell>
          </TableRow>
        </tbody>
      </StyledTable>
    </TableContainer>
  );
};

export default TopSellingProductsTable;
