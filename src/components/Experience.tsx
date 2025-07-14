import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Leva, useControls } from "leva";
import { Lights } from "./lights/Lights";
import { Performance } from "./performance/Performance";
import { ModelsGroup } from "./groups/ModelsGroup";

export const Experience = () => {
  const { bgColor } = useControls(
    "Environment",
    {
      bgColor: {
        value: "#ffffff",
        label: "BackGround Color",
      },
    },
    {
      collapsed: true,
    }
  );

  return (
    <div className={`h-screen w-screen`}>
      <Leva collapsed />

      <Canvas
        color={bgColor}
        className="bg-transparent rounded-lg"
        camera={{
          fov: 75,
          position: [7, 4, 7],
          near: 0.1,
          far: 100,
        }}
        shadows
      >
        {/* Models */}
        <ModelsGroup />

        {/* Lights */}
        <Lights />

        {/* Controls */}
        <OrbitControls makeDefault enablePan={false} />

        {/* Performance Monitor */}
        <Performance />

        {/* Background Color */}
        <color attach={"background"} args={[bgColor]} />
      </Canvas>
    </div>
  );
};
