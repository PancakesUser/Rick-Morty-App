import { Fragment } from "react";

function Characters({ characters }) {
	function status(status) {
		switch (status) {
			case "Alive":
				return <p className="alive">Vivo</p>;
				break;
			case "Dead":
				return <p className="dead">Muerto</p>;
				break;
			case "unknown":
				return <p className="unknown">Estado: Desconocido</p>;
				break;
		}
	}

	function gender(gender) {
		switch (gender) {
			case "Male":
				return <p className="gender">Genero: Hombre</p>;
				break;
			case "Female":
				return <p className="gender">Genero: Mujer</p>;
				break;
			case "unknown":
				return <p className="gender">Genero: Desconocido</p>;
		}
	}

	return (
		<section className="personajes">
			{characters.map((e, i) => {
				return (
					<Fragment>
						<div className="personajes__card">
							<img src={e.image} />
							<div className="personajes__body">
								<h2>
									{e.name.replace("Abadango Cluster Princess", "Abadango")}
								</h2>
								<hr />
								{gender(e.gender)}
								{status(e.status)}
							</div>
						</div>
					</Fragment>
				);
			})}
		</section>
	);
}

export default Characters;
