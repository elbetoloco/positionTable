import React from 'react';
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

const SimpleTable: React.FC<SimpleTableProps> = ({ tabsData, extend }) => {
  return (
    <div className='overflow-y-auto w-full bg-white rounded relative'>
      <table className='border-collapse table-auto w-full whitespace-no-wrap bg-white '>
        <thead>
          <tr className='text-center'>
            {tabsData.headings.map((heading: SimpleTableHeading) => {
              return (
                <th
                  key={heading.key}
                  className='relative flex-1 top-0 border-b border-gray-300 w-max py-2 px-2 font-bold tracking-wider text-xs'
                >
                  {heading.key === 'lastHeader0' ? (
                    <select className='font-bold w-full' name='select'>
                      <option value='value1'>Retorno diario</option>
                      <option value='value2'>Costo promedio</option>
                      <option value='value3'>Costo de compra</option>
                      <option value='value3'>Precio actual</option>
                      <option value='value3'>Ganancia ($)</option>
                      <option value='value3'>Títulos en venta</option>
                      <option value='value3'>Títulos bloqueados</option>
                      <option value='value3'>Valor de mercado</option>
                    </select>
                  ) : heading.key === 'lastHeader1' ? (
                    <select className='font-bold w-full' name='select'>
                      <option value='value1'>Ganancia</option>
                      <option value='value2'>Costo promedio</option>
                      <option value='value3'>Costo de compra</option>
                      <option value='value3'>Precio de valuación</option>
                      <option value='value3'>Ganancia / Perdida</option>
                      <option value='value3'>Titulos en venta</option>
                      <option value='value3'>Titulos bloqueados</option>
                      <option value='value3'>Valor de mercado</option>
                    </select>
                  ) : heading.key === 'lastHeader2' ? (
                    <select className='font-bold w-20' name='select'>
                      <option value='value1'>Titulos</option>
                      <option value='value2'>Fecha Vencimiento</option>
                      <option value='value3'>Días transcurridos</option>
                      <option value='value3'>Calificación</option>
                      <option value='value3'>Calificadora</option>
                      <option value='value3'>Rendimiento</option>
                      <option value='value3'>Valor de inversión</option>
                      <option value='value3'>Ingresos acumulados</option>
                      <option value='value3'>
                        Valor actualizado de inversión
                      </option>
                      <option value='value3'>Interés / Cupón corrido</option>
                      <option value='value3'>Intereses pagados</option>
                      <option value='value3'>Costo tasa</option>
                      <option value='value3'>Mercado</option>
                    </select>
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
              <tr key={index} className='text-center'>
                {tabsData.headings.map((column: any) => {
                  return (
                    <td
                      key={row[column.key]}
                      className={
                        'p-2 text-xs' +
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
