'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useTexture, Billboard } from '@react-three/drei'
import * as THREE from 'three'

const RED = new THREE.Color('#E53935')
const BLUE = new THREE.Color('#1565C0')

interface CharacterProps {
  progress: number
  isComplete: boolean
}

export default function Character({ progress, isComplete }: CharacterProps) {
  const groupRef = useRef<THREE.Group>(null)
  const jacketRef = useRef<THREE.MeshStandardMaterial>(null)
  const texture = useTexture('/lucas.jpg')
  const spinRef = useRef(0)

  const targetRotationY = isComplete ? Math.PI * 2 : progress * Math.PI
  const targetTilt = progress >= 0.5 ? 0.1 : 0

  useFrame((_, delta) => {
    if (!groupRef.current || !jacketRef.current) return

    if (isComplete) {
      spinRef.current += delta * 3
      groupRef.current.rotation.y = spinRef.current
    } else {
      spinRef.current = 0
      groupRef.current.rotation.y += (targetRotationY - groupRef.current.rotation.y) * delta * 3
    }

    groupRef.current.rotation.z += (targetTilt - groupRef.current.rotation.z) * delta * 3

    const color = RED.clone().lerp(BLUE, progress)
    jacketRef.current.color.copy(color)
  })

  return (
    <group ref={groupRef}>
      {/* Head — flat circular photo billboard, always faces camera */}
      <Billboard position={[0, 1.65, 0]} follow={true}>
        <mesh>
          <circleGeometry args={[0.35, 64]} />
          <meshBasicMaterial map={texture} side={THREE.DoubleSide} />
        </mesh>
      </Billboard>

      {/* Neck */}
      <mesh position={[0, 1.25, 0]}>
        <cylinderGeometry args={[0.08, 0.08, 0.15]} />
        <meshStandardMaterial color="#f5c6a0" />
      </mesh>

      {/* Jacket/Torso — wider, more natural */}
      <mesh position={[0, 0.85, 0]}>
        <cylinderGeometry args={[0.28, 0.32, 0.9, 12]} />
        <meshStandardMaterial ref={jacketRef} color="#E53935" />
      </mesh>

      {/* Shoulders */}
      <mesh position={[0, 1.15, 0]}>
        <boxGeometry args={[0.7, 0.15, 0.3]} />
        <meshStandardMaterial color="#E53935" />
      </mesh>

      {/* Left Arm */}
      <mesh position={[-0.45, 0.8, 0]} rotation={[0, 0, 0.25]}>
        <cylinderGeometry args={[0.06, 0.07, 0.7, 8]} />
        <meshStandardMaterial color="#f5c6a0" />
      </mesh>
      {/* Right Arm */}
      <mesh position={[0.45, 0.8, 0]} rotation={[0, 0, -0.25]}>
        <cylinderGeometry args={[0.06, 0.07, 0.7, 8]} />
        <meshStandardMaterial color="#f5c6a0" />
      </mesh>

      {/* Left Leg */}
      <mesh position={[-0.13, 0.05, 0]}>
        <cylinderGeometry args={[0.09, 0.08, 0.7, 8]} />
        <meshStandardMaterial color="#37474F" />
      </mesh>
      {/* Right Leg */}
      <mesh position={[0.13, 0.05, 0]}>
        <cylinderGeometry args={[0.09, 0.08, 0.7, 8]} />
        <meshStandardMaterial color="#37474F" />
      </mesh>

      {/* Shoes */}
      <mesh position={[-0.13, -0.32, 0.04]}>
        <boxGeometry args={[0.12, 0.06, 0.2]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>
      <mesh position={[0.13, -0.32, 0.04]}>
        <boxGeometry args={[0.12, 0.06, 0.2]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>
    </group>
  )
}
