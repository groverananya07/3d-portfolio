import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Center } from '@react-three/drei';
import { useMediaQuery } from 'react-responsive';
import { Room } from './Room';
import HeroLights from './HeroLights';
import Particles from './Particles'; // <-- PARTICLES RESTORED!

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
          
          {/* Renders your floating particles */}
          <Particles count={200} /> 
          
          <group
            scale={isMobile ? 0.7 : isTablet ? 0.9 : 1.1} 
            position={[0, -0.5, 0]} // Keeps it perfectly centered!
            rotation={[0, -Math.PI / 4, 0]} 
          >
            <Center>
               <Room />
            </Center>
          </group>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default HeroExperience;