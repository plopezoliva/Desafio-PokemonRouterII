import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import React from "react";
import { Card, CardGroup, Container, ListGroup } from "react-bootstrap";

const DetallePokemon = () => {
  const { name } = useParams();

  const [pokemon, setPokemon] = useState(null);
  const navitate = useNavigate();

  const getData = async () => {
    const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await result.json();
    setPokemon(data);
  };

  useEffect(() => {
    getData();
  }, [name]);

  return (
    <Container className="">
      <div className="row">
       <Card className="bg-dark text-white" style={{ width: '18rem' }} >
        {pokemon && (
          <Card.Body className="tarjeta">
            <div>
              <Card.Img
                variant="top"
                src={pokemon.sprites.other.home.front_default}
                alt=""
              />
        <Card.Title>{pokemon.name}</Card.Title>
              {pokemon.stats?.map((item, i) => (
                <ListGroup variant="flush">
                  <div key={i}>
                <ListGroup.Item className="bg-dark text-white">{item.stat.name} : {item.base_stat}</ListGroup.Item>
                  </div>
                </ListGroup>
              ))}
            </div>
            </Card.Body>
        )}
        
      </Card>
      </div>
      </Container>
      
  );
};

export default DetallePokemon;
