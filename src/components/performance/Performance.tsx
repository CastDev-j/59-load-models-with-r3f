import { useControls } from "leva";
import { Perf } from "r3f-perf";

export const Performance = () => {
  const { perfVisibility } = useControls("Performance", {
    perfVisibility: {
      value: false,
      label: "Show Performance Monitor",
    },
  }, {
    collapsed: true,
  });

  return (
    <>
      <Perf
        position="bottom-right"
        style={{
          visibility: perfVisibility ? "visible" : "hidden",
        }}
      />
    </>
  );
};
