import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("componentsDir", defineAsyncComponent(() => import("C:/Users/wenyl/OneDrive/Pulpit/Programowanie/Repos/vuepress-zawodowe/docs/.vuepress/components")))
  },
}
