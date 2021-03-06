export const particleOptions = {
  // background: {
  //   color: {
  //     value: "#0d47a1",
  //   },
  // },
  fpsLimit: 60,
  // interactivity: {
  //   events: {
  //     onClick: {
  //       enable: true,
  //       mode: "push",
  //     },
  //     onHover: {
  //       enable: true,
  //       mode: "repulse",
  //     },
  //     resize: true,
  //   },
  //   modes: {
  //     bubble: {
  //       distance: 400,
  //       duration: 2,
  //       opacity: 0.8,
  //       size: 40,
  //     },
  //     push: {
  //       quantity: 4,
  //     },
  //     repulse: {
  //       distance: 200,
  //       duration: 0.4,
  //     },
  //   },
  // },
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.6,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: "none",
      enable: true,
      outMode: "bounce",
      random: true,
      speed: 1,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        value_area: 900,
      },
      value: 60,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      random: true,
      value: 1,
    },
  },
  detectRetina: true,
};
