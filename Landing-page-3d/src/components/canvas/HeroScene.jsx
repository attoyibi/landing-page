import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, OrbitControls, Stars } from '@react-three/drei';

const AnimatedSphere = () => {
    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <Sphere args={[1, 100, 200]} scale={2}>
                <MeshDistortMaterial
                    color="#6366f1" // Indigo 500
                    attach="material"
                    distort={0.4}
                    speed={2}
                    roughness={0.2}
                    metalness={0.8}
                />
            </Sphere>
        </Float>
    );
};

const HeroScene = () => {
    return (
        <Canvas className="h-full w-full" camera={{ position: [0, 0, 5], fov: 75 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
            <pointLight position={[-10, -5, -5]} intensity={10} color="#a855f7" /> {/* Purple accent */}

            <AnimatedSphere />

            {/* Starfield background for space vibe */}
            <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />

            {/* Subtle interaction */}
            <OrbitControls
                enableZoom={false}
                enablePan={false}
                enableRotate={true}
                autoRotate={true}
                autoRotateSpeed={0.5}
                maxPolarAngle={Math.PI / 1.5}
                minPolarAngle={Math.PI / 2.5}
            />
        </Canvas>
    );
};

export default HeroScene;
