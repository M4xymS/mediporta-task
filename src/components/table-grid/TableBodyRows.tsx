import {TableCell, TableRow} from "@/components/ui/table.tsx";
import {ReactNode} from "react";

interface TableBodyRowsProps<T> {
    formattedData: Partial<T>[]
}

const TableBodyRows =<T,> ({formattedData}: TableBodyRowsProps<T>) => {
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