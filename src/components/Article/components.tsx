import { Table, TableBody, TableCell, TableCellProps, TableContainer, TableHead, TableHeadProps, TableProps, TableRow } from '@mui/material';
import React from 'react';
import Link from '../Link';

const CustomTable = () => {
  return (
    <TableContainer>
      <Table sx={{
        width: 'auto',
      }} />
    </TableContainer>
  );
};

const CustomTableHead = () => {
  return (
    <TableHead />
  );
};

const CustomTableBody = () => {
  return (
    <TableBody />
  );
};

const CustomTableRow = () => {
  return (
    <TableRow />
  );
};

const CustomTableData = () => {
  return (
    <TableCell />
  );
};

const components = {
  table: CustomTable,
  thead: CustomTableHead,
  tbody: CustomTableBody,
  tr: CustomTableRow,
  th: () => (
    <TableCell sx={{
      textAlign: 'center',
    }} />
  ),
  td: CustomTableData,
  a: (props: React.ComponentProps<'a'>) => {
    if (!props.href) {
      return <a {...props} />;
    }

    return <Link href={props.href} />;
  },
};

export default components;