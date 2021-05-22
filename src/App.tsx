import React from 'react';
import './App.css';
import { SimpleTableTabs } from './components/SimpleTableTabs';
import { TableTabs } from '../src/mocks/TableTabs';

function App() {
  return (
    <div className="App-header">
      <SimpleTableTabs
        title="Tabla simple"
        color="red"
        tabsData={TableTabs()}
      />
    </div>
  );
}

export default App;
