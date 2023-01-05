import { getDirname, path } from "@vuepress/utils";
import registerComponentsPlugin from "@vuepress/plugin-register-components";
import { defaultTheme } from "@vuepress/theme-default";
const __dirname = getDirname(import.meta.url);

export default {
  title: "Zawodowe.it",

  plugins: [
    registerComponentsPlugin({
      components: {
        Actions: path.resolve(__dirname, "./components/Actions.vue"),
      },
    }),
  ],

  theme: defaultTheme({
    navbar: [
      {
        text: "INF.03",
        link: "/inf03/",
      },

      {
        text: "INF.04",
        link: "/inf04/",
      },
    ],
    sidebar: {
      "/inf04/": [
        {
          text: "Egzaminy INF.04",
          link: "/inf04/",
          children: [],
        },

        {
          text: "Arkusze",
          collapsible: true,
          children: ["/inf04/02220622/"],
        },

        {
          text: "Rodzaje zadań",
          collapsible: true,
          children: ["/inf04/aplikacjewebowe/"],
        },
      ],
    },
  }),
};
