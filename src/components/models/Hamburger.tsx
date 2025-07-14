import * as THREE from "three";
import { useState, useEffect, type JSX, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";
import gsap from "gsap";
import { useControls } from "leva";

type GLTFResult = GLTF & {
  nodes: {
    bottomBun: THREE.Mesh;
    meat: THREE.Mesh;
    cheese: THREE.Mesh;
    topBun: THREE.Mesh;
  };
  materials: {
    BunMaterial: THREE.MeshStandardMaterial;
    SteakMaterial: THREE.MeshStandardMaterial;
    CheeseMaterial: THREE.MeshStandardMaterial;
  };
};

export const Hamburger = (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF(
    "/hamburger-draco.glb"
  ) as unknown as GLTFResult;

  const { maxSeparation, duration, animate } = useControls(
    "Hamburger Animation",
    {
      maxSeparation: { value: 2.0, min: 0, max: 6, step: 0.01 },
      duration: { value: 2, min: 0, max: 5, step: 0.1 },
      animate: { value: true },
    }
  );

  const [separation, setSeparation] = useState(maxSeparation);
  const animRef = useRef<gsap.core.Tween | null>(null); 

  useEffect(() => {
    if (animRef.current) {
      animRef.current.kill();
      animRef.current = null;
    }

    if (animate) {
      const obj = { val: maxSeparation };
      animRef.current = gsap.to(obj, {
        val: 0,
        ease: "bounce.out",
        yoyo: true,
        repeat: -1,
        duration,
        onUpdate() {
          setSeparation(obj.val);
        },
      });
    } else {
      setSeparation(0);
    }

    return () => {
      if (animRef.current) {
        animRef.current.kill();
        animRef.current = null;
      }
    };
  }, [animate, maxSeparation, duration]);

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bottomBun.geometry}
        material={materials.BunMaterial}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.meat.geometry}
        material={materials.SteakMaterial}
        position={[0, 2.82 + separation, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.cheese.geometry}
        material={materials.CheeseMaterial}
        position={[0, 3.04 + separation * 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.topBun.geometry}
        material={materials.BunMaterial}
        position={[0, 1.77 + separation * 3, 0]}
      />
    </group>
  );
};

useGLTF.preload("/hamburger-draco.glb");
