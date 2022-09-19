import React from "react";
import Card from "./Card";

export default function HomePage() {
  return (
    <div className="home-page w-full h-screen container flex justify-around flex-wrap items-center">
      <Card image="/src/assets/img/page.png" title="Page facebook" text="Chuyển đến page facebook của web" link="https://www.facebook.com/CuculayaTV.fanpage" redirectTitle="Chuyển trang"></Card>
      <Card image="/src/assets/img/Photothumb.jpg" title="Kho Ảnh" text="Chuyển đến kho ảnh do đội ngủ của web tổng hợp" link="/photo" redirectTitle="Chuyển trang"></Card>
      <Card image="/src/assets/img/Shopaccthumb.jpg" title="Shop acc" text="Đang phát triển" link="/" redirectTitle="Chuyển trang"></Card>
    </div>
  );
}
