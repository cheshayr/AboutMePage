import { createSystem, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          navy: { value: "#0B1B3A" },
          gold: { value: "#F1C40F" },
          white: { value: "#FFFFFF" },
          // Adding a "muted" version of your navy for descriptions
          navyMuted: { value: "rgba(11, 27, 58, 0.8)" }, 
        },
      },
    },
    // Linking your Poppins font to Chakra's heading and body tags
    fonts: {
      heading: { value: "'Poppins', sans-serif" },
      body: { value: "'Poppins', sans-serif" },
    },
  },
});

export const system = createSystem(config);