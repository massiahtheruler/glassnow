import { baseUrl } from "./site-content";

export default function manifest() {
  return {
    name: "GlassNow Mobile Auto Glass",
    short_name: "GlassNow",
    description:
      "Mobile windshield repair, replacement, and vehicle glass service across New Jersey and the NYC metro area.",
    start_url: "/",
    display: "standalone",
    background_color: "#07111f",
    theme_color: "#07111f",
    icons: [
      {
        src: `${baseUrl}/icon.svg`,
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
