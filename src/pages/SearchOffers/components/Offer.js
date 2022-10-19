import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";

import Button from "react-bootstrap/Button";
import axios from "axios";

export default function Offer() {
  const [post, setPost] = useState({});
  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get("http://localhost:8000/api/post");
      setPost(res.data);
      // eslint-disable-next-line no-console
      console.log(res.data);
    };
    fetchPost();
  }, [post]);

  return (
    <>
      {post.map((offer) => (
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
