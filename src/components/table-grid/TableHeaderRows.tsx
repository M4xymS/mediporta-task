import { TableHead } from "@/components/ui/table.tsx";
import { Column, SortingOrder } from "@/types";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu.tsx";
import { Button } from "@/components/ui/button.tsx";
import { CaretDownIcon, CaretSortIcon, CaretUpIcon } from "@radix-ui/react-icons";
import { useAppDispatch } from "@/store/storeHooks.ts";
import { setOrder, setSort } from "@/features/tableSettings.ts";

interface TableHeaderRowsProps<T> {
    header: Column<T>;
}

const TableHeaderRows = <T,>({ header }: TableHeaderRowsProps<T>) => {
    const dispatch = useAppDispatch();

    const handleClick = (order: SortingOrder) => {
        dispatch(setOrder(order));
        dispatch(setSort(header.sort));
        const params = new URLSearchParams(window.location.search);
        params.set('order', order);
        params.set('sort', header.sort as string);
        window.history.replaceState({}, '', `?${params}`);
    };

    return (
        <TableHead>
            <div className='flex items-center'>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm" className="h-8">
                            {header.header}
                            {header.sort && (
                                <CaretSortIcon className="ml-2 size-4"/>
                            )}
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem onClick={() => handleClick('asc')} className='cursor-pointer'>
                            <CaretUpIcon className="mr-2 size-3.5"/>
                            Asc
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleClick('desc')} className='cursor-pointer'>
                            <CaretDownIcon className="mr-2 size-3.5"/>
                            Desc
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </TableHead>
    );
};

export default TableHeaderRows;
