import React from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import type {
  SimpleTableDataTypes,
  SimpleTableHeading,
} from '../models/SimpleTable';

export interface SimpleTableProps {
  color: 'red' | 'blue';
  tabsData: SimpleTableDataTypes;
  extend: boolean;
  key: number;
}

const options = ['one', 'two', 'three'];

const defaultOption = options[0];

const SimpleTable: React.FC<SimpleTableProps> = ({ tabsData, extend, key }) => {
  return (
    <div className="overflow-y-auto w-full bg-white rounded relative">
      <table className="border-collapse table-auto w-full whitespace-no-wrap bg-white table-striped relative">
        <thead>
          <tr className="text-center">
            {tabsData.headings.map((heading: SimpleTableHeading) => {
              return (
                <th
                  key={heading.key}
                  className="relative top-0 border-b border-gray-300 px-2 py-2 font-bold tracking-wider text-xs"
                >
                  {heading.key === 'header3' ? (
                    <div>
                      <Dropdown
                        options={options}
                        onChange={() => {}}
                        placeholder=" "
                      />
                    </div>
                  ) : (
                    heading.value
                  )}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {tabsData.rows.map((row: any, index: number) => {
            return (
              <tr key={index} className="text-center">
                {tabsData.headings.map((column: any) => {
                  return (
                    <td
                      key={row[column.key]}
                      className={
                        'px-0.5 py-2 px-0.5 py-2 text-xs' +
                        (column.fontWeight ? 'font-bold ' : ' ') +
                        (extend
                          ? 'bg-gray-200 border-b-2 border-gray-300'
                          : ' ')
                      }
                    >
                      {row[column.key]}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export { SimpleTable };
