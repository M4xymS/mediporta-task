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
import {useAppDispatch, useAppSelector} from "@/store/storeHooks.ts";
import {getHasMore, getPage, getSort, setPage, setPageSize} from "@/features/tableSettings.ts";
import useDebounce from "@/hooks/useDebounce.ts";

interface TableToolbarProps {
    pagination: boolean
    maxPageSize?: number
}

const TableToolbar: FC<TableToolbarProps> = ({pagination, maxPageSize}) => {
    const params = new URLSearchParams(window.location.search);
    const dispatch = useAppDispatch();
    const page = useAppSelector(getPage);
    const order = useAppSelector(getSort);
    const hasMore = useAppSelector(getHasMore);
    useEffect(() => {
        if (!pagination) {
            params.delete('page');
        } else {
            params.set('page', page.toString());
        }
        window.history.replaceState({}, '', `?${params}`);
    }, [page, pagination, order]);


    const onNextPage = () => {
        if (hasMore) dispatch(setPage(page + 1))
    }

    const onPreviousPage = () => {
        if (page !== 1) dispatch(setPage(page - 1))
    }

    const debouncedSetPageSize = useDebounce((value) => {
        dispatch(setPageSize(value));
    }, 500);

    const onPageChange = (event: ChangeEvent<HTMLInputElement>) => {
        let value = parseInt(event.target.value, 10);
        value = isNaN(value) ? 0 : value;
        value = Math.min(maxPageSize ?? 100, Math.max(0, value));

        debouncedSetPageSize(value);
    }

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

export default TableToolbar;