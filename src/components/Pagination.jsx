import { Fragment, useContext } from "react";
import ReactPaginate from "react-paginate";
import { ElementContext } from "../pages/Principal";

function Pagination({ pages }) {
	const { actualizarPagina } = useContext(ElementContext);
	return (
		<ReactPaginate
			previousLabel={"previous"}
			nextLabel={"next"}
			breakLabel={"..."}
			breakClassName={"break-me"}
			pageCount={pages}
			marginPagesDisplayed={2}
			pageRangeDisplayed={5}
			onPageChange={(event) => actualizarPagina(event.selected)}
			containerClassName={"pagination"}
			activeClassName={"active"}
		/>
	);
}

export default Pagination;
