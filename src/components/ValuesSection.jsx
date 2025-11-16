import React, { useRef, useEffect, useMemo, Suspense, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { MeshStandardMaterial } from "three";

/* Utility hook to track window width for responsiveness */
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return width;
}

/* Ship model with scroll-based rotation */
function Ship({ scrollRef }) {
  const { scene } = useGLTF("/models/ship.glb");
  const cloned = useMemo(() => scene.clone(), [scene]);
  const groupRef = useRef();

  useEffect(() => {
    if (!cloned || !groupRef.current) return;

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

    const box = new THREE.Box3().setFromObject(cloned);
    const size = new THREE.Vector3();
    box.getSize(size);
    const maxDim = Math.max(size.x, size.y, size.z) || 1;
    const desired = 20;
    const scale = desired / maxDim;
    const center = new THREE.Vector3();
    box.getCenter(center);

    groupRef.current.clear();
    groupRef.current.add(cloned);

    groupRef.current.scale.setScalar(scale);
    groupRef.current.position.set(-18, 1.5, -5);
    cloned.position.sub(center);
  }, [cloned]);

  useFrame(() => {
    if (!groupRef.current) return;
    const dy = scrollRef.current?.dy ?? 0;
    groupRef.current.rotation.y += dy * 0.003;
    groupRef.current.rotation.y *= 0.9995;
  });

  return <group ref={groupRef} />;
}

/* Main Responsive Component */
export default function ValuesSection() {
  const scrollRef = useRef({ y: 0, dy: 0 });
  const width = useWindowWidth();

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || window.pageYOffset;
      scrollRef.current.dy = y - scrollRef.current.y;
      scrollRef.current.y = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isTablet = width <= 1024;
  const isMobile = width <= 600;

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

  // ✅ Responsive inline styles
  const styles = {
    section: {
      position: "relative",
      width: "100%",
      height: isMobile ? "auto" : "100vh",
      overflow: "hidden",
      background: "#0D314C",
      paddingBottom: isMobile ? "3rem" : 0,
    },
    canvasContainer: {
      position: "absolute",
      inset: 0,
      zIndex: 0,
      pointerEvents: "none",
    },
    content: {
      position: "relative",
      zIndex: 2,
      height: "100%",
      display: "flex",
      flexDirection: isTablet ? "column" : "row",
      padding: isTablet ? "1.5rem" : "2rem",
    },
    left: {
      flex: isTablet ? "unset" : "0 0 40%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: isTablet ? "center" : "flex-start",
      textAlign: isTablet ? "center" : "left",
      marginBottom: isTablet ? "1rem" : 0,
    },
    heading: {
      fontSize: isMobile ? "1.8rem" : isTablet ? "2.2rem" : "3rem",
      margin: 0,
      color: "#ffffff",
    },
    right: {
      flex: 1,
      padding: isTablet ? "1rem" : "2rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      overflowY: isTablet ? "visible" : "auto",
    },
    box: (index) => ({
      background: "rgba(255,255,255,0.1)",
      border: "1px solid rgba(255,255,255,0.2)",
      padding: isMobile ? "0.75rem" : "1rem",
      marginBottom: "1rem",
      maxWidth: isTablet ? "100%" : "600px",
      marginLeft: isTablet ? 0 : `${index * 30}px`,
      backdropFilter: "blur(3px)",
    }),
    boxTitle: {
      color: "#ffffff",
      margin: 0,
      fontSize: isMobile ? "1.1rem" : "1.25rem",
    },
    boxText: {
      color: "#ffffff",
      fontSize: isMobile ? "0.9rem" : "0.95rem",
      marginTop: "0.5rem",
    },
  };

  return (
    <section style={styles.section}>
     {!isTablet && (
  <div style={styles.canvasContainer}>
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
)}

      {/* Foreground Content */}
      <div style={styles.content}>
        <div style={styles.left}>
          <h3 style={styles.heading}>Our Values</h3>
        </div>

        <div style={styles.right}>
          {boxes.map((b, i) => (
            <div key={i} style={styles.box(i)}>
              <h4 style={styles.boxTitle}>{b.title}</h4>
              <p style={styles.boxText}>{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
