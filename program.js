
tsParticles.load("tsparticles", {
    "autoPlay": true,
      "background": {
        "color": {
          "value": "black"
        }
      },
      "fpsLimit": 120,
      "interactivity": {
        "events": {
          "onClick": {
            "enable": true,
            "mode": "push"
          },
          "onHover": {
            "enable": true,
            "mode": "repulse"
          }
        }
      },
      "particles": {
        "color": {
          "value": "#ff0000"
        },
        "links": {
          "color": "#ffffff",
          "distance": 150,
          "enable": true,
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 2
        },
        "number": {
          "value": 80
        },
        "opacity": {
          "value": {
            "min": 0.1,
            "max": 0.5
          }
        },
        "size": {
          "value": {
            "min": 0.1,
            "max": 5
          }
        },
        "twinkle": {
          "lines": {
            "enable": true,
            "frequency": 0.005,
            "opacity": 1,
            "color": {
              "value": "#ff0000"
            }
          },
          "particles": {
            "enable": true,
            "frequency": 0.05,
            "opacity": 1,
            "color": {
              "value": "#ffff00"
            }
          }
        }
      }
    });
