import React, { useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF, useTexture } from '@react-three/drei'

export function Model({ rotationGroup = [0, 0, 0], rotationMesh = [Math.PI / 3.5, 0, 0], ...props }) {
  const { nodes } = useGLTF('./react/react.gltf')
  const texture = useTexture('./react/rect.png')

  // Add state for bounce
  const [bounce, setBounce] = useState(0)
  const [direction, setDirection] = useState(1)

  // Use useFrame to create a bouncing effect
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime()
    const bounceSpeed = 2
    const bounceHeight = 0.1
    setBounce(Math.sin(time * bounceSpeed) * bounceHeight)
  })

  return (
    <group {...props} dispose={null} rotation={rotationGroup}>
      <mesh 
        geometry={nodes.react_l.geometry} 
        rotation={rotationMesh}
        position={[0, bounce, 0]} // Update position with bounce
      >
        <meshStandardMaterial map={texture} />
      </mesh>
    </group>
  )
}

useGLTF.preload('./react/react.gltf')

const ReactCanvas = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)")

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches)

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches)
    }

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange)

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange)
    }
  }, [])

  return (
    <Canvas>
      {/* Add lighting to the scene */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} />

      {/* Add the model to the scene */}
      <Model scale={isMobile ? 2.0 : 3.01} />

      {/* Enable orbit controls for interactive viewing */}
      <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </Canvas>
  )
}

export default ReactCanvas
