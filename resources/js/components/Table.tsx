interface Column<T> {
    header: string;
    render: (item: T) => React.ReactNode;
}

interface TableProps<T> {
    data: T[];
    columns: Column<T>[];
}

export function Table<T>({ data, columns }: TableProps<T>) {
    return (
        <table className="w-full border-collapse bg-black text-white">
            <thead>
                <tr>
                    {columns.map((col, i) => (
                        <th
                            key={i}
                            className="border-b px-6 py-3 text-left text-sm font-semibold"
                        >
                            {col.header}
                        </th>
                    ))}
                </tr>
            </thead>

            <tbody>
                {data.map((item, rowIndex) => (
                    <tr key={rowIndex} className="border-b hover:bg-stone-900">
                        {columns.map((col, colIndex) => (
                            <td
                                key={colIndex}
                                className="px-6 py-4 font-medium"
                            >
                                {col.render(item)}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
