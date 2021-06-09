import { SimpleTable } from '../components/SimpleTable';
import {
  SimpleTableData2,
  SimpleTableData1,
  SimpleTableData0,
} from '../mocks/SimpleTableData';

export const TableTabs = () => {
  return [
    {
      id: 'link1',
      title: 'MERCADO DE CAPITALES',
      content: (
        <SimpleTable
          key={Math.random()}
          extend={false}
          color='red'
          tabsData={SimpleTableData0()}
        />
      ),
    },
    {
      id: 'link2',
      title: 'FONDOS DE INVERSION',
      content: (
        <SimpleTable
          key={Math.random()}
          extend={false}
          color='red'
          tabsData={SimpleTableData1()}
        />
      ),
    },
    {
      id: 'link3',
      title: 'MERCADO DE DINERO',
      content: (
        <SimpleTable
          key={Math.random()}
          extend={false}
          color='red'
          tabsData={SimpleTableData2()}
        />
      ),
    },
  ];
};
