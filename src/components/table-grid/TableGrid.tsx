import {Table, TableBody, TableCell, TableHeader, TableRow} from "@/components/ui/table.tsx";
import {Column} from "@/types";
import TableHeaderRows from "@/components/table-grid/TableHeaderRows.tsx";
import TableBodyRows from "@/components/table-grid/TableBodyRows.tsx";
import {SymbolIcon} from "@radix-ui/react-icons";
import TableToolbar from "@/components/table-grid/TableToolbar.tsx";

interface TableGridProps<T> {
    data?: T[];
    headers: Column<T>[];
    isLoading?: boolean
    pagination?: boolean
    maxPageSize?: number
}

const TableGrid = <T, >({
                            data,
                            headers,
                            isLoading,
                            pagination = false,
                            maxPageSize
                        }: TableGridProps<T>) => {

    function formatData(columns: Column<T>[], data: T[] | undefined): Partial<T>[] {
        if (data && columns) {
            return data?.map((item) => {
                const formattedData: Partial<T> = {};
                columns.forEach((header) => {
                    const {key, valueFormatter} = header;
                    const value = item[key];
                    // @ts-ignore - this is a dynamic key so it's not possible to type it correctly
                    formattedData[key] = valueFormatter ? valueFormatter(value) : value;
                });
                return formattedData;
            });
        }
        return [];
    }

    const formattedData = formatData(headers, data);

    return (
        <div className='w-full space-y-2 overflow-auto mb-4'>
            {pagination && <TableToolbar pagination={pagination} maxPageSize={maxPageSize}/>}
            <div className="rounded-md w-full border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            {headers.map((header, index) => (
                                <TableHeaderRows header={header} key={index}/>
                            ))}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {isLoading ? (
                            <TableRow>
                                <TableCell colSpan={headers.length}>
                                    <div className="flex h-80 items-center overflow-hidden justify-center">
                                        <SymbolIcon className='size-16 animate-spin'/>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ) : (
                            <TableBodyRows headers={headers} formattedData={formattedData}/>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export default TableGrid;
