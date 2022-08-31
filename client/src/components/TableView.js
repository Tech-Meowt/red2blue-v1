import React, { useMemo } from 'react';
import { useTable, useSortBy, useFilters, usePagination } from 'react-table';
import { Filter, DefaultColumnFilter, ColumnSelector } from './Filter';
import { Table, Row, Col, Button, Input } from 'reactstrap';
import { BiSortAlt2 } from 'react-icons/bi'
import { ImSortAlphaAsc, ImSortAlphaDesc } from 'react-icons/im';

const TableView = ({ columns, data }) => {
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
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    allColumns,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      defaultColumn: { Filter: DefaultColumnFilter },
      initialState: { pageIndex: 0, pageSize: 10 },
    },
    useFilters,
    useSortBy,
    usePagination
  );

  const generateSortingIndicator = (column) => {
    // return column.isSorted ? (column.isSortedDesc ? '  🔽' : '  🔼') : '';
    if (column.isSorted && column.isSortedDesc) {
      return <span className='r2b-red sort-icon'>{'   '}{<ImSortAlphaDesc />}</span>;
    } else if (column.isSorted && !column.isSortedDesc) {
      return <span className='r2b-red sort-icon'>{'   '}{<ImSortAlphaAsc />}</span>;
    } else if (!column.isSorted && column.Header === 'First name' || column.Header === 'Last name' || column.Header === 'Events' || column.Header === 'State' || column.Header === 'Date' || column.Header === 'Year' || column.Header === 'Volunteers') {
      return <span className='r2b-red sort-icon'>{<BiSortAlt2 />}</span>;
    }
  };

  const onChangeInSelect = (e) => {
    setPageSize(Number(e.target.value));
  };

  const onChangeInInput = (e) => {
    const page = e.target.value ? Number(e.target.value) - 1 : gotoPage(page);
  };

  return (
    <>
      {/* <ColumnSelector columns={allColumns} /> */}
      <div className='overflow-scroll overflow-visible container-xxl'>
        <Table bordered hover striped size={'sm'} {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()} className='header-group'>
                    <div {...column.getSortByToggleProps()}>
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
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </Table>
        <Row style={{ maxWidth: 1000, margin: '0 auto', textAlign: 'center' }}>
          <Col md={3}>
            <Button
              color='danger'
              onClick={() => gotoPage(0)}
              disabled={!canPreviousPage}
            >
              {'<<'}
            </Button>
            <Button
              color='danger'
              onClick={previousPage}
              disabled={!canPreviousPage}
            >
              {'<'}
            </Button>
          </Col>
          <Col md={2} style={{ marginTop: 7 }}>
            Page{' '}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>
          </Col>
          <Col md={2}>
            <Input
              type='number'
              min={1}
              style={{ width: 70 }}
              max={pageOptions.length}
              defaultValue={pageIndex + 1}
              onChange={onChangeInInput}
            />
          </Col>
          <Col md={2}>
            <Input
              type='select'
              id='custom-select'
              bsSize='sm'
              value={pageSize}
              onChange={onChangeInSelect}
            >
              >
              {[10, 20, 30, 40, 50].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </Input>
          </Col>
          <Col md={3}>
            <Button color='danger' onClick={nextPage} disabled={!canNextPage}>
              {'>'}
            </Button>
            <Button
              color='danger'
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
            >
              {'>>'}
            </Button>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default TableView;
