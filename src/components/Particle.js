
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.


const ParticlesComponent = (props) => {

  // eslint-disable-next-line
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });

    const updateColors = () => {
      setBackgroundColor(getComputedStyle(document.documentElement).getPropertyValue('--dark-background'));
      setTextColor(getComputedStyle(document.documentElement).getPropertyValue('--dark-text'));
    };
  
    updateColors();
  
    const intervalId = setInterval(updateColors, 100);
  
    return () => clearInterval(intervalId);

  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };


  const [backgroundColor, setBackgroundColor] = useState(getComputedStyle(document.documentElement).getPropertyValue('--dark-background'));
  const [textColor, setTextColor] = useState(getComputedStyle(document.documentElement).getPropertyValue('--dark-text'));
  


  const options = useMemo(
    () => ({
      background: {
        color: {
          value: backgroundColor,
          image: "",
          position: "",
          repeat: "",
          size: "",
          opacity: 1
        },
      },
      fullScreen: {
        enable: true,
        zIndex: 0
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "repulse",
          },
          onHover: {
            enable: true,
            mode: 'grab',
          },
          onDiv: {
            selectors: {},
            enable: false,
            mode: {},
            type: "circle"
      },
        },
        modes: {
          push: {
            distance: 200,
            duration: 15,
          },
          grab: {
            distance: 150,
          },
        },
      },
      particles: {
        color: {
          value: textColor,
        },
        links: {
          color: textColor,
          distance: 150,
          enable: true,
          opacity: 0.2,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 150,
        },
        opacity: {
          value: 0.1,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
      zLayers: 1,
    }),
     [backgroundColor, textColor],
  );


  return <Particles id={props.id} init={particlesLoaded} options={options} />; 
};

export default ParticlesComponent;