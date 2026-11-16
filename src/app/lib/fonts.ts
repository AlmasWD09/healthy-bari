import localFont from "next/font/local";

// Primary Font
export const primaryFont = localFont({
  src: [
    {
      path: "../fonts/primary/Euclid Circular B Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/primary/Euclid Circular B Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/primary/Euclid Circular B SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/primary/Euclid Circular B Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-primary",
  display: "swap",
});

// Secondary Font
export const secondaryFont = localFont({
  src: [
    {
      path: "../fonts/secondary/Kodchasan-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/secondary/Kodchasan-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/secondary/Kodchasan-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/secondary/Kodchasan-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-secondary",
  display: "swap",
});
