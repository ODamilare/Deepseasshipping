import React, { useRef, useEffect, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { MeshStandardMaterial } from "three";

/* Ship model with scroll-based rotation */
function Ship({ scrollRef }) {
  const { scene } = useGLTF("/models/ship.glb");

  // make a stable clone of the scene so we don't mutate the cached GLTF scene
  const cloned = useMemo(() => scene.clone(), [scene]);

  const groupRef = useRef();

  useEffect(() => {
    if (!cloned || !groupRef.current) return;

    // give fallback material to all meshes
    cloned.traverse((obj) => {
      if (obj.isMesh) {
        if (!obj.material) {
          obj.material = new MeshStandardMaterial({
            color: "#0D314C",
            roughness: 0.6,
            metalness: 0.05,
          });
        } else if (obj.material.isMeshStandardMaterial) {
          obj.material.roughness ??= 0.6;
          obj.material.metalness ??= 0.05;
        }
        obj.castShadow = true;
        obj.receiveShadow = true;
      }
    });

    // compute bounding box of the clone
    const box = new THREE.Box3().setFromObject(cloned);
    const size = new THREE.Vector3();
    box.getSize(size);
    const maxDim = Math.max(size.x, size.y, size.z) || 1;

    // scale to desired size
    const desired = 20;
    const scale = desired / maxDim;

    // center
    const center = new THREE.Vector3();
    box.getCenter(center);

    // clear previous children and add our clone
    groupRef.current.clear();
    groupRef.current.add(cloned);

    // apply transforms on the group (not on scene)
    groupRef.current.scale.setScalar(scale);
    groupRef.current.position.set(-18, 1.5, -5); // move left/back/down
    cloned.position.sub(center); // center clone inside the group
  }, [cloned]);

  useFrame(() => {
    if (!groupRef.current) return;
    const dy = scrollRef.current?.dy ?? 0;
    groupRef.current.rotation.y += dy * 0.003;
    groupRef.current.rotation.y *= 0.9995;
  });

  return <group ref={groupRef} />;
}

export default function ValuesSection() {
  const scrollRef = useRef({ y: 0, dy: 0 });

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || window.pageYOffset;
      scrollRef.current.dy = y - scrollRef.current.y;
      scrollRef.current.y = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const boxes = [
    {
      title: "Safety Above All",
      text:
        "We prioritize the safety of our crew, cargo, vessels, and the environment in every operation, strictly adhering to international maritime and environmental standards.",
    },
    {
      title: "Integrity in Every Voyage",
      text:
        "We act with honesty, transparency, and ethical responsibility in our dealings with clients, partners, and regulators worldwide.",
    },
    {
      title: "Operational Excellence",
      text:
        "We continuously improve our logistics, fleet management, and customer service to ensure timely, efficient, and reliable shipping solutions.",
    },
    {
      title: "Environmental Stewardship",
      text:
        "We are committed to minimizing our ecological footprint by implementing sustainable practices and technologies in our operations.",
    },
    {
      title: "Customer-Centric Partnerships",
      text:
        "We build long-term relationships with our clients by understanding their needs and delivering tailored, high-quality shipping solutions.",
    },
  ];

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        background: "#0D314C",
      }}
    >
      {/* Canvas background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <Canvas camera={{ position: [0, 1, 25], fov: 45 }} gl={{ antialias: true, alpha: true }}>
          <ambientLight intensity={0.9} />
          <directionalLight intensity={1.2} position={[10, 10, 10]} />
          <directionalLight intensity={0.8} position={[-10, 5, 10]} />
          <pointLight intensity={0.6} position={[0, -10, 20]} />
          <Suspense fallback={null}>
            <Ship scrollRef={scrollRef} />
          </Suspense>
        </Canvas>
      </div>

      {/* Foreground */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          flexDirection: "row",
        }}
      >
        {/* Left side with heading */}
        <div
          style={{
            flex: "0 0 40%",
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          <h3 style={{ fontSize: "3rem", margin: 0, color: "#ffffff" }}>Our Values</h3>
        </div>

        {/* Right side boxes */}
        <div
          style={{
            flex: 1,
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            overflowY: "auto", // scroll boxes
          }}
        >
          {boxes.map((b, i) => (
            <div
              key={i}
              style={{
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.2)",
                padding: "1rem",
                marginBottom: "1rem",
                maxWidth: "600px",
                marginLeft: `${i * 30}px`,
                backdropFilter: "blur(3px)",
              }}
            >
              <h4 style={{ color: "#ffffff", margin: 0, fontSize: "1.25rem" }}>{b.title}</h4>
              <p style={{ color: "#ffffff", fontSize: "0.95rem", marginTop: "0.5rem" }}>{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
