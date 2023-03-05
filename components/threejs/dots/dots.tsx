import * as THREE from "three";
import s from "./dots.module.css";
import { useMemo } from "react";
import { OrbitControls, Stats } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { vertexShader, fragmentShader } from "./shader";

const Particles = () => {
  const planePositions = useMemo(() => {
    const planeGeometry = new THREE.PlaneGeometry(6, 6, 128, 128);
    const positions = planeGeometry.attributes.position.array;

    return positions;
  }, []);

  const shaderArgs = useMemo(
    () => ({
      uniforms: {
        uTime: { value: 0 },
      },
      vertexShader,
      fragmentShader,
    }),
    []
  );

  useFrame(() => {
    shaderArgs.uniforms.uTime.value++;
  });

  return (
    <points rotation={[-Math.PI / 1, 0, 0]}>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attach="attributes-position"
          array={planePositions}
          itemSize={3}
          count={planePositions.length / 3}
        />
      </bufferGeometry>
      <shaderMaterial
        args={[shaderArgs]}
        transparent
        depthTest={false}
        depthWrite={false}
      />
    </points>
  );
};

function TinyDots() {
  return (
    <Canvas dpr={2}>
      <color attach="background" args={[0xfdfdfd]} />

      <Particles />
    </Canvas>
  );
}

function Dots() {
  return (
    <Canvas dpr={1.5}>
      <color attach="background" args={[0xfdfdfd]} />

      <Particles />
    </Canvas>
  );
}

function BigDots() {
  return (
    <Canvas dpr={1}>
      <color attach="background" args={[0xfdfdfd]} />

      <Particles />
    </Canvas>
  );
}
export { TinyDots, Dots, BigDots };
