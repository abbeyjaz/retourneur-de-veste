'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'
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
      {/* Head with Lucas photo */}
      <mesh position={[0, 1.6, 0]}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial map={texture} />
      </mesh>
      {/* Jacket/Torso */}
      <mesh position={[0, 0.9, 0]}>
        <cylinderGeometry args={[0.25, 0.35, 0.9, 8]} />
        <meshStandardMaterial ref={jacketRef} color="#E53935" />
      </mesh>
      {/* Left Arm */}
      <mesh position={[-0.45, 0.9, 0]} rotation={[0, 0, 0.4]}>
        <cylinderGeometry args={[0.07, 0.07, 0.7]} />
        <meshStandardMaterial color="#f5c6a0" />
      </mesh>
      {/* Right Arm */}
      <mesh position={[0.45, 0.9, 0]} rotation={[0, 0, -0.4]}>
        <cylinderGeometry args={[0.07, 0.07, 0.7]} />
        <meshStandardMaterial color="#f5c6a0" />
      </mesh>
      {/* Left Leg */}
      <mesh position={[-0.15, 0.1, 0]}>
        <cylinderGeometry args={[0.09, 0.09, 0.7]} />
        <meshStandardMaterial color="#37474F" />
      </mesh>
      {/* Right Leg */}
      <mesh position={[0.15, 0.1, 0]}>
        <cylinderGeometry args={[0.09, 0.09, 0.7]} />
        <meshStandardMaterial color="#37474F" />
      </mesh>
    </group>
  )
}
