import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import * as THREE from 'three';

const RotatingBone = () => {
  const geometry = new THREE.TorusKnotGeometry(1, 0.3, 100, 16);
  const material = new THREE.MeshStandardMaterial({
    color: '#ffcc99',
    metalness: 0.3,
    roughness: 0.5,
  });

  return (
    <mesh geometry={geometry} material={material} rotation={[0.5, 0.5, 0]} />
  );
};

const ThreeDSection = () => {
  return (
    <div className="w-full h-80 md:h-[500px] bg-gradient-to-r from-pink-200 to-pink-100 rounded-lg shadow-lg overflow-hidden">
      <Canvas camera={{ position: [2, 2, 3], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 2, 5]} intensity={1.2} />
        <Suspense fallback={null}>
          <RotatingBone />
          <Environment preset="sunset" />
        </Suspense>
        <OrbitControls autoRotate enableZoom={false} />
      </Canvas>

      {/* Overlay Button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <button
          onClick={() => alert("Grab Offer!")}
          className="bg-green-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-pink-700 transition-all"
        >
          Access System
        </button>
      </div>
    </div>
  );
};

export default ThreeDSection;
