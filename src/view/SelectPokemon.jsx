import { useEffect, useState } from "react";

import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Form } from "react-bootstrap";

const SelectPokemon = () => {
  const [pokemones, setPokemones] = useState([]);
  const [selected, setSelected] = useState("");
  const navigate = useNavigate();
  const url = "https://pokeapi.co/api/v2/pokemon?limit=151";

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setPokemones(data.results.map((result) => result.name));
      });
  }, []);
  const goToPokemon = () => {
    if (selected === "" || selected === "Pokemones") {
      alert("Debes elegir un pokemón");
      return;
    }
    navigate(`/pokemones/${selected}`);
  };

  return (
    <Container>      
      <h1>Selecciona un Pokemón</h1>
      <div  className="rowselec">
      <Form.Select
        aria-label="Default select example"
        value={selected}
        onChange={({ target }) => setSelected(target.value)}
        placeholder="Pokemones"
        className="service_item"
      >
        <option className="select-text">Pokemones</option>
        {pokemones.map((name) => {
          return <option value={name}>{name}</option>;
        })}
      </Form.Select>
      </div>
      <div className="boton">
        <Button onClick={goToPokemon} variant="dark">
          Ver Detalle
        </Button>
      </div>
    
    </Container>
  );
};

export default SelectPokemon;
