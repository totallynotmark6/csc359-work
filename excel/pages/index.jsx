function Header({ title }) {
  return <h1 className="text-3xl font-bold underline">{title ? title : 'Default title'}</h1>;
}

export default function HomePage() {
  const headers = ['Book', 'Author', 'Language', 'Published', 'Sales', 'Genre'];
  const data = [
    [
      "A Tale of Two Cities",
      "Charles Dickens",
      "English",
      "1859",
      ">200 million",
      "Historical fiction"
    ],
    [
      "The Little Prince (Le Petit Prince)",
      "Antoine de Saint-Exupéry",
      "French",
      "1943",
      "200 million",
      "Fantasy, Children's fiction"
    ],
    [
      "Harry Potter and the Philosopher's Stone",
      "J. K. Rowling",
      "English",
      "1997",
      "120 million",
      "Fantasy, Children's fiction"
    ],
    [
      "And Then There Were None",
      "Agatha Christie",
      "English",
      "1939",
      "100 million",
      "Mystery"
    ],
    [
      "Dream of the Red Chamber (紅樓夢)",
      "Cao Xueqin",
      "Chinese",
      "1791",
      "100 million",
      "Family saga"
    ],
    [
      "The Hobbit",
      "J. R. R. Tolkien",
      "English",
      "1937",
      "100 million",
      "Fantasy, Children's fiction"
    ]
  ]

  return (
    <div>
      <Header title="Excel but Worse" />
      <table className="border-collapse border border-slate-400 m-2">
        <thead class="bg-slate-50">
          <tr>
            {headers.map((header, index) => (
              <th key={index} className="border border-slate-300 font-semibold p-2">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {row.map((cell, index) => (
                <td key={index} className="border border-slate-300 p-2">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}