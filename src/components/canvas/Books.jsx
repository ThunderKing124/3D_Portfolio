import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Books = ({ isMobile }) => {
  const books = useGLTF("./books/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={2} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={10}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={10} />
      <primitive
        object={books.scene}
        dispose={null}
        scale={isMobile ? 150 : 150}
        position={isMobile ? [0,-80,0] : [0,-80,0]}
        rotation={[0,0,0]}
        
      />
    </mesh>
  );
};

const BooksCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [60, 60, 60], fov: 500 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      {/* <directionalLight position={[10, 10, 5]} intensity={2} />
      <directionalLight position={[-10, -10, -5]} intensity={1} />
      <hemisphereLight intensity={2} groundColor='black' />
      <spotLight
        position={[-10, -10, -5]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      {/* <spotLight
        position={[10, 10, 5]}
        angle={0.12}
        penumbra={1}
        intensity={2}
        castShadow
        shadow-mapSize={1024}
      /> */}
      {/* <pointLight  position={[10, 10, 5]} intensity={2} /> */} 
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          // autoRotate
          // autoRotateSpeed={3}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          minAzimuthAngle={0}
          maxAzimuthAngle={0}
        />
        <Books isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BooksCanvas;