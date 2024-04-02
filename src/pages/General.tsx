import {useGetAllTagsQuery} from "@/api/api.ts";
import TableGrid from "@/components/table-grid/TableGrid.tsx";
import {Collective, Column, Tag} from "@/types";
import {Badge, badgeVariants} from "@/components/ui/badge.tsx";
import {CheckIcon, Cross2Icon, MagnifyingGlassIcon} from "@radix-ui/react-icons";
import {Dialog, DialogTrigger} from "@/components/ui/dialog.tsx";
import {Button} from "@/components/ui/button.tsx";
import DialogDetails from "@/components/dialog/DialogDetails.tsx";
import {tagLink} from "@/constants/tagLinks.ts";
import {Tooltip, TooltipContent, TooltipTrigger} from "@/components/ui/tooltip.tsx";
import {formatNumberWithSpaces} from "@/lib/utils.ts";
import {useState} from "react";
import {useAppSelector} from "@/store/storeHooks.ts";
import {getPageSize} from "@/features/tableSettings.ts";

function General() {
    const [currentPage, setCurrentPage] = useState(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const page = searchParams.get('page');
        return page ? parseInt(page) : 1;
    })

    const pageSize = useAppSelector(getPageSize);
    const {data, isLoading, isFetching} = useGetAllTagsQuery({pageSize, page: currentPage});


    const countFormatter = (value: string) => {
        return (
            <Badge variant='outline' className='whitespace-nowrap'>{formatNumberWithSpaces(value)}</Badge>
        )
    }

    const nameFormatter = (value: string) => {
        return <a href={tagLink + value} target="_blank" className={badgeVariants() + " capitalize"}>{value}</a>
    }

    const booleanFormatter = (value: boolean) => {
        return value ? <CheckIcon/> : <Cross2Icon/>
    }

    const tagsFormatter = (value: Collective[]) => {
        if (value) {
            return (
                <Dialog>
                    <DialogTrigger>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button variant="ghost" size="sm"><MagnifyingGlassIcon/></Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                Show details
                            </TooltipContent>
                        </Tooltip>
                    </DialogTrigger>
                    <DialogDetails data={value}/>
                </Dialog>
            )
        }
        return undefined
    }

    const headers: Column<Tag>[] = [
        {
            key: 'count',
            header: 'Count',
            valueFormatter: countFormatter
        },
        {
            key: 'name',
            header: 'Name',
            valueFormatter: nameFormatter
        },
        {
            key: 'has_synonyms',
            header: 'Has Synonyms',
            valueFormatter: booleanFormatter
        },
        {
            key: 'is_required',
            header: 'Is Required',
            valueFormatter: booleanFormatter
        },
        {
            key: 'collectives',
            id: 'details',
            size: 35,
            valueFormatter: tagsFormatter
        }
    ]

    return (
        <>
            <div className='mt-6 md:container flex-1'>
                <TableGrid
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    isLoading={isLoading || isFetching}
                    headers={headers}
                    data={data?.items}
                    pagination
                />
            </div>
        </>
    )
}

export default General
