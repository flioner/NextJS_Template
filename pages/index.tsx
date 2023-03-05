import Layout from "../components/layout/layout";
import { ProfileSlider, VerticalSlider } from "../components/ui/slider/slider";
import s from "../styles/Home.module.css";
import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import { LaptopViewer } from "../components/threejs/canvas";
import { VantaBG } from "../components/threejs/vanta";
import { ObjViewer } from "../components/threejs/threejs";
import { Modal } from "../components/ui/modal/modal";
import { ImageCollection } from "../components/ui/image_collection/image_collection";
import { ImageHero } from "../components/ui/imgHero/imghero";
import DotWave from "../components/threejs/dots/dotwave";
import { ProductDemo } from "../components/product_demo/productDemo";
import Categories from "../components/categories/categories";
import { Contact } from "../components/ui/contact/contact";

export default function Home() {
  const [visibleDot, setDots] = useState(false);

  return (
    <Layout>
      <div></div>
    </Layout>
  );
}
