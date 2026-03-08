import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Center } from '@react-three/drei';
import { useMediaQuery } from 'react-responsive';
import { Room } from './Room';
import HeroLights from './HeroLights';
import Particles from './Particles'; 

// 🌟 NEW: The Parallax Group Wrapper
const ParallaxGroup = ({ children, isMobile, isTablet }) => {
  const groupRef = useRef();

  useFrame((state) => {
    // Only apply parallax on desktop (mobile users touch, they don't hover)
    if (!isMobile && !isTablet && groupRef.current) {
      const targetX = state.pointer.y * 0.1;
      const targetY = -Math.PI / 4 + state.pointer.x * 0.2;
      
      // Smoothly interpolate the rotation towards the mouse position
      groupRef.current.rotation.x += (targetX - groupRef.current.rotation.x) * 0.05;
      groupRef.current.rotation.y += (targetY - groupRef.current.rotation.y) * 0.05;
    }
  });

  return (
    <group
      ref={groupRef}
      scale={isMobile ? 1.5 : isTablet ? 0.9 : 1.1}
      position={[0, -0.5, 0]}
      rotation={[0, -Math.PI / 4, 0]} // Initial default rotation
    >
      <Center>{children}</Center>
    </group>
  );
};

const HeroExperience = () => {
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <div className="w-full h-full bg-transparent">
      <Canvas 
        shadows 
        camera={{ position: [0, 2, 20], fov: 45 }}
        dpr={[1, 2]}
        gl={{ alpha: true, antialias: true }} 
      >
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          maxDistance={25}
          minDistance={5}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI / 2}
          makeDefault 
        />

        <Suspense fallback={null}>
          <HeroLights />
          <Particles count={200} /> 
          
          {/* Replaced <group> with our new <ParallaxGroup> */}
          <ParallaxGroup isMobile={isMobile} isTablet={isTablet}>
             <Room />
          </ParallaxGroup>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default HeroExperience;
