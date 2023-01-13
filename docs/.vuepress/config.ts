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
    contributors: false,
    lastUpdatedText: "Ostatnia zmiana",
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
          children: ["/inf04/02sl2022/", "/inf04/01sl2022"],
        },

        {
          text: "Rodzaje zadań",
          collapsible: true,
          children: ["/inf04/aplikacjekonsolowe/", "/inf04/aplikacjewebowe/", "/inf04/aplikacjemobilne"],
        },
      ],
      "/inf03/": [
        {
          text: "Egzaminy INF.03",
          link: "/inf03/",
          children: [],
        },

        {
          text: "Arkusze",
          collapsible: true,
          children: ["/inf03/arkusze/2022-lato-wersja-1/"],
        },

        {
          text: "Rodzaje zadań",
          collapsible: true,
          children: ["/inf03/rodzaje-zadan/bazy-danych/", "/inf03/rodzaje-zadan/skrypt-php/", "/inf03/rodzaje-zadan/skrypt-js/", "/inf03/rodzaje-zadan/obrobka-grafiki.md"],
        },

        {
          text: "Wskazówki i pomoc",
          collapsible: true,
          children: ["/inf03/wskazowki-pomoc/tworzenie-import-bazy/"],
        },
      ],
    },
  }),
};
