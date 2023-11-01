import React from 'react';

export default function Table({ headers, initalData }) {
  const [data, setData] = React.useState(initalData);
  const [sortBy, setSortBy] = React.useState(null);
  const [edit, setEdit] = React.useState(null); // { row: index, cell: index }
  const [descending, setDescending] = React.useState(false);

  const sort = (event) => {
    const column = event.target.cellIndex;
    const key = event.target.textContent.toLowerCase().trim(); // for debugging
    const descendingRn = sortBy === column && !descending;

    const newData = clone(data);
    newData.sort((a, b) => {
      return descendingRn
        ? a[column] < b[column] ? 1 : -1
        : a[column] > b[column] ? 1 : -1;
    });

    setData(newData);
    setSortBy(column);
    setDescending(descendingRn);
  };

  const download = (format, ev) => {
    // format is either JSON or CSV
    const dataToDL = data
    let contents;
    if (format === 'json') {
      contents = JSON.stringify(dataToDL, null, 2);
    } else if (format === 'csv') {
      contents = dataToDL.map(row => row.join(',')).join('\n');
    } else {
      throw new Error(`Unsupported format: ${format}`);
    }
    const blob = new Blob([contents], { type: `text/${format}` });
    ev.target.href = URL.createObjectURL(blob);
    ev.target.download = `data.${format}`;
  }

  const downloadJSON = (ev) => download('json', ev);
  const downloadCSV = (ev) => download('csv', ev);

  const importTSV = (contents) => {
    const newData = contents.split('\n').map(row => row.split('\t'));
    setData(newData);
  }

  const showEditor = (event) => {
    setEdit({
      row: parseInt(event.target.dataset.row, 10),
      cell: event.target.cellIndex,
    });
  }

  return (
    <div className='p-2'>
      <div className='text-center'>
        <a onClick={() => {
          const contents = window.prompt('Paste your TSV data here');
          if (contents) {
            importTSV(contents);
          }
        }
        } className='p-2 transition rounded bg-slate-800 hover:bg-slate-500 text-white m-4 cursor-pointer'>
          Import TSV
        </a>

        <a href="data.json" onClick={downloadJSON} className='p-2 transition rounded bg-slate-800 hover:bg-red-500 text-white m-4 cursor-pointer'>
          Export JSON
        </a>
        <a href="data.csv" onClick={downloadCSV} className='p-2 transition rounded bg-slate-800 hover:bg-slate-500 text-white m-4 cursor-pointer'>
          Export CSV
        </a>
        <a onClick={() => setData(initalData)} className='p-2 transition rounded bg-red-800 hover:bg-red-500 text-white m-4 cursor-pointer'>
          Reset
        </a>
        <a onClick={() => setData([])} className='p-2 transition rounded bg-red-800 hover:bg-red-500 text-white m-4 cursor-pointer'>
          PURGE
        </a>
        <a onClick={() => {
          const newData = clone(data);
          newData.push(new Array(headers.length).fill(''));
          setData(newData);
          setEdit({
            row: newData.length - 1,
            cell: 0,
          });
        }} className='p-2 rounded bg-slate-800 hover:bg-slate-500 text-white m-4 cursor-pointer'>
          Add Row
        </a>
      </div>
      <table className="border-collapse border border-slate-400 m-2 cursor-cell">
        <thead className="bg-slate-200 dark:bg-slate-700" onClick={sort}>
          <tr>
            {headers.map((header, index) => {
              if (sortBy === index) {
                header += descending ? ' \u2191' : ' \u2193';
              }
              return (
                <th key={index} className="border border-slate-300 font-semibold p-2 hover:underline">{header}</th>
              )
            })}
          </tr>
        </thead>
        <tbody onDoubleClick={showEditor}>
          {data.map((row, row_index) => (
            <tr key={row_index} className='even:bg-slate-50 dark:even:bg-slate-900' data-row={row_index} >
              {row.map((cell, cell_index) => {
                const isEditing = edit && edit.row === row_index && edit.cell === cell_index;
                if (isEditing) {
                  return (
                    <td key={cell_index} className="border border-slate-300 p-2">
                      <form key={cell_index} onSubmit={e => {
                        e.preventDefault();
                        const newData = clone(data);
                        newData[row_index][cell_index] = e.target.elements[0].value;
                        setData(newData);
                        setEdit(null);
                      }}>
                        <input type="text" defaultValue={cell} className='bg-red-400 dark:bg-red-600' autoFocus />
                      </form>
                    </td>
                  )
                } else {
                  return (
                    <td key={cell_index} data-row={row_index} className="border border-slate-300 p-2">{cell}</td>
                  )
                }
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function clone(o) {
  return JSON.parse(JSON.stringify(o));
}