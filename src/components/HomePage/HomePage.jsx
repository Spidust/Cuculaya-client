import React from "react";
import Card from "./Card";

export default function HomePage() {
  return (
    <div className="home-page flex sm-flex-col justify-around flex-wrap items-around">
      <Card image="https://picsum.photos/250/200" title="test" text="" link="/link" redirectTitle="TEst title"></Card>
      <Card image="https://picsum.photos/250/200" title="test" text="" link="/link" redirectTitle="TEst title"></Card>
      <Card image="https://picsum.photos/250/200" title="test" text="" link="/link" redirectTitle="TEst title"></Card>
    </div>
  );
}
