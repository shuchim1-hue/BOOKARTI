"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { PerspectiveCamera, Line } from "@react-three/drei"
import * as THREE from "three"

const COUNTRIES = [
  { name: "India", lat: 20.5937, lng: 78.9629, color: "#d4a843" },
  { name: "Australia", lat: -25.2744, lng: 133.7751, color: "#059669" },
  { name: "Singapore", lat: 1.3521, lng: 103.8198, color: "#d4a843" },
  { name: "UAE", lat: 23.4241, lng: 53.8478, color: "#059669" },
  { name: "UK", lat: 55.3781, lng: -3.4360, color: "#d4a843" },
  { name: "USA", lat: 37.0902, lng: -95.7129, color: "#059669" },
]

function latLngToVec(lat: number, lng: number, r: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180)
  const theta = (lng + 180) * (Math.PI / 180)
  return new THREE.Vector3(-r * Math.sin(phi) * Math.cos(theta), r * Math.cos(phi), r * Math.sin(phi) * Math.sin(theta))
}

function GlobeContent() {
  const groupRef = useRef<THREE.Group>(null!)

  const particleGeo = useMemo(() => {
    const geo = new THREE.BufferGeometry()
    const count = 6000
    const pos = new Float32Array(count * 3)
    const col = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const r = 2.5 + (Math.random() - 0.5) * 0.05
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = r * Math.cos(phi)
      pos[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta)
      const isLand = Math.random() > 0.65
      if (isLand) {
        col[i * 3] = 0.1 + Math.random() * 0.15
        col[i * 3 + 1] = 0.35 + Math.random() * 0.2
        col[i * 3 + 2] = 0.1 + Math.random() * 0.1
      } else {
        col[i * 3] = 0.01
        col[i * 3 + 1] = 0.03
        col[i * 3 + 2] = 0.12
      }
    }
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3))
    geo.setAttribute("color", new THREE.BufferAttribute(col, 3))
    return geo
  }, [])

  const countryDots = useMemo(() => {
    return COUNTRIES.map((c) => ({
      pos: latLngToVec(c.lat, c.lng, 2.55),
      color: new THREE.Color(c.color),
    }))
  }, [])

  const arcs = useMemo(() => {
    const result: { start: THREE.Vector3; end: THREE.Vector3; mid: THREE.Vector3; color: THREE.Color }[] = []
    for (let i = 0; i < COUNTRIES.length; i++) {
      for (let j = i + 1; j < COUNTRIES.length; j++) {
        if (Math.random() > 0.4) continue
        const start = latLngToVec(COUNTRIES[i].lat, COUNTRIES[i].lng, 2.55)
        const end = latLngToVec(COUNTRIES[j].lat, COUNTRIES[j].lng, 2.55)
        const mid = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5)
        mid.normalize().multiplyScalar(2.55 + start.distanceTo(end) * 0.3)
        result.push({ start, end, mid, color: new THREE.Color(COUNTRIES[i].color) })
      }
    }
    return result
  }, [])

  const floatParticles = useMemo(() => {
    const geo = new THREE.BufferGeometry()
    const count = 200
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const r = 3.5 + Math.random() * 2
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = r * Math.cos(phi)
      pos[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta)
    }
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3))
    return geo
  }, [])

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.08
    }
  })

  return (
    <group ref={groupRef}>
      <points geometry={particleGeo}>
        <pointsMaterial size={0.025} vertexColors transparent opacity={0.9} sizeAttenuation depthWrite={false} />
      </points>

      {countryDots.map((dot, i) => (
        <group key={i} position={dot.pos}>
          <mesh>
            <sphereGeometry args={[0.045, 16, 16]} />
            <meshBasicMaterial color={dot.color} />
          </mesh>
          <mesh>
            <ringGeometry args={[0.06, 0.1, 32]} />
            <meshBasicMaterial color={dot.color} transparent opacity={0.4} side={THREE.DoubleSide} />
          </mesh>
        </group>
      ))}

      {arcs.map((arc, i) => {
        const curve = new THREE.QuadraticBezierCurve3(arc.start, arc.mid, arc.end)
        const points = curve.getPoints(30)
        return (
          <Line key={i} points={points} color={arc.color} opacity={0.15} transparent lineWidth={1} />
        )
      })}

      <mesh>
        <sphereGeometry args={[2.7, 64, 64]} />
        <meshBasicMaterial color="#d4a843" transparent opacity={0.03} side={THREE.BackSide} />
      </mesh>

      <points geometry={floatParticles}>
        <pointsMaterial size={0.008} color="#d4a843" transparent opacity={0.3} sizeAttenuation depthWrite={false} />
      </points>
    </group>
  )
}

export default function GlobeScene() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }}>
        <PerspectiveCamera makeDefault position={[0, 0.5, 5.5]} fov={45} />
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 3, 5]} intensity={0.5} />
        <GlobeContent />
      </Canvas>
    </div>
  )
}
