import { Environment, Lightformer } from "@react-three/drei";
import React from "react";

const StudioLights = () => {
  return (
    <group name="lights">
      <Environment resolution={256}>
        <group>
          <Lightformer
            form="rect"
            intensity={2}
            position={[-10, 2, -5]}
            scale={10}
            rotation-y={Math.PI / 2}
          />
          <Lightformer
            form="rect"
            intensity={2}
            position={[10, 0, 1]}
            scale={10}
            rotation-y={Math.PI / 2}
          />
        </group>
      </Environment>
      <spotLight
        position={[-2, 10, 5]}
        angle={0.15}
        decay={0}
        intensity={Math.PI * 0.2}
      />
      <spotLight
        position={[0, -35, 10]}
        angle={0.15}
        decay={0}
        intensity={Math.PI * 0.2}
      />
      <spotLight
        position={[0, 25, 5]}
        angle={0.15}
        decay={0.1}
        intensity={Math.PI * 0.2}
      />
    </group>
  );
};

export default StudioLights;
