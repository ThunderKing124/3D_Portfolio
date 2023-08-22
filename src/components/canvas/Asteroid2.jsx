import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Asteroid = ({ isMobile }) => {
  const asteroid = useGLTF("./keshav.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={4} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      {/* <ambientLight intensity={0.5} /> */}
      {/* <pointLight intensity={10} /> */}
      <primitive 
        object={asteroid.scene}
        scale={isMobile ? 1.5 : 2}
        position={isMobile ? [0, -1.8, -0] : [0, -1.5, 0]}
        rotation={[1.57,0, 5.04]}
        
      />
    </mesh>
  );
};

const Asteroid2Canvas = () => {
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
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          // autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          // minAzimuthAngle={0 }
          // maxAzimuthAngle={0}

        />
        <Asteroid isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default Asteroid2Canvas;