'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Character from './Character'

interface SceneProps {
  progress: number
  isComplete: boolean
}

export default function Scene({ progress, isComplete }: SceneProps) {
  return (
    <Canvas camera={{ position: [0, 1, 4], fov: 45 }} gl={{ preserveDrawingBuffer: true }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      <pointLight position={[-5, 3, -5]} intensity={0.3} />
      <Character progress={progress} isComplete={isComplete} />
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  )
}
