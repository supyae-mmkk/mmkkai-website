'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

export default function AdvancedCube() {
  const pointsRef = useRef<THREE.Points>(null)
  const groupRef = useRef<THREE.Group>(null)
  const edgesRef = useRef<THREE.LineSegments>(null)
  const gridLinesRef = useRef<THREE.LineSegments>(null)
  const planesRef = useRef<THREE.Group>(null)
  const timeRef = useRef(0)
  const animationStartTime = useRef(0)

  // Cube vertices (8 corners)
  const cubeSize = 2.8
  const vertices = useMemo(() => {
    const half = cubeSize / 2
    return [
      [-half, -half, -half], // 0
      [half, -half, -half],  // 1
      [half, half, -half],    // 2
      [-half, half, -half],  // 3
      [-half, -half, half],   // 4
      [half, -half, half],    // 5
      [half, half, half],     // 6
      [-half, half, half],    // 7
    ]
  }, [])

  // Cube edges (12 edges)
  const edges = useMemo(() => {
    return [
      [0, 1], [1, 2], [2, 3], [3, 0], // front face
      [4, 5], [5, 6], [6, 7], [7, 4], // back face
      [0, 4], [1, 5], [2, 6], [3, 7], // connecting edges
    ]
  }, [])

  // Internal grid lines (vertical and horizontal)
  const gridLines = useMemo(() => {
    const half = cubeSize / 2
    const lines: number[] = []
    
    // Vertical lines (through cube center)
    lines.push(-half, -half, 0, -half, half, 0) // front vertical
    lines.push(half, -half, 0, half, half, 0) // back vertical
    lines.push(0, -half, -half, 0, half, -half) // left vertical
    lines.push(0, -half, half, 0, half, half) // right vertical
    
    // Horizontal lines (through cube center)
    lines.push(-half, 0, -half, half, 0, -half) // front horizontal
    lines.push(-half, 0, half, half, 0, half) // back horizontal
    lines.push(-half, -half, 0, half, -half, 0) // bottom horizontal
    lines.push(-half, half, 0, half, half, 0) // top horizontal
    
    return new Float32Array(lines)
  }, [])

  // Internal horizontal planes (2 faint planes)
  const planes = useMemo(() => {
    const half = cubeSize / 2
    const planeSize = cubeSize * 0.8
    
    // Plane 1: middle horizontal
    const plane1 = [
      -planeSize/2, 0, -planeSize/2,
      planeSize/2, 0, -planeSize/2,
      planeSize/2, 0, planeSize/2,
      -planeSize/2, 0, planeSize/2,
      -planeSize/2, 0, -planeSize/2, // close loop
    ]
    
    // Plane 2: slightly offset
    const offset = cubeSize * 0.15
    const plane2 = [
      -planeSize/2, offset, -planeSize/2,
      planeSize/2, offset, -planeSize/2,
      planeSize/2, offset, planeSize/2,
      -planeSize/2, offset, planeSize/2,
      -planeSize/2, offset, -planeSize/2, // close loop
    ]
    
    return { plane1: new Float32Array(plane1), plane2: new Float32Array(plane2) }
  }, [])

  // Edge geometry
  const edgeGeometry = useMemo(() => {
    const positions = new Float32Array(edges.length * 2 * 3)
    edges.forEach(([start, end], i) => {
      const v1 = vertices[start]
      const v2 = vertices[end]
      const index = i * 6
      positions[index] = v1[0]
      positions[index + 1] = v1[1]
      positions[index + 2] = v1[2]
      positions[index + 3] = v2[0]
      positions[index + 4] = v2[1]
      positions[index + 5] = v2[2]
    })
    return positions
  }, [edges, vertices])

  // Particle system: 150 particles
  const particleCount = 150
  const particles = useMemo(() => {
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)
    const targets = new Float32Array(particleCount)
    const velocities = new Float32Array(particleCount * 3)
    const locked = new Float32Array(particleCount)
    
    const colorMap = {
      0: [0, 200/255, 150/255], // neon green
      1: [0, 123/255, 255/255], // electric blue
      2: [1, 1, 1], // white
      3: [1, 1, 0.7], // subtle yellow
    }
    
    for (let i = 0; i < particleCount; i++) {
      // Start in random positions
      const angle = Math.random() * Math.PI * 2
      const radius = 3.5 + Math.random() * 4.5
      const height = (Math.random() - 0.5) * 6
      
      positions[i * 3] = Math.cos(angle) * radius
      positions[i * 3 + 1] = height
      positions[i * 3 + 2] = Math.sin(angle) * radius
      
      // Random velocities
      velocities[i * 3] = (Math.random() - 0.5) * 0.012
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.012
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.012
      
      // Assign color
      const rand = Math.random()
      let type = 0 // default green
      if (rand > 0.45 && rand < 0.7) type = 1 // blue
      else if (rand > 0.7 && rand < 0.9) type = 2 // white
      else if (rand > 0.9) type = 3 // yellow
      
      const color = colorMap[type as keyof typeof colorMap]
      colors[i * 3] = color[0]
      colors[i * 3 + 1] = color[1]
      colors[i * 3 + 2] = color[2]
      
      // Assign target (120 to vertices, 30 orbit)
      targets[i] = i < 120 ? Math.floor((i / 120) * 8) : -1
      locked[i] = 0
    }
    
    return { positions, colors, targets, velocities, locked }
  }, [])

  useFrame((state, delta) => {
    if (animationStartTime.current === 0) {
      animationStartTime.current = state.clock.elapsedTime
    }
    
    timeRef.current = state.clock.elapsedTime - animationStartTime.current
    
    const phase1End = 3 // Floating
    const phase2End = 7 // Formation
    const phase3End = 10 // Complete
    const loopTime = 18 // Loop back
    
    if (timeRef.current > loopTime) {
      animationStartTime.current = state.clock.elapsedTime
      timeRef.current = 0
    }

    if (pointsRef.current) {
      const positions = pointsRef.current.geometry.attributes.position.array as Float32Array
      const geometry = pointsRef.current.geometry
      const { targets, velocities, locked } = particles
      
      if (!geometry.attributes.color) {
        const colorAttribute = new THREE.BufferAttribute(particles.colors, 3)
        geometry.setAttribute('color', colorAttribute)
      }
      
      for (let i = 0; i < particleCount; i++) {
        const index = i * 3
        const targetIndex = targets[i]
        
        if (targetIndex >= 0) {
          const target = vertices[targetIndex]
          const distance = Math.sqrt(
            Math.pow(positions[index] - target[0], 2) +
            Math.pow(positions[index + 1] - target[1], 2) +
            Math.pow(positions[index + 2] - target[2], 2)
          )
          
          if (timeRef.current < phase1End) {
            // Phase 1: Float randomly
            positions[index] += velocities[index]
            positions[index + 1] += velocities[index + 1]
            positions[index + 2] += velocities[index + 2]
            
            if (Math.abs(positions[index]) > 7) velocities[index] *= -1
            if (Math.abs(positions[index + 1]) > 5) velocities[index + 1] *= -1
            if (Math.abs(positions[index + 2]) > 7) velocities[index + 2] *= -1
          } else if (timeRef.current < phase2End) {
            // Phase 2: Move toward nodes
            const phaseProgress = (timeRef.current - phase1End) / (phase2End - phase1End)
            const speed = 0.015 + phaseProgress * 0.035
            
            positions[index] = THREE.MathUtils.lerp(positions[index], target[0], speed)
            positions[index + 1] = THREE.MathUtils.lerp(positions[index + 1], target[1], speed)
            positions[index + 2] = THREE.MathUtils.lerp(positions[index + 2], target[2], speed)
          } else if (timeRef.current < phase3End) {
            // Phase 3: Lock to nodes
            if (distance < 0.08 && locked[i] === 0) {
              positions[index] = target[0]
              positions[index + 1] = target[1]
              positions[index + 2] = target[2]
              locked[i] = 1
            } else if (locked[i] === 0) {
              positions[index] = THREE.MathUtils.lerp(positions[index], target[0], 0.12)
              positions[index + 1] = THREE.MathUtils.lerp(positions[index + 1], target[1], 0.12)
              positions[index + 2] = THREE.MathUtils.lerp(positions[index + 2], target[2], 0.12)
            }
          } else {
            // Phase 4: Locked particles pulse, others orbit
            if (locked[i] === 1) {
              const pulse = Math.sin(timeRef.current * 1.8) * 0.04
              positions[index] = target[0] + pulse
              positions[index + 1] = target[1] + pulse
              positions[index + 2] = target[2] + pulse
            } else {
              const orbitRadius = 4
              const orbitSpeed = 0.18
              const angle = (timeRef.current - phase3End) * orbitSpeed + i * 0.15
              positions[index] = Math.cos(angle) * orbitRadius
              positions[index + 1] = Math.sin((timeRef.current - phase3End) * 0.08 + i) * 0.35
              positions[index + 2] = Math.sin(angle) * orbitRadius
            }
          }
        } else {
          // Orbiting particles
          const orbitRadius = 4.5
          const orbitSpeed = 0.12
          const angle = timeRef.current * orbitSpeed + i * 0.25
          positions[index] = Math.cos(angle) * orbitRadius
          positions[index + 1] = Math.sin(timeRef.current * 0.06 + i) * 0.4
          positions[index + 2] = Math.sin(angle) * orbitRadius
        }
      }

      pointsRef.current.geometry.attributes.position.needsUpdate = true
    }

    if (groupRef.current) {
      // Subtle breathing animation
      const breath = Math.sin(timeRef.current * 0.5) * 0.02
      groupRef.current.scale.set(1 + breath, 1 + breath, 1 + breath)
      groupRef.current.rotation.y += delta * 0.04
    }

    if (edgesRef.current) {
      const material = edgesRef.current.material as THREE.LineBasicMaterial
      if (material) {
        if (timeRef.current < phase2End) {
          material.opacity = 0
        } else if (timeRef.current < phase3End) {
          const drawProgress = (timeRef.current - phase2End) / (phase3End - phase2End)
          material.opacity = drawProgress * 0.6
        } else {
          // Pulse with gradient effect
          const pulse = Math.sin(timeRef.current * 1.2) * 0.2
          material.opacity = 0.6 + pulse
        }
      }
    }

    if (gridLinesRef.current) {
      const material = gridLinesRef.current.material as THREE.LineBasicMaterial
      if (material && timeRef.current > phase3End) {
        const pulse = Math.sin(timeRef.current * 0.8) * 0.1
        material.opacity = 0.15 + pulse
      } else if (material) {
        material.opacity = 0
      }
    }

    if (planesRef.current) {
      planesRef.current.children.forEach((plane) => {
        const material = (plane as THREE.LineLoop).material as THREE.LineBasicMaterial
        if (material && timeRef.current > phase3End) {
          const pulse = Math.sin(timeRef.current * 0.6) * 0.08
          material.opacity = 0.08 + pulse
        } else if (material) {
          material.opacity = 0
        }
      })
    }
  })

  return (
    <group ref={groupRef}>
      {/* Floating particles */}
      <Points ref={pointsRef} positions={particles.positions} stride={3}>
        <PointMaterial
          transparent
          vertexColors
          size={0.07}
          sizeAttenuation={true}
          opacity={0.95}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </Points>

      {/* Cube edges with gradient glow */}
      <lineSegments ref={edgesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={edgeGeometry.length / 3}
            array={edgeGeometry}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#00C896"
          transparent
          opacity={0.5}
          linewidth={2}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>

      {/* Internal grid lines */}
      <lineSegments ref={gridLinesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={gridLines.length / 3}
            array={gridLines}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#00C896"
          transparent
          opacity={0.15}
          linewidth={1}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>

      {/* Internal horizontal planes */}
      <group ref={planesRef}>
        <lineLoop>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={planes.plane1.length / 3}
              array={planes.plane1}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial
            color="#00C896"
            transparent
            opacity={0.08}
            linewidth={1}
            blending={THREE.AdditiveBlending}
          />
        </lineLoop>
        <lineLoop>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={planes.plane2.length / 3}
              array={planes.plane2}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial
            color="#007BFF"
            transparent
            opacity={0.08}
            linewidth={1}
            blending={THREE.AdditiveBlending}
          />
        </lineLoop>
      </group>
    </group>
  )
}
