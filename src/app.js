const app = Vue.createApp({
  data() {
    return {
      activePage: 0,
      pages: [
        {
          link: { name: "Home" },
          title: "Home Page",
          content: "This is home page.",
        },
        {
          link: { name: "Contact" },
          title: "Contact Page",
          content: "This is contact page.",
        },
        {
          link: { name: "About" },
          title: "About Page",
          content: "This is about page.",
        },
      ],
    };
  },
});
app.component("page-nav", {
  props: ["pages", "activePage", "clickNavLink"],
  template: `
      <nav class="w-full py-5 px-48 bg-gray-700 flex flex-row items-center justify-between">
        <h1 class="font-bold text-xl text-white">VUE BASICS</h1>
        <div class="flex flex-row gap-3">
          <button
            v-for="(page, index) in pages"
            v-bind:key="index"
            v-bind:class="{'text-white':activePage===index}"
            v-bind:class="{'text-gray-400':activePage!==index}"
            v-bind:title="\`This link goes to \${page.link.name}\`"
            @click="clickNavLink(index)"
            >{{page.link.name}}</
          >
        </div>
      </nav>
      `,
});
app.component("page-body", {
  props: ["page"],
  template: `
        <div class="flex-1 py-10 px-48 flex flex-col gap-5">
          <div class="flex flex-col gap-2">
            <h1 class="text-3xl font-bold text-slate-700">{{page.title}}</h1>
            <p>{{page.content}}</p>
          </div>
          <div class="flex flex-row items-center gap-2">
            <button class="py-1 px-2 text-white bg-purple-600 rounded-md" @click="increaseCount()">Click Me</button>
            <p>{{count}}</p>
          </div>
        </div>
      `,
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increaseCount() {
      ++this.count;
    },
  },
});
app.component("page-footer", {
  template: `
        <footer class="flex flex-row justify-center gap-2 mb-10">
          <p>Learning vue only with library.</p>
          <a class="text-blue-600" href="https://github.com/MR-Addict/vue-bare-metal-starter" target="_blank"
            >Github link.</a
          >
        </footer>
      `,
});
app.mount("body");
