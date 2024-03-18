import { useState, useRef } from 'react'
import { Canvas , useFrame } from '@react-three/fiber'
import "./App.css"

/* const Cube = ({ position, size, color}) => {
   const ref = useRef();
   useFrame((state, delta) => {
     ref.current.rotation.x += delta * 0.1;
     ref.current.rotation.x += delta * 0.1;
     ref.current.rotation.z += delta * 0.1;
     // ref.current.position.z += delta * 0.5;
     ref.current.position.z = Math.sin(state.clock.elapsedTime) * 1; //Sin function
   }) 
   return (
     <mesh position={position} ref={ref}>
       <boxGeometry args={size}/> 
       <meshStandardMaterial color={color}/>
    </mesh>
   )
}
*/

const Sphere = ({ position, size, color}) => {
  return (
    <mesh position={position}>
      <sphereGeometry args={size}/>
      <meshStandardMaterial color={color}/>
    </mesh>
  )
}

const Torus = ({ position, size, color}) => {
  const ref = useRef();
  useFrame((state,delta) => {
    ref.current.rotation.x += delta * 0.1;
    ref.current.rotation.y += delta * 0.1;
    ref.current.rotation.z += delta * 0.1;
  })
  return (
    <mesh position={position} ref={ref}>
      <torusGeometry args={size}/>
      <meshStandardMaterial color={color}/>
    </mesh>
  )
}

function App() {
  return (
    <>
      <Canvas>

        <directionalLight position={[0,0,2]} intensity={2}/>
        <ambientLight intensity={.5}/>

        <group>
          {/* <Cube position={[1,0,0]} size={[1,1,1]} color={"yellow"}/>
          <Cube position={[-1,0,0]} size={[1,1,1]} color={"green"}/>
          <Cube position={[1,1.5,0]} size={[1,1,1]} color={"red"}/>
          <Cube position={[-1,1.5,0]} size={[1,1,1]} color={"blue"}/>
          <Cube position={[1,-1.5,0]} size={[1,1,1]} color={"skyblue"}/>
          <Cube position={[-1,-1.5,0]} size={[1,1,1]} color={"cyan"}/>
          <mesh position={[-1,-1.5,0]}>
            <boxGeometry args={[1,1,2]}/> 
            <meshStandardMaterial color={"yellow"}/>
            <mesh> This is the base methods to create shape I created a obj/component on top
            of page to make it easy to create these shapes*/}
        </group>
        <Sphere position={[0,0,0]} size={[.5,30,30]} color={"yellow"}/>
        <Torus position={[0,0,0]} size={[1.5,.05,30,30]} color={"lightblue"}/>
            
      </Canvas>
    </>
  )
}

export default App
