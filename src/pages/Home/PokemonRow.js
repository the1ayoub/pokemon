import { Link } from "react-router-dom";
import { getIdFromURL } from "../../utils";

function PokemonRow({ data = {} }) {
  return (
    <div className={"table-row"}>
      <span>{data?.name}</span>
      <div className={"table-actions"}>
        <Link to={`/view/${getIdFromURL(data?.url)}`} className={"table-link"}>View</Link>
      </div>
    </div>
  );
}

export default PokemonRow;
