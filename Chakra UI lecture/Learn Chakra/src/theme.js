import { createSystem, defaultConfig, defineRecipe, defineSlotRecipe } from "@chakra-ui/react";

/* ----------------------------------
   BUTTON (simple recipe)
----------------------------------- */
const buttonRecipe = defineRecipe({
  base: {
    borderRadius: "0",
    fontWeight: "medium",
  },

  variants: {
    variant: {
      primary: {
        bg: { base: "brand.600", _dark: "brand.300" },
        color: { base: "brand.900", _dark: "brand.700" },
        _hover: { bg: "brand.400" },
        _focusVisible: {
          ring: "2px",
          ringColor: "brand.500",
        },
      },
    },
  },

  defaultVariants: {
    variant: "primary",
  },
});

/* ----------------------------------
   INPUT / TEXTAREA / SELECT (slot recipe)
----------------------------------- */
const filledFieldRecipe = defineSlotRecipe({
  slots: ["field"], // Match field anatomy
  base: { field: { borderRadius: "0" } },
  variants: {
    variant: {
      filled: {
        field: {
          // Target actual field slot
          _focusVisible: {
            borderColor: "brand.500",
            ring: "2px",
            ringColor: "brand.500",
          },
        },
      },
    },
  },
  defaultVariants: { variant: "filled" },
});

/* ----------------------------------
   CHECKBOX (slot recipe)
----------------------------------- */
const checkboxRecipe = defineSlotRecipe({
  className: "checkbox",
  slots: ["root", "control", "label"],
  base: {
    root: { display: "flex", alignItems: "center", gap: "2" }, // Required
    control: {
      borderWidth: "1px",
      borderRadius: "sm",
      ring: 2,
      ringColor: "brand.600",
    },
    label: { cursor: "pointer" }, // Required
  },
});

/* ----------------------------------
   SYSTEM
----------------------------------- */
export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        brand: {
          50: { value: "#f5fee5" },
          100: { value: "#e1fbb2" },
          200: { value: "#cdf781" },
          300: { value: "#b8ee56" },
          400: { value: "#a2e032" },
          500: { value: "#8ac919" },
          600: { value: "#71ab09" },
          700: { value: "#578602" },
          800: { value: "#3c5e00" },
          900: { value: "#203300" },
        },
      },

      fonts: {
        heading: { value: "Montserrat, sans-serif" },
        body: { value: "Inter, sans-serif" },
      },
    },

    recipes: {
      button: buttonRecipe,
    },

    slotRecipes: {
      field: filledFieldRecipe,
      checkbox: checkboxRecipe,
    },
  },
});
