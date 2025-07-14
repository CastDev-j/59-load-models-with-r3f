import { Suspense } from "react";
import { Hamburger } from "../models/Hamburger";
import { Plane } from "../models/Plane";
import { Fox } from "../models/Fox";
import { PlaceHolderComponent } from "./PlaceHolderComponent";

export const ModelsGroup = () => {
  return (
    <group>
      <Suspense
        fallback={
          <PlaceHolderComponent
            position={[0, 0, 4]}
            text={"Cargando Hamburguesita..."}
          />
        }
      >
        <Hamburger position={[0, -1, 4]} scale={0.35} />
      </Suspense>

      <Suspense
        fallback={
          <PlaceHolderComponent
            position={[0, 0, -2]}
            text={"Cargando al Zorrillo..."}
          />
        }
      >
        <Fox position={[0, 0, -2]} />
      </Suspense>

      <Plane position={[0, -1, 0]} />
    </group>
  );
};
