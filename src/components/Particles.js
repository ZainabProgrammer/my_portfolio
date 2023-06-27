import React from "react";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
const Particle = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);

    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  return (
    <div>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 5,
              },
            },
          },
          particles: {
            color: {
              value: "#a020f0",
            },
            move: {
              enable: true,
              outModes: {
                default: "destroy",
                bottom: "none",
                left: "none",
                right: "none",
                top: "none",
              },
            },
            decay: 0.01,
            direction: "none",
            outModes: {
              default: "destroy",
            },
            number: {
              density: {
                enable: false,
                area: {
                  top: 0,
                  bottom: 0,
                  left: 0,
                  right: 0,
                },
              },
              value: 0,
            },
            opacity: {
              value: 0.5,
              animation: {
                enable: true,
                speed: 1,
                minimumValue: 0,
              },
            },
            shape: {
              type: "star",
            },
            size: {
              value: { min: 2, max: 5 },
              animation: {
                enable: true,
                speed: 20,
                minimumValue: 0,
                sync: false,
              },
            },
            life: {
              duration: {
                sync: false,
                value: 0,
              },
            },
          },

          detectRetina: true,
        }}
      />
    </div>
  );
};

export default Particle;
