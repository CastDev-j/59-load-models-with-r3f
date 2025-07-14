/* eslint-disable @typescript-eslint/no-explicit-any */

import { DoubleSide } from "three";

export const Plane = (props: any) => {
  return (
    <mesh {...props} receiveShadow rotation-x={-Math.PI * 0.5} scale={20}>
      <planeGeometry />
      <meshStandardMaterial color="greenyellow" side={DoubleSide} />
    </mesh>
  );
};
