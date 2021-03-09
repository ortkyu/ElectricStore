import s from "../styles/main.module.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import {Product} from "../store/products/types"





export default function Paginator({
  pageSize,
  currentPage,
  setCurrentPage,
  totalProductCount,
}) {
  const dispatch = useDispatch();

  let onPageChanged = (p) => {
    dispatch(setCurrentPage(p));
  };

  let pagesCount = Math.ceil(totalProductCount / pageSize);
  let portionSize = 3;
  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }


  return (
    <div className={s.pagin}>
      <div>
        {portionNumber > 1 && (
          <div
            onClick={() => {
              setPortionNumber(portionNumber - 1);
            }}
          >
            пред
          </div>
        )}
        <div>
          {pages
            .filter(
              (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
            )
            .map((p) => {
              return (
                <span
                  className={
                    currentPage === p ? s.selectNumberPage : s.numberPage
                  }
                  key={p}
                  onClick={(e) => {
                    onPageChanged(p);
                  }}
                >
                  {p}
                </span>
              );
            })}
        </div>
        {portionCount > portionNumber && (
          <div
            onClick={() => {
              setPortionNumber(portionNumber + 1);
            }}
          >
            след
          </div>
        )}
      </div>
    </div>
  );
}
