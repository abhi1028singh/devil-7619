
import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const skills = [
  { name: "JAVA", color: "#f89820" },
  { name: "AI", color: "#3498db" },
  { name: "EXCEL", color: "#2ecc71" },
  { name: "FULL STACK", color: "#e74c3c" },
  { name: "UI/UX", color: "#9b59b6" },
  { name: "GRAPHIC", color: "#f1c40f" }
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

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh
      ref={meshRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.1 : 1}
    >
      <boxGeometry args={[2.5, 2.5, 2.5]} />
      <meshStandardMaterial
        color="black"
        metalness={0.7}
        roughness={0.2}
        transparent
        opacity={0.8}
      />
      
      {skills.map((skill, index) => {
        const positions: Array<[number, number, number]> = [
          [0, 0, 1.26],
          [0, 0, -1.26],
          [1.26, 0, 0],
          [-1.26, 0, 0],
          [0, 1.26, 0],
          [0, -1.26, 0]
        ];
        
        const rotations: Array<[number, number, number]> = [
          [0, 0, 0],
          [0, Math.PI, 0],
          [0, Math.PI / 2, 0],
          [0, -Math.PI / 2, 0],
          [-Math.PI / 2, 0, 0],
          [Math.PI / 2, 0, 0]
        ];

        return (
          <TextPlane
            key={index}
            text={skill.name}
            position={positions[index]}
            rotation={rotations[index]}
            color={skill.color}
          />
        );
      })}
    </mesh>
  );
}
