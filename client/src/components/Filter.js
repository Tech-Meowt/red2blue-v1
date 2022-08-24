import React, { useMemo } from 'react';
import { Input, Form, FormGroup, Label } from 'reactstrap';

export const Filter = ({ column }) => {
  return <div style={{ marginTop: 5 }}>{column.canFilter && column.render('Filter')}</div>;
}

export const DefaultColumnFilter = ({
  column: {
    filterValue,
    setFilter,
    preFilteredRows: { length },
  },
}) => {
  return (
    <Input
      value={filterValue || ''}
      onChange={(e) => {
        setFilter(e.target.value || undefined);
      }}
      placeholder={`🔍 Search (${length}) ...`}
      bsSize='sm'
      style={{
        minWidth: 150,
      }}
    />
  );
};

export const SelectColumnFilter = ({
  column: { filterValue, setFilter, preFilteredRows, id },
}) => {
  const options = useMemo(() => {
    const options = new Set();
    preFilteredRows.forEach((row) => {
      options.add(row.values[id]);
    });
    return [...options.values()];
  }, [id, preFilteredRows]);

  return (
    <Input
      id='custom-select'
      type='select'
      value={filterValue}
      bsSize='sm'
      required
      style={{
        minWidth: 150,
      }}
      onChange={(e) => {
        setFilter(e.target.value || undefined);
      }}
    >
      <option value='' disabled hidden selected>--Select an option--</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option != null ? `${option}` : `Not provided`}
        </option>
      ))}
    </Input>
  );
};

export const ColumnSelector = ({ columns }) => {
  return (
    <div>
      Show Columns:
      <div>
        {columns.map((column) => (
          <div key={column.id}>
            <Form className='content'>
              <FormGroup check inline className='content-center'>
                <Label check htmlFor='column header name'>
                  <Input type='checkbox' {...column.getToggleHiddenProps()} />
                  {`${column.Header}`}
                </Label>
              </FormGroup>
            </Form>
          </div>
        ))}
      </div>
    </div>
  );
}
