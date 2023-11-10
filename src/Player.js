import React from "react";
import Card from "react-bootstrap/Card";

const Player = ({ elm}) => {
  const { name, team, nationality, jerseyNumber, age, imageUrl } = elm ; 
  return (

    <div style={{display : "flex" , alignItems: "centre" , justifyContent: "center", }}>
    <Card style={{width: "35rem",height:"15rem" , margin: "10px" ,textAlign: "center", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)", borderRadius: "8px", display: "flex", backgroundColor: "greenyellow", alignItems: "center", justifyContent: "center",fontWeight: "bold",}} >
      <Card.Img variant="top" src={imageUrl} style={{width: "10rem" , margin:"50px",  maxHeight: "200px", borderRadius: "10rem"}} />
      <Card.Body>
        <Card.Title style={{color:"black"}}>{name}</Card.Title>
        <Card.Text>
          <span style={{color:"green",}} >Team:</span> <span style={{color:"red"}}>{team}</span>
          <br />
          <span style={{color:"green",}} >Nationality:</span> <span style={{color:"red"}}>{nationality}</span>
          <br />
          <span style={{color:"green",}} >Jersey Number:</span> <span style={{color:"red"}}>{jerseyNumber}</span>
          <br />
          <span style={{color:"green",}} >Age:</span> <span style={{color:"red"}}>{age}</span>
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  );
};

export default Player;