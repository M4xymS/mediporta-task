import {ReactNode} from 'react';
import { TableCell, TableRow } from "@/components/ui/table.tsx";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { Column } from "@/types";
import {PartialOrReactNode} from "@/types/types.ts";

interface TableBodyRowsProps<T> {
    formattedData: PartialOrReactNode<T>[];
    headers: Column<T>[];
}

const TableBodyRows = <T,>({ formattedData, headers }: TableBodyRowsProps<T>) => {
    if (!formattedData.length) {
        return (
            <TableRow>
                <TableCell colSpan={headers.length}>
                    <div className="flex h-80 items-center overflow-hidden justify-center">
                        <InfoCircledIcon className='size-8 mr-3'/>
                        <h2 className='text-base'>No data...</h2>
                    </div>
                </TableCell>
            </TableRow>
        );
    }

    return (
        <>
            {formattedData.map((cells, rowIndex) => (
                <TableRow key={rowIndex}>
                    {Object.values(cells).map((cell, cellIndex) => (
                        <TableCell key={cellIndex} className='text-xs'>{cell as ReactNode}</TableCell>
                    ))}
                </TableRow>
            ))}
        </>
    );
};

export default TableBodyRows;
