import {Table, TableBody, TableHeader} from "@/components/ui/table.tsx";
import {Column} from "@/types";
import TableHeaderRows from "@/components/table-grid/TableHeaderRows.tsx";
import TableBodyRows from "@/components/table-grid/TableBodyRows.tsx";

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
                        <TableHeaderRows headers={headers} />
                    </TableHeader>
                    <TableBody>
                        <TableBodyRows formattedData={formattedData} />
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export default TableGrid;
