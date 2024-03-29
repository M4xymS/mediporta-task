import {ReactNode} from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table.tsx";
import { Column } from "@/types";

interface TableGridProps<T> {
    data: T[];
    headers: Column<T>[];
}

const TableGrid = <T,>({ data, headers }: TableGridProps<T>) => {
    function formatData(columns: Column<T>[], data: T[]): Partial<T>[] {
        if (data && columns) {
            return data.map((item) => {
                const formattedData: Partial<T> = {};
                columns.forEach((header) => {
                    const { key, valueFormatter } = header;
                    const value = item[key];
                    formattedData[key] = valueFormatter ? valueFormatter(value) : value;
                });
                return formattedData;
            });
        }
        return [];
    }

    const formattedData: Partial<T>[] = formatData(headers, data);

    return (
        <div className='w-full space-y-2 overflow-auto'>
            <div className="rounded-md w-full border mb-4">
                <Table>
                    <TableHeader>
                        <TableRow>
                            {headers.map((header, index) => {
                                const headerSize = header?.size ? { width: `${header.size}px` } : { width: "150px" };
                                return (
                                    <TableHead style={headerSize} key={index}>
                                        {header.id ? null : header.header}
                                    </TableHead>
                                );
                            })}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {formattedData?.map((cells, rowIndex) => (
                            <TableRow key={rowIndex}>
                                {Object.values(cells).map((cell, cellIndex) => (
                                    <TableCell key={cellIndex} className='text-xs'>{cell as ReactNode}</TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export default TableGrid;
