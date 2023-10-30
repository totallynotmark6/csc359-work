import Table from '../components/Table';
import React from 'react';
import { headers, data } from '../data';

function Header({ title }) {
  return <h1 className="text-3xl font-bold underline text-center">{title ? title : 'Default title'}</h1>;
}

export default function HomePage() {
  return (
    <div>
      <React.StrictMode>
        <Header title="Excel but Worse!" />
        <Table headers={headers} initalData={data}/>
      </React.StrictMode>
    </div>
  );
} 