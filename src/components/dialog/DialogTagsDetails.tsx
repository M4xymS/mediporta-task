import React, {useState} from "react";
import {DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle} from "@/components/ui/dialog";
import {ScrollArea} from "@/components/ui/scroll-area.tsx";
import {Separator} from "@/components/ui/separator.tsx";
import {badgeVariants} from "@/components/ui/badge.tsx";
import {tagLink} from "@/constants/tagLinks.ts";
import {Input} from "@/components/ui/input.tsx";
import {Label} from "@/components/ui/label.tsx";
import {Collective} from "@/types";

interface DialogDetailsProps {
    collectives: Collective[];
}

const DialogTagsDetails = ({collectives}: DialogDetailsProps) => {
    const [filteredData, setFilteredData] = useState<string[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>("");

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);
        const results = collectives[0]?.tags.filter((tag: string) => tag.toLowerCase().includes(term));
        setFilteredData(results);
    };

    const renderTags = () => {
        const tagsToRender = searchTerm !== "" ? filteredData : collectives[0].tags;
        return tagsToRender.map((tag: string) => (
            <React.Fragment key={tag}>
                <a href={tagLink + tag} target="_blank" className={badgeVariants()}>
                    {tag}
                </a>
                <Separator className="my-2"/>
            </React.Fragment>
        ));
    };

    const renderFields = () => {
        return Object.entries(collectives[0]).map(([key, value]) => (
            typeof value === 'string' && key !== "description" && (
                <div key={key}>
                    <Label htmlFor={key} className="text-right">
                        {key}:
                    </Label>
                    <p className='text-xs'>{value}</p>
                    <Separator className="my-2"/>
                </div>
            )
        ));
    };

    return (
        <DialogContent className="sm:max-w-10/12">
            <DialogHeader>
                <DialogTitle>{collectives[0].name}</DialogTitle>
                <DialogDescription>
                    {collectives[0].description}
                </DialogDescription>
            </DialogHeader>
            <div className="flex">
                <div className='w-full'>
                    <Label htmlFor="name" className="text-right">Search Tags</Label>
                    <Input className='mb-6' value={searchTerm} onChange={handleSearch}/>
                    <ScrollArea className="h-72 rounded-md border">
                        <div className="p-4">
                            <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
                            {renderTags()}
                        </div>
                    </ScrollArea>
                </div>
                <div className='w-full px-4'>
                    {renderFields()}
                </div>
            </div>
            <DialogFooter>
                <p className='opacity-60 text-xs'>Number of tags: {collectives[0].tags.length}</p>
            </DialogFooter>
        </DialogContent>
    );
};

export default DialogTagsDetails;
