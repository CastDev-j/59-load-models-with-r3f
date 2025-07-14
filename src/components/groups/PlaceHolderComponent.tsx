import clsx from "clsx";
import { Html } from "@react-three/drei";
import { useState } from "react";

interface PlaceHolderComponentProps {
  position?: [number, number, number];
  text?: string;
}

export const PlaceHolderComponent = ({
  position,
  text,
}: PlaceHolderComponentProps) => {
  const [hidden, set] = useState(false);

  return (
    <mesh position={position || [0, 0, 0]}>
      <sphereGeometry />
      <meshStandardMaterial color="orange" />
      <Html center position={[0, 2, 0]} occlude onOcclude={set}>
        <div
          className={clsx(
            " bg-neutral-950/70 text-purple-50 px-4 py-2 rounded-lg text-center select-none w-28",
            "transition-all duration-300 ease-in-out",
            hidden ? "opacity-0 scale-50" : "opacity-100 scale-100"
          )}
        >
          {text || "Loading..."}
        </div>
      </Html>
    </mesh>
  );
};
