/**
 *
 * Usage
 *
 * <Table
 *      columns={[{label: "col1", accessor: "key1 from data", component: (props) => {...}}]}        //  props contains current col and row.
 *      data={[{name: "ABCD", key: "value"}]}
 *      isLoading={true}
 * />
 *
 */

import React from "react";
import PropTypes from "prop-types";

import InlineLoader from "../Loader/InlineLoader";

import "./style.scss";

const Table = ({ columns = [], data = [], isLoading = false }) => {
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
        {isLoading ? (
          <tr>
            <td colSpan={columns.length}>
              <InlineLoader color={"#004aad"} width={"50px"} height={"50px"} />
            </td>
          </tr>
        ) : data?.length === 0 ? (
          <tr>
            <td colSpan={columns.length}>No data...</td>
          </tr>
        ) : (
          data?.map((row, rowIdx) => (
            <tr key={`row-${rowIdx}`}>
              {columns.map((column, colIdx) => (
                <td key={`column-${rowIdx}-${colIdx}`}>
                  {column?.component
                    ? column.component({ column, row })
                    : row[column.accessor]}
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
