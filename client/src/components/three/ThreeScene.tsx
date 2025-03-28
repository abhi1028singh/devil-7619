
import { useEffect, useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { SkillsCube } from './SkillsCube';
import { motion } from 'framer-motion';

export default function ThreeScene() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative w-60 h-60 md:w-72 md:h-72">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full h-full rounded-xl overflow-hidden bg-black/20 backdrop-blur-sm border border-primary/20 shadow-xl"
      >
        <Canvas
          camera={{ position: [0, 0, 5], fov: 45 }}
          style={{ width: '100%', height: '100%' }}
          dpr={[1, 2]}
        >
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <SkillsCube />
            <OrbitControls enableZoom={false} />
          </Suspense>
        </Canvas>
      </motion.div>
    </div>
  );
}
