/**
 *
 * Usage
 *
 * <Table
 *      columns={[{label: "col1", accessor: "key1 from data"}]}
 *      data={[{name: "ABCD", key: "value"}]}
 * />
 *
 */

import React from "react";
import PropTypes from "prop-types";

import "./style.scss";

const Table = ({ columns = [], data = [] }) => {
  return (
    <table className="table" border="0" cellspacing="0">
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={`${index}`}>{column.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data?.length === 0 ? (
          <tr>
            <td>No data...</td>
          </tr>
        ) : (
          data?.map((row, rowIdx) => (
            <tr key={`row-${rowIdx}`}>
              {columns.map((column, colIdx) => (
                <td key={`column-${rowIdx}-${colIdx}`}>
                  {row[column.accessor]}
                </td>
              ))}
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default Table;

Table.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
};

Table.defaultProps = {
  columns: [],
  data: [],
};
