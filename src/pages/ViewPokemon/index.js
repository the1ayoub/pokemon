import "./index.css";
import { Link, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import ViewPokemonRow from "./ViewPokemonRow";
import { API_URL } from "../../utils/constants";
import Loader from "../../components/Loader";
import Error from "../../components/Error";

function ViewPokemon() {
  const params = useParams();
  const pokemonId = parseInt(params.pokemonId);
  const { loading, data, error } = useFetch({ url: `${API_URL}/${pokemonId}` });

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <div className={"view-container"}>
      <div className={"url-container"}>
        <Link to={"/"} className={"home-url"}>{"< Back home"}</Link>
      </div>
      {Object.keys(data).map((element, idx) => {
        //NOTE, the API does not provide a stable id thus the usage of map index.
        return (
          <ViewPokemonRow data={data} element={element} key={idx} />
        );
      })}
    </div>
  );
}

export default ViewPokemon;
