function ViewPokemonRow({ data, element }) {
  return (
    <div className={"view-row-container"} key={element.id}>
      <div className={"view-row"}>
        <span className={"view-title"}>{element} :</span>
      </div>
      <div className={"view-row"}>
        <span className={"text-description"}>{JSON.stringify(data[element])} </span>
      </div>
    </div>
  );
}

export default ViewPokemonRow;
