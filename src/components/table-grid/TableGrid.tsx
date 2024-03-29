import {Table, TableBody, TableCell, TableHeader, TableRow} from "@/components/ui/table.tsx";
import {Column} from "@/types";
import TableHeaderRows from "@/components/table-grid/TableHeaderRows.tsx";
import TableBodyRows from "@/components/table-grid/TableBodyRows.tsx";
import {SymbolIcon} from "@radix-ui/react-icons";

interface TableGridProps<T> {
    data: T[];
    headers: Column<T>[];
    isLoading: boolean
}

const TableGrid = <T,>({ data, headers, isLoading }: TableGridProps<T>) => {
    function formatData(columns: Column<T>[], data: T[]): Partial<T>[] {
        if (data && columns) {
            return data.map((item) => {
                const formattedData: Partial<T> = {};
                columns.forEach((header) => {
                    const { key, valueFormatter } = header;
                    const value = item[key];
                    // @ts-ignore - this is a dynamic key so it's not possible to type it correctly
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
                        <TableHeaderRows headers={headers} />
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
                            <TableBodyRows formattedData={formattedData} />
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export default TableGrid;
