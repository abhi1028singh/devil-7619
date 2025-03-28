
import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Loader } from '@react-three/drei';
import { SkillsCube } from './SkillsCube';

export default function ThreeScene() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative w-60 h-60 md:w-72 md:h-72 rounded-xl overflow-hidden bg-black/20 backdrop-blur-sm border border-primary/20 shadow-xl">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        style={{ width: '100%', height: '100%' }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={1} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />
          <SkillsCube />
          <OrbitControls 
            enableZoom={false} 
            minPolarAngle={Math.PI / 3} 
            maxPolarAngle={Math.PI / 1.5} 
            autoRotate 
            autoRotateSpeed={1} 
          />
        </Suspense>
      </Canvas>
      
      {/* Overlay text */}
      <div className="absolute bottom-2 left-0 right-0 text-center text-xs text-white/70 pointer-events-none">
        Drag to explore
      </div>
      
      {/* Fallback loader */}
      <Loader containerStyles={{ background: 'transparent' }} />
    </div>
  );
}
