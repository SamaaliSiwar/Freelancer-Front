import React from "react";
import Card from "react-bootstrap/Card";

import Button from "react-bootstrap/Button";
import axios from "axios";

export default function Offer() {
  const { data } = axios.get(`/api/post/`);

  return (
    <>
      {data.offers.map((offer) => (
        <Card>
          <Card.Title>{offer.Categorie}</Card.Title>
          <Card.Img variant="top" src={offer.img} />
          <Card.Body>
            <Card.Text>{offer.title}</Card.Text>
          </Card.Body>
          <Button variant="secondary" size="lg">
            Postuler
          </Button>
        </Card>
      ))}
    </>
  );
}
