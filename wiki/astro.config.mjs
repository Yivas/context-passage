import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

const repositoryUrl = "https://github.com/Yivas/context-passage";

export default defineConfig({
  site: "https://yivas.github.io",
  base: "/context-passage",
  integrations: [
    starlight({
      title: "Context Passage",
      description: "Local, opt-in continuity for AI coding agents.",
      favicon: "/favicon.svg",
      customCss: ["./src/styles/custom.css"],
      editLink: {
        baseUrl: `${repositoryUrl}/edit/main/wiki/`,
      },
      head: [
        {
          tag: "meta",
          attrs: {
            name: "theme-color",
            content: "#15130f",
          },
        },
      ],
      lastUpdated: true,
      social: [{ icon: "github", label: "GitHub", href: repositoryUrl }],
      sidebar: [
        {
          label: "Start here",
          items: [
            { label: "Overview", slug: "guides/overview" },
            { label: "Product contract", slug: "guides/product-contract" },
          ],
        },
        {
          label: "Design",
          items: [
            { label: "Architecture", slug: "design/architecture" },
            { label: "Fidelity and conflicts", slug: "design/fidelity" },
            { label: "Configuration model", slug: "design/configuration" },
          ],
        },
        {
          label: "Project",
          items: [
            { label: "Capability status", slug: "project/status" },
            { label: "Security", slug: "project/security" },
            { label: "Contributing", slug: "project/contributing" },
          ],
        },
      ],
    }),
  ],
});
