
"use client"
import { useRef, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'

import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'

export function PingPongModel({ scale = 2.5 }) {
  const { scene, animations } = useGLTF('./object.gltf')
  const modelRef = useRef(null)
  const mixerRef = useRef<THREE.AnimationMixer | null>(null)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const actionRef = useRef<any>(null)

  useEffect(() => {
    // Center the model
    if (scene) {
      // Create a bounding box to get the center and dimensions
      const boundingBox = new THREE.Box3().setFromObject(scene)
      const center = new THREE.Vector3()
      boundingBox.getCenter(center)
      
      // Center the model by positioning it opposite to its center
      scene.position.x = -center.x
      scene.position.y = -center.y
      scene.position.z = -center.z
      
      // Create mixer after scene is loaded
      mixerRef.current = new THREE.AnimationMixer(scene)
      
      // Set up animations if they exist
      if (animations && animations.length > 0) {
        const clip = animations[0]
        const action = mixerRef.current.clipAction(clip)
        action.setLoop(THREE.LoopPingPong, Infinity)
        action.play()
        actionRef.current = action
      } else {
        console.warn("No animations found in the GLTF file")
      }
    }
  }, [scene, animations])

  useFrame((_, delta) => {
    if (mixerRef.current) {
      mixerRef.current.update(delta)
    }
  })

  return (
    <group ref={modelRef} scale={scale}>
      {scene && <primitive object={scene} />}
    </group>
  )
}