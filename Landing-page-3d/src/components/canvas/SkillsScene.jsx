import React, { useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { Text, Float, OrbitControls, Stars } from '@react-three/drei';

const SkillItem = ({ position, name }) => {
    return (
        <Float floatIntensity={2} speed={2}>
            <group position={position}>
                <Text
                    color="#e0e7ff"
                    anchorX="center"
                    anchorY="middle"
                    fontSize={0.4}
                    font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff"
                    maxWidth={10}
                    textAlign="center"
                >
                    {name}
                    <meshStandardMaterial emissive="#4f46e5" emissiveIntensity={0.5} toneMapped={false} />
                </Text>
            </group>
        </Float>
    );
};

import { SKILLS_LIST } from '../../constants';

const SkillsScene = () => {
    // Randomize simple positions on a sphere surface or just random cloud
    const skills = SKILLS_LIST;

    const positions = useMemo(() => {
        return skills.map((_, i) => {
            const phi = Math.acos(-1 + (2 * i) / skills.length);
            const theta = Math.sqrt(skills.length * Math.PI) * phi;
            const r = 4; // Radius
            return [
                r * Math.cos(theta) * Math.sin(phi),
                r * Math.sin(theta) * Math.sin(phi),
                r * Math.cos(phi)
            ];
        });
    }, [skills]);

    return (
        <Canvas camera={{ position: [0, 0, 7], fov: 60 }} className="w-full h-full">
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />

            <group rotation={[0, 0, Math.PI / 4]}>
                {skills.map((skill, i) => (
                    <SkillItem key={i} name={skill} position={positions[i]} />
                ))}
            </group>

            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
        </Canvas>
    );
};

export default SkillsScene;
