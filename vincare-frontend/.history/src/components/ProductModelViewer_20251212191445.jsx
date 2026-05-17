import React, { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  ContactShadows,
  Html,
  useGLTF,
} from "@react-three/drei";

function Loading() {
  return (
    <Html center>
      <div style={{ color: "white", fontFamily: "Roboto, sans-serif" }}>
        Loading 3D…
      </div>
    </Html>
  );
}

function GLBModel({
  url,
  scale = 1,
  rotation = [0, 0, 0],
  position = [0, 0, 0],
}) {
  const { scene } = useGLTF(url);

  // clone scene so multiple products can render without sharing the same instance
  const cloned = useMemo(() => scene.clone(true), [scene]);

  return (
    <primitive
      object={cloned}
      scale={scale}
      rotation={rotation}
      position={position}
      dispose={null}
    />
  );
}

export default function ProductModelViewer({
  glbUrl,
  modelScale = 1,
  modelRotation = [0, 0, 0],
  modelPosition = [0, 0, 0],
}) {
  return (
    <div className="r3fViewer">
      <Canvas
        camera={{ position: [0, 0.4, 2.2], fov: 42 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={<Loading />}>
          {/* Lights */}
          <ambientLight intensity={0.6} />
          <directionalLight position={[3, 4, 2]} intensity={1.1} />
          <directionalLight position={[-3, 2, -2]} intensity={0.6} />

          {/* Model */}
          <GLBModel
            url={glbUrl}
            scale={modelScale}
            rotation={modelRotation}
            position={modelPosition}
          />

          {/* Realistic lighting */}
          <Environment preset="city" />

          {/* Soft shadow under product */}
          <ContactShadows
            position={[0, -0.8, 0]}
            opacity={0.35}
            blur={2.4}
            scale={8}
            far={4}
          />

          {/* Controls */}
          <OrbitControls
            enablePan={false}
            minDistance={1.4}
            maxDistance={4}
            rotateSpeed={0.85}
            zoomSpeed={0.8}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

// optional: prefetch
useGLTF.preload("/models/germi-check.glb");
