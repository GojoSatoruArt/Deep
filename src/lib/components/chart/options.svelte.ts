export let optionsSvelte = {
  color: {
    gradient: {
      enabled: true,
    },
  },
  axes: {
    bottom: {
      mapsTo: "date",
      scaleType: "time",
      visible: false, // hide x-axis
    },
    left: {
      mapsTo: "value",
      scaleType: "linear",
      visible: false,
      domain: [25, 120], // hide y-axis
    },
    color: {
      gradient: {
        enabled: true,
      },
    },
  },

  curve: "curveMonotoneX", // smooth line
  points: {
    enabled: true, // hide points
  },
  grid: {
    x: {
      enabled: false, // hide grid
    },
    y: {
      enabled: false,
    },
  },
  toolbar: {
    enabled: false, // hide toolbar
  },
  legend: {
    enabled: false, // hide legend
  },
  height: "200px",
};
