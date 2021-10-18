import { useState, useEffect, Fragment, createContext } from "react";
import conseguirPersonajes from "../helpers/Api";
import Characters from "../components/Characters";
import Pagination from "../components/Pagination";
export const ElementContext = createContext();

export default function Principal() {
	const [character, setCharacter] = useState([]);
	const [totalPages, setPages] = useState(0);
	const [loading, setLoading] = useState(true);
	function solicitarInfo(path) {
		setLoading(true);
		conseguirPersonajes(path).then((res) => {
			setCharacter(res.data.results);
			setPages(res.data.info.pages);
			setLoading(false);
		});
	}

	useEffect(() => {
		solicitarInfo("character/?page=1");
	}, []);

	const actualizarPagina = (page) => {
		solicitarInfo(`character/?page=${page + 1}`);
	};

	return (
		<Fragment>
			<div className="logo">
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/2560px-Rick_and_Morty.svg.png"
					alt="Rick y morty logo"
				/>
			</div>
			<ElementContext.Provider value={{ actualizarPagina }}>
				<Characters characters={character} />
				<Pagination pages={totalPages} />
			</ElementContext.Provider>
		</Fragment>
	);
}
