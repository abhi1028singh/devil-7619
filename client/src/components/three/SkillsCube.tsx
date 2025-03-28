import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';

const skills = [
  { text: 'JAVA', position: [0, 0, 1.3], rotation: [0, 0, 0], color: '#f89820' },
  { text: 'AI', position: [0, 0, -1.3], rotation: [0, Math.PI, 0], color: '#3498db' },
  { text: 'EXCEL', position: [1.3, 0, 0], rotation: [0, Math.PI / 2, 0], color: '#2ecc71' },
  { text: 'FULL STACK', position: [-1.3, 0, 0], rotation: [0, -Math.PI / 2, 0], color: '#e74c3c' },
  { text: 'UI/UX', position: [0, 1.3, 0], rotation: [-Math.PI / 2, 0, 0], color: '#9b59b6' },
  { text: 'GRAPHIC', position: [0, -1.3, 0], rotation: [Math.PI / 2, 0, 0], color: '#f1c40f' }
];

function TextPlane({ text, position, rotation, color }: {
  text: string;
  position: [number, number, number];
  rotation: [number, number, number];
  color: string;
}) {
  return (
    <mesh position={position} rotation={rotation}>
      <planeGeometry args={[1.8, 1.8]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.5}
        metalness={0.8}
        roughness={0.2}
      />
    </mesh>
  );
}

export function SkillsCube() {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  useFrame((state) => {
    if (!meshRef.current) return;

    const speed = hovered ? 0.02 : clicked ? 0.005 : 0.01;
    meshRef.current.rotation.x += speed;
    meshRef.current.rotation.y += speed * 1.5;
  });

  return (
    <mesh
      ref={meshRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => setClicked(!clicked)}
      scale={clicked ? 1.2 : hovered ? 1.1 : 1}
    >
      <boxGeometry args={[2.5, 2.5, 2.5]} />
      <meshStandardMaterial
        color="black"
        metalness={0.7}
        roughness={0.2}
        transparent
        opacity={0.8}
      />

      {skills.map((skill, index) => (
        <TextPlane
          key={index}
          text={skill.text}
          position={skill.position}
          rotation={skill.rotation}
          color={skill.color}
        />
      ))}
    </mesh>
  );
}

// Container component for the 3D scene with Framer Motion wrapper
export default function SkillsCubeContainer() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="w-60 h-60 md:w-72 md:h-72 relative"
      style={{ margin: 'auto' }}
    >
      <div className="w-full h-full rounded-xl overflow-hidden bg-black/20 backdrop-blur-sm border border-primary/20 shadow-xl">
        <Canvas>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <SkillsCube />
        </Canvas>
      </div>
    </motion.div>
  );
}