import React, { useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

export function Model(props) {
  const { nodes, materials } = useGLTF('./lama3/lamaaa.gltf');

  const [bounce, setBounce] = useState(0);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    const bounceSpeed = 2;
    const bounceHeight = 0.9;
    setBounce(Math.sin(time * bounceSpeed) * bounceHeight);
  });

  return (
    <group {...props} dispose={null}>
      <mesh 
        rotation={[Math.PI / 2, 0, 0]} 
        geometry={nodes.Mesh003.geometry}
        position={[0, bounce, 0]}
        material={materials['Material.007']}
      />
      <mesh 
        rotation={[Math.PI / 2, 0, 0]} 
        geometry={nodes.Mesh003_1.geometry}
        position={[0, bounce, 0]}
        material={materials['Material.008']}
      />
      <mesh 
        rotation={[Math.PI / 2, 0, 0]}  
        geometry={nodes.Mesh003_2.geometry}
        position={[0, bounce, 0]}
        material={materials['blinn1']}
      />
    </group>
  );
}

useGLTF.preload('./lama3/lamaaa.gltf');

const LamaCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  const position = isMobile ? [0, -4.3, 0] : [0, -5.9, 0];

  return (
    <Canvas>
      <ambientLight intensity={0.6} />  {/* Ambient light for base illumination */}
      <hemisphereLight 
        skyColor={'white'} 
        groundColor={'#444444'} 
        intensity={0.8} 
        position={[0, 50, 0]} 
      />
      <directionalLight 
        position={[10, 10, 5]} 
        intensity={2} 
        castShadow 
      />
      <directionalLight 
        position={[-10, 10, 5]} 
        intensity={2} 
        castShadow 
      />
      <pointLight 
        position={[0, 1, 0]} 
        intensity={5} 
        distance={20} 
      /> {/* Point light to highlight the model */}
      <Model position={position} scale={isMobile ? 0.15 : 0.2} />
      <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        minAzimuthAngle={-Math.PI / 20} 
        maxAzimuthAngle={Math.PI / 20} 
      />
    </Canvas>
  );
}

export default LamaCanvas;
