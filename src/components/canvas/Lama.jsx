// import React, { Suspense, useEffect, useState, useRef } from "react";
// import { Canvas, useLoader } from "@react-three/fiber";
// import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
// import { TextureLoader } from 'three';

// const Computers = (props) => {
//   const { nodes, materials } = useGLTF("./lama/lama.gltf");
//   const groupRef = useRef();

//   // Load the texture
//   const texture = useLoader(TextureLoader, './lama/lama.png');

//   // Apply the texture directly to the materials
//   materials['Material.002'].map = texture;
//   materials['Material.001'].map = texture;
//   materials['lambert4'].map = texture;

//   // Ensure the materials update with the new texture
//   materials['Material.002'].needsUpdate = true;
//   materials['Material.001'].needsUpdate = true;
//   materials['lambert4'].needsUpdate = true;
//   useEffect(() => {
//     if (groupRef.current) {
//       // Adjust the rotation to face the front
//       groupRef.current.rotation.y = Math.PI; // 180 degrees in radians
//     }
//   }, []);
//   return (
//     <group ref={groupRef} {...props} dispose={null}>
//       <mesh scale={1.5} position-y={0} geometry={nodes.Mesh002.geometry} material={materials['Material.002']} />
//       <mesh scale={1.5} position-y={0} geometry={nodes.Mesh002_1.geometry} material={materials['Material.001']} />
//       <mesh scale={1.5} position-y={0} geometry={nodes.Mesh002_2.geometry} material={materials.lambert4} />
//     </group>
//   );
// };

// const ComputersCanvas = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const mediaQuery = window.matchMedia("(max-width: 500px)");
//     setIsMobile(mediaQuery.matches);

//     const handleMediaQueryChange = (event) => {
//       setIsMobile(event.matches);
//     };

//     mediaQuery.addEventListener("change", handleMediaQueryChange);

//     return () => {
//       mediaQuery.removeEventListener("change", handleMediaQueryChange);
//     };
//   }, []);

//   return (
//     <Canvas
//       frameloop="demand"
//       shadows
//       dpr={[1, 2]}
//       camera={{ fov: 120, near: 0.1, far: 200 ,position: [-4, 3, 6],}}
//       gl={{ preserveDrawingBuffer: true }}
//     >
//       <Suspense>
//         <hemisphereLight intensity={0.6} groundColor="black" />
//         <OrbitControls
//     autoRotate
//           enableZoom={false}
//           maxPolarAngle={Math.PI / 2}
//           minPolarAngle={Math.PI / 2}
//         />
//         <directionalLight
//           position={[0, -10, 0]}
//           intensity={5.5}
//           color={"rgb(218, 181, 181)"}
//         />
//         <Computers scale={isMobile ? 2.0 : 2.01}/>
//         <Preload all />
//       </Suspense>
//       <Preload all />
//     </Canvas>
//   );
// };

// export default ComputersCanvas;


import React, { useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'

// Define the materials
const  skinMaterial = <meshStandardMaterial color="black" metalness={9} roughness={0.9} />
const greenMaterial = <meshStandardMaterial color="#caf0f8" roughness={0.4} />
const  blackMetallicMaterial = <meshStandardMaterial color="blue" roughness={0.2} />

export function Model(props) {
  const { nodes } = useGLTF('./lama/lama.gltf')

  const [bounce, setBounce] = useState(0)

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime()
    const bounceSpeed = 2
    const bounceHeight = 0.9
    setBounce(Math.sin(time * bounceSpeed) * bounceHeight)
  })

  return (
    <group {...props} dispose={null}>
      <mesh 
        rotation={[Math.PI / 2, 0, 0]} 
        geometry={nodes.Mesh002.geometry}
        position={[0, bounce, 0]}
      >
        {blackMetallicMaterial}
      </mesh>
      <mesh 
        rotation={[Math.PI / 2, 0, 0]} 
        geometry={nodes.Mesh002_1.geometry}
        position={[0, bounce, 0]}
      >
        {skinMaterial}
      </mesh>
      <mesh 
        rotation={[Math.PI / 2, 0, 0]}  
        geometry={nodes.Mesh002_2.geometry}
        position={[0, bounce, 0]}
      >
        {greenMaterial}
      </mesh>
    </group>
  )
}

useGLTF.preload('./lama/lama.gltf')

const LamaCanvas = () => {
  const [isMobile, setIsMobile] = useState(false)

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)")
    setIsMobile(mediaQuery.matches)

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches)
    }

    mediaQuery.addEventListener("change", handleMediaQueryChange)
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange)
    }
  }, [])

  // Set the position based on the isMobile state
  const position = isMobile ? [0, -4.3, 0] : [0, -5.9, 0]

  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} />
      <Model position={position} scale={isMobile ? 0.15 : 0.2} />
      <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        minAzimuthAngle={-Math.PI / 20}  // Limit rotation to 45 degrees left
        maxAzimuthAngle={Math.PI / 20}   
      />
    </Canvas>
  )
}

export default LamaCanvas
