import React, { useMemo } from 'react'
import { useTable, useSortBy, useFilters } from 'react-table';
import { Filter, DefaultColumnFilter } from './Filter'
import { Table } from 'reactstrap'

const PoliticalTable = ({ columns, data }) => {
  const defaultColumn = useMemo(
    () => ({
      minWidth: 30,
      width: 150,
      maxWidth: 400,
    }),
    []
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
    columns,
      data,
    defaultColumn: { Filter: DefaultColumnFilter }
    },
    useFilters,
    useSortBy,
    )
  
  const generateSortingIndicator = (column) => {
    return column.isSorted ? (column.isSortedDesc ? '  🔽' : '  🔼') : '';
  };

  return (
    <>
      <div className='overflow-scroll overflow-visible container-sm'>
        <Table
          bordered
          hover
          striped
          size='sm'
          {...getTableProps()}
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    <div
                      {...column.getSortByToggleProps()}
                      className='header-group'
                    >
                      {column.render('Header')}
                      {generateSortingIndicator(column)}
                    </div>
                    <Filter column={column} />
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody {...getTableBodyProps()} className='rows'>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()} className='cells'>
                        {cell.render('Cell')}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default PoliticalTable
