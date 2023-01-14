import { getDirname, path } from "@vuepress/utils";
import registerComponentsPlugin from "@vuepress/plugin-register-components";
import { defaultTheme } from "@vuepress/theme-default";
import { copyCodePlugin } from "vuepress-plugin-copy-code2";
import { removeHtmlExtensionPlugin } from "vuepress-plugin-remove-html-extension";


const __dirname = getDirname(import.meta.url);

export default {
  title: "Zawodowe.it",

  plugins: [
    registerComponentsPlugin({
      components: {
        Actions: path.resolve(__dirname, "./components/Actions.vue"),
      },
    }),
    copyCodePlugin({
      pure: true,
    }),
    removeHtmlExtensionPlugin(),
  ],

  theme: defaultTheme({
    contributors: false,
    lastUpdatedText: "Ostatnia zmiana",
    editLinkText: "Edytuj stronę",
    docsDir: "docs",
    repo: "https://github.com/xWenyl/vuepress-zawodowe",
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
          children: [
            "/inf04/arkusze/2022-lato-wersja-2/",
            "/inf04/arkusze/2022-lato-wersja-1/",
          ],
        },

        {
          text: "Rodzaje zadań",
          collapsible: true,
          children: [
            "/inf04/rodzaje-zadan/aplikacjekonsolowe/",
            "/inf04/rodzaje-zadan/aplikacjewebowe/",
            "/inf04/rodzaje-zadan/aplikacjemobilne/",
          ],
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
          children: ["/inf03/arkusze/2022-lato-wersja-1"],
        },

        {
          text: "Rodzaje zadań",
          collapsible: true,
          children: [
            "/inf03/rodzaje-zadan/bazy-danych",
            "/inf03/rodzaje-zadan/skrypt-php",
            "/inf03/rodzaje-zadan/skrypt-js",
            "/inf03/rodzaje-zadan/obrobka-grafiki",
          ],
        },

        {
          text: "Wskazówki i pomoc",
          collapsible: true,
          children: ["/inf03/wskazowki-pomoc/tworzenie-import-bazy"],
        },

        {
          text: "Turbo powtórka",
          collapsible: true,
          children: ["/inf03/turbo-powtorka"],
        },
      ],
    },
  }),
};
