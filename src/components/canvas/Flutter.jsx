import React, { useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF, useTexture } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('./flutter/flutter.gltf')

  // Load textures if needed
  const texture = useTexture('./flutter/flutter.png'); // Update with the correct path if you have textures

  const [bounce, setBounce] = useState(0)

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime()
    const bounceSpeed = 2
    const bounceHeight = 0.1
    setBounce(Math.sin(time * bounceSpeed) * bounceHeight)
  })

  return (
    <group {...props} dispose={null}>
      <mesh 
        geometry={nodes.flutter.geometry} 
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, bounce, 0]}
        material={materials.initialShadingGroup}
      >
        {/* Apply the texture to the mesh material if required */}
        <meshStandardMaterial map={texture} />
      </mesh>
    </group>
  )
}

useGLTF.preload('./flutter/flutter.gltf')

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
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

  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} />
      <Model scale={isMobile ? 2.0 : 3.01} />
      <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </Canvas>
  )
}

export default ComputersCanvas
