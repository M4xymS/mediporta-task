import {TableCell, TableRow} from "@/components/ui/table.tsx";
import React, {ReactNode} from "react";
import {Column} from "@/types";
import {InfoCircledIcon} from "@radix-ui/react-icons";

interface TableBodyRowsProps<T> {
    formattedData: Partial<T>[]
    headers: Column<T>[];
}

const TableBodyRows = <T, >({formattedData, headers}: TableBodyRowsProps<T>) => {

    if (!formattedData.length) {
        return (
            <TableCell colSpan={headers.length}>
                <div className="flex h-80 items-center overflow-hidden justify-center">
                    <InfoCircledIcon className='size-8 mr-3'/>
                    <h2 className='text-base'>No data...</h2>
                </div>
            </TableCell>
        )
    }

    return (
        <>
            {formattedData?.map((cells, rowIndex) => (
                <TableRow key={rowIndex}>
                    {Object.values(cells).map((cell, cellIndex) => (
                        <TableCell key={cellIndex} className='text-xs'>{cell as ReactNode}</TableCell>
                    ))}
                </TableRow>
            ))}
        </>
    )
}

export default TableBodyRows