import {TableHead, TableRow} from "@/components/ui/table.tsx";
import {Column} from "@/types";


interface TableHeaderRowsProps<T> {
    headers: Column<T>[]
}

const TableHeaderRows = <T, >({headers}: TableHeaderRowsProps<T>) => {
    return (
        <TableRow>
            {headers.map((header, index) => {
                const headerSize = header?.size ? {width: `${header.size}px`} : {width: "150px"};
                return (
                    <TableHead style={headerSize} key={index}>
                        {header.id ? null : header.header}
                    </TableHead>
                );
            })}
        </TableRow>
    )
}

export default TableHeaderRows