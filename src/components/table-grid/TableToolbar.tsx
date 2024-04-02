import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationNext,
    PaginationPrevious
} from "@/components/ui/pagination.tsx";
import {ChangeEvent, FC, useEffect} from "react";
import {Input} from "@/components/ui/input.tsx";
import {Tooltip, TooltipContent, TooltipTrigger} from "@/components/ui/tooltip.tsx";
import {useAppDispatch} from "@/store/storeHooks.ts";
import {setPageSize} from "@/features/tableSettings.ts";
import useDebounce from "@/hooks/useDebounce.ts";

interface TableToolbarProps {
    currentPage?: number
    setCurrentPage?: (page: number) => void
}

const TableToolbar: FC<TableToolbarProps> = ({currentPage = 1, setCurrentPage}) => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        params.set('page', currentPage.toString());

        window.history.replaceState({}, '', `?${params}`);
    }, [currentPage]);


    const onNextPage = () => {
        if (setCurrentPage) {
            setCurrentPage(currentPage + 1);
        }
    }

    const onPreviousPage = () => {
        if (currentPage === 1) {
            return;
        }
        if (setCurrentPage) {
            setCurrentPage(currentPage - 1);
        }
    }

    const debouncedSetPageSize = useDebounce((value) => {
        dispatch(setPageSize(value));
    }, 500);

    const onPageChange = (event: ChangeEvent<HTMLInputElement>) => {
        let value = parseInt(event.target.value, 10);
        value = isNaN(value) ? 0 : value;
        value = Math.min(100, Math.max(0, value));

        debouncedSetPageSize(value);
    }


    if (setCurrentPage || currentPage) {
        return (
            <div className='flex justify-end'>
                <div className='flex'>
                    <Tooltip>
                        <TooltipTrigger>
                            <Input
                                className='mr-2 w-16'
                                type="number"
                                max={100}
                                onChange={onPageChange}
                            />
                        </TooltipTrigger>
                        <TooltipContent>
                            Pagination
                        </TooltipContent>
                    </Tooltip>

                    <Pagination className='flex justify-end'>
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious onClick={onPreviousPage}
                                                    className='cursor-pointer'>Previous</PaginationPrevious>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationNext onClick={onNextPage} className='cursor-pointer'>Next</PaginationNext>
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div>
            </div>
        )
    }
}

export default TableToolbar;