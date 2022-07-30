import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Marquee from "react-fast-marquee";
import "./news.css";

export default function News() {
  return (
    <div className="newsMainDiv">
      <div className="newsMarquee">
        <Marquee gradient={false} speed={70}gradientWidth={0}>
          <p className="marqueeContain">GET HIGH!!</p>
          </Marquee>
          </div>
    <div className="news-main" id="newsDark">
      
      <Card className="card" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={require("../../assets/images/news.jpg")} />
        <Card.Body>
          <Card.Title>Best BB quotes</Card.Title>
          <Card.Text>
            View some of the best quotes Breaking Bad has to offer.
          </Card.Text>
          <a href="https://www.hollywoodreporter.com/gallery/breaking-bad-quotes-20-badass-612801/">
            <Button variant="primary">Know More</Button>
          </a>
        </Card.Body>
      </Card>
      <Card className="card" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={require("../../assets/images/news-2.png")}
        />
        <Card.Body>
          <Card.Title>Aaron Paul on BB</Card.Title>
          <Card.Text>
            How his life changed after his role in Breaking bad.
          </Card.Text>
          <a href="https://www.theguardian.com/global/2019/oct/06/aaron-paul-breaking-bad-changed-my-life-tv-interview-film-netflix">
            <Button variant="primary">Know More</Button>
          </a>
        </Card.Body>
      </Card>
      <Card className="card" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={require("../../assets/images/news-4.webp")}
        />
        <Card.Body>
          <Card.Title>Cars from BB</Card.Title>
          <Card.Text>
            Car-addicts, take a look at this collection from BB.
          </Card.Text>
          <a href="https://www.topgear.com/car-news/list/all-cars-breaking-bad-tv-series">
            <Button variant="primary">Know more</Button>
          </a>
        </Card.Body>
      </Card>
      <Card className="card" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={require("../../assets/images/news-3.png")}
        />
        <Card.Body>
          <Card.Title>BB spinoff</Card.Title>
          <Card.Text>Better Call Saul is the new talk of the town.</Card.Text>
          <a href="https://www.imdb.com/title/tt3032476/">
            <Button variant="primary">Know More</Button>
          </a>
        </Card.Body>
      </Card>
    </div>
    </div>
  );
}
