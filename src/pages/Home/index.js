import "./index.css";
import PokemonRow from "./PokemonRow";
import useFetch from "../../hooks/useFetch";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import { API_URL } from "../../utils/constants";

function Home() {
  const { loading, data, error } = useFetch({ url: API_URL });
  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <div className={"home-body"}>
      <div className={"table-header"}>
        <span>Pokemons list ~</span>
      </div>
      <div className={"pokemon-table"}>
        <div className={"table-body"}>
          {(data?.results || []).map((pokemon) => {
            return <PokemonRow data={pokemon} key={pokemon.url} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
