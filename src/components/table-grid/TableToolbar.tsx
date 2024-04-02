import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationNext,
    PaginationPrevious
} from "@/components/ui/pagination.tsx";
import {FC, useEffect} from "react";

interface TableToolbarProps {
    currentPage?: number
    setCurrentPage?: (page: number) => void
}

const TableToolbar: FC<TableToolbarProps> = ({currentPage = 1, setCurrentPage}) => {

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

    if (setCurrentPage || currentPage) {
        return (
            <Pagination className='flex justify-end'>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious onClick={onPreviousPage} className='cursor-pointer'>Previous</PaginationPrevious>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext onClick={onNextPage} className='cursor-pointer'>Next</PaginationNext>
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        )
    }
}

export default TableToolbar;