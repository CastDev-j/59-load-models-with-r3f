/* eslint-disable @typescript-eslint/no-explicit-any */

import { useAnimations, useGLTF } from "@react-three/drei";
import { useControls } from "leva";
import { useEffect } from "react";

export const Fox = (props: any) => {
  const { scene, animations } = useGLTF("/public/Fox/glTF/Fox.gltf");

  const { ref, actions, names } = useAnimations(animations);

  const { animationName } = useControls("Fox", {
    animationName: { options: names },
  });

  useEffect(() => {
    const action = actions[animationName];

    if (action) {
      action.reset().fadeIn(0.5).play();
    }
    console.log(animationName);
    console.log(action);

    return () => {
      if (action) {
        action.fadeOut(0.5);
      }
    };
  }, [animationName, actions]);

  return (
    <primitive
      {...props}
      ref={ref}
      castShadow
      object={scene}
      scale={0.05}
      position-y={-0.99}
    />
  );
};
