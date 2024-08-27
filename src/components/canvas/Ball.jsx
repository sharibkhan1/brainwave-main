import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Preload, OrbitControls, useGLTF, MeshTransmissionMaterial, Environment } from '@react-three/drei';
import { useControls } from 'leva';

const Model = (props) => {
  const { nodes } = useGLTF('./ball/ball.gltf');
  const ref = React.useRef();

  // Animation using useFrame
  useFrame((state) => {
    if (ref.current) {
      const { pointer } = state;

      // Calculate tilt based on mouse position
      const tiltX = pointer.y * 0.5; // Adjust the multiplier for the desired tilt intensity on the X-axis
      const tiltY = -pointer.x * 0.5; // Adjust the multiplier for the desired tilt intensity on the Y-axis

      // Apply tilt to the model's rotation
      ref.current.rotation.x = tiltX;
      ref.current.rotation.y = tiltY;

      // Optional: You can still have the model rotate over time if you want
      const elapsedTime = state.clock.getElapsedTime();
      ref.current.rotation.z = elapsedTime * 0.1; // Rotate around Z axis

      const amplitude = 10; // Maximum distance the model moves up and down
      const frequency = 2; // Speed of oscillation
      ref.current.position.y = Math.sin(elapsedTime * frequency) * amplitude;
    }
  });

  // Leva controls for material properties
  const materialProps = useControls({
    thickness: { value: 0.2, min: 0, max: 3, step: 0.05 },
    roughness: { value: 0, min: 0, max: 1, step: 0.1 },
    chromaticAberration: { value: 0.2, min: 0, max: 1 },
    transmission: { value: 1, min: 0, max: 1, step: 0.1 },
    ior: { value: 1.2, min: 1, max: 2.33, step: 0.1 },
    color: '#d8323c',
    backside: false,
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        ref={ref}
        geometry={nodes.polySurface14.geometry}
        scale={17.5}
      >
        <MeshTransmissionMaterial {...materialProps} />
      </mesh>
    </group>
  );
};

const BillboardText = ({ camera }) => {
  const textRef = React.useRef();

  // Make the text always face the camera
  useFrame(() => {
    if (textRef.current && camera) {
      textRef.current.lookAt(camera.position);
    }
  });

  return (
    <Text
      ref={textRef}
      position={[0, 0, -10]} // Position text directly behind the model
      fontSize={3} // Adjust font size relative to the model scale
      rotation={[0, 0, 0]} // Ensure text is facing forward
      scale={[1, 1, 1]} // Adjust scale if needed
      
    >
      EXEDEV
    </Text>
  );
};

useGLTF.preload('./ball/ball.gltf');

const ModelCanvas = () => {
  const [isMobile, setIsMobile] = React.useState(false);

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

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
      <Canvas
        camera={{ position: [-5, 3, 6], fov: 50, near: 0.1, far: 200 }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight
          position={[0, 0, 2]}
          intensity={10.5}
        />
        <Environment preset="city" />
        <Model scale={isMobile ? 0.02 : 0.03} />
        <BillboardText camera={null} /> {/* Pass camera to BillboardText */}
        <Preload all />
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          minAzimuthAngle={-Math.PI / 15}  // Limit rotation to 45 degrees left
          maxAzimuthAngle={Math.PI / 15} 
        />
      </Canvas>
    </div>
  );
};

export default ModelCanvas;
