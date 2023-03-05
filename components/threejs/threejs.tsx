import React, { useState } from "react";
import { Suspense, useRef } from "react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { Html, useGLTF, useProgress, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import s from "./canvas.module.css";

function Loader() {
  const { progress } = useProgress();

  return <Html center>Cargando: {progress}%</Html>;
}

const ObjLoader = (args, objPath) => {
  const modelRef = useRef(args);

  useFrame(() => {
    if (false) {
      modelRef.current.rotation.y -= 0.00075;
    }
  });
  const gltf = useGLTF(
    "model.glb",
    "https://www.gstatic.com/draco/v1/decoders/"
  );
  return <primitive ref={modelRef} object={gltf.scene} {...args} />;
};

const ObjViewer = ({ objPath, scale, position, rotation }) => {
  return (
    <Canvas
      camera={{ fov: 15, near: 0.1, far: 1000, z: 5 }}
      shadows
      style={{ height: "40vw", width: "100vw" }}
    >
      <Suspense fallback={<Loader />}>
        <ambientLight />
        <pointLight />
        <OrbitControls />
        <ObjLoader
          objPath={objPath}
          position={position}
          scale={scale}
          rotation={rotation}
        />
      </Suspense>
    </Canvas>
  );
};

export { ObjViewer };

const ProductViewer = ({
  objPath,
  scale,
  position,
  rotation,
  lightPosition /* globalProgress */,
}) => {
  const { progress } = useProgress();
  /*
  const loadStatus = () => {
    for (let i = 0; i < 150; i++) 
    {
      setTimeout(() => 
      {  
        if (progress == 100) 
        {
          globalProgress(true);
        }
        console.log(progress);
      }, 100);
    };
    if (progress == 100) 
    {
      globalProgress(true);
    }
  };
  */

  return (
    <Canvas
      /* className={s.onLoad} onAnimationStart={() => loadStatus()} */ camera={{
        fov: 15,
        near: 0.1,
        far: 1000,
        z: 5,
      }}
      shadows
    >
      <Suspense fallback={<Loader />}>
        <ambientLight />
        <pointLight position={lightPosition} />
        <OrbitControls />
        <ObjLoader
          objPath={objPath}
          position={position}
          scale={scale}
          rotation={rotation}
        />
      </Suspense>
    </Canvas>
  );
};

export { ProductViewer };

//   <div  className={progress != 100 ? s.bg5 : s.bg4}>
// <div onMouseEnter={() => Show()} className={!delayed ? s.bg3 : s.bg4}>  </div>
