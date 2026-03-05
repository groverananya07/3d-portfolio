import React, { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls, Environment, useGLTF } from "@react-three/drei";
import * as THREE from "three"; // Required for creating new materials!

// Sub-component to load the model and apply material changes
const Model = ({ modelPath, scale, rotation, modelName }) => {
  const { scene } = useGLTF(modelPath);

  useEffect(() => {
    // If it's the Interactive Developer model, change the specific mesh color
    if (modelName === 'Interactive Developer' && scene) {
      scene.traverse((child) => {
        if (child.isMesh && child.name === 'Object_5') {
          child.material = new THREE.MeshStandardMaterial({ color: 'white' });
        }
      });
    }
  }, [scene, modelName]); // Re-run if the scene or name changes

  return (
    <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
      <group scale={scale} rotation={rotation}>
        <primitive object={scene} />
      </group>
    </Float>
  );
};

const TechIcon = ({ model }) => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <spotLight
        position={[10, 15, 10]}
        angle={0.3}
        penumbra={1}
        intensity={2}
      />

      <Environment preset="city" />

      <Suspense fallback={null}>
        {/* Pass down the model properties, including the name for the useEffect */}
        <Model 
          modelPath={model.modelPath} 
          scale={model.scale} 
          rotation={model.rotation} 
          modelName={model.name} 
        />
      </Suspense>

      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default TechIcon;