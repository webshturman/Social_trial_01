import React, {FC, useState} from 'react';
import s from "../Users/Users.module.css";
import style from "./Paginaton.module.css"
import {Button} from "@material-ui/core";

type PaginationType = {
    getItems: (pageNumber: number) => void
    totalCount: number
    pageSize: number
    currentPage: number
    portionSize: number
}

export const Pagination: FC<PaginationType> = ({
    getItems,
   totalCount,
    pageSize,
   currentPage,
   portionSize,
   }) => {

    let pagesAmount = Math.ceil(totalCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesAmount; i += 1) {
        pages.push(i)
    };

    let portionCount = Math.ceil(pagesAmount / portionSize);
    let [portionNumber, setPortionNumber] = useState<number>(1);
    let previousPortion = (portionNumber - 1) * portionSize+1;
    let nextPortion = portionNumber * portionSize;


    return (
        <div className={style.paginationBlock}>
            {portionNumber > 1 &&
                <Button variant="contained" color="primary" size={'small'}
                        onClick={()=> setPortionNumber(portionNumber-1)}>
                    PREV
                </Button>
            }
            {pages.filter(page => page >= previousPortion && page <= nextPortion)
                .map(pageNum => {
                return <span key={pageNum} className={pageNum === currentPage ? s.selectedPage : s.pageNumber}
                             onClick={(e) => getItems(pageNum)}>{pageNum}</span>
            })}
            {portionCount > portionNumber &&
            <Button variant="contained" color="primary" size={'small'}
                    onClick={()=> setPortionNumber(portionNumber+1)}>
                NEXT
            </Button>
            }
        </div>
    );
};

