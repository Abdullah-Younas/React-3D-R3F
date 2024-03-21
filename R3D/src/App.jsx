import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { useTexture } from "@react-three/drei";
import './App.css';

const Sphere = ({ position, size, texture }) => {
  const ref = useRef();
  useFrame((state, delta) => {
    ref.current.rotation.y += delta * 0.3;
  })
  return (
    <mesh position={position} ref={ref}>
      <sphereGeometry args={size}/>
      <meshStandardMaterial map={texture}/>
    </mesh>
  )
}

function App() {
  return (
    <>
      <Canvas>
        <Scene />
      </Canvas>
    </>
  );
}

function Scene() {
  const [phongBaseColorTexture, emissiveTexture] = useTexture([
    "/textures/phong1_baseColor.jpeg",
    "/textures/phong1_emissive.jpeg"
  ]); // Adjust the paths as per your project structure

  return (
    <>
      <directionalLight position={[0, 0, 2]} intensity={2} />
      <ambientLight intensity={0.5} />

      <Sphere position={[0,0,0]} size={[2,30,30]} texture={phongBaseColorTexture}/>
    </>
  );
}

export default App;
