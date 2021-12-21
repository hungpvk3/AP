import React from "react";
import Icon from "../icon";
import ReactPaginate from "react-paginate";

const Pagination = ({ pagination, onPageChange }) => {
    const { _page, _totalRow } = pagination;

    const handlePageChange = (newPage) => {
        if (onPageChange) {
            onPageChange(newPage);
        }
    };

    return (
        <div className="fixed bottom-10 right-20">
            <ReactPaginate
                pageCount={_totalRow}
                pageRangeDisplayed={3}
                marginPagesDisplayed={1}
                onPageChange={(e) => handlePageChange(e.selected + 1)}
                previousLabel={
                    <button className="pt-2" disabled={_page <= 1}>
                        <Icon>
                            <path
                                fillRule="evenodd"
                                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                clipRule="evenodd"
                            />
                        </Icon>
                    </button>
                }
                nextLabel={
                    <button className="pt-2" disabled={_page >= _totalRow}>
                        <Icon>
                            <path
                                fillRule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clipRule="evenodd"
                            />
                        </Icon>
                    </button>
                }
                breakLabel={"..."}
                containerClassName={"flex items-center text-blue-600"}
                pageClassName={"px-2"}
                activeClassName={"bg-gray-300 rounded-full focus:outline-none"}
                pageLinkClassName={"focus:outline-none"}
                previousLinkClassName={"focus:outline-none"}
                nextLinkClassName={"focus:outline-none"}
            />
        </div>
    );
};

export default Pagination;
