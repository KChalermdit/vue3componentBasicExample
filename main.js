// Create a Vue application
const app1 = Vue.createApp({})

// Define a new global component called button-counter
app1.component('button-counter', {
  data() {
    return {
      count: 0
    }
  },
  template: /*html*/ `
    <button @click="count++">
      You clicked me {{ count }} times.
    </button>`
})

app1.mount('#components-demo')

const app2 = Vue.createApp({})

app2.component('blog-post', {
  props: ['title'],
  template: /*html*/ `<h4>{{ title }}</h4>`
})

app2.mount('#blog-post-demo')

const App3 = {
  data() {
    return {
      posts: [
        { id: 1, title: 'My journey with Vue' },
        { id: 2, title: 'Blogging with Vue' },
        { id: 3, title: 'Why Vue is so fun' }
      ]
    }
  }
}

const app3 = Vue.createApp(App3)

app3.component('blog-post', {
  props: ['title'],
  template: /*html*/ `<h4>{{ title }}</h4>`
})

app3.mount('#blog-posts')

const app4 = Vue.createApp({
  data() {
    return {
      posts: [
        { id: 1, title: 'My journey with Vue' },
        { id: 2, title: 'Blogging with Vue' },
        { id: 3, title: 'Why Vue is so fun' }
      ],
      postFontSize: 1
    }
  }
})

app4.component('blog-post', {
  props: ['title'],
  template: /*html*/ `
    <div class="blog-post">
      <h4>{{ title }}</h4>
      <button @click="$emit('enlargeText')">
        Enlarge text
      </button>
    </div>
  `
})

app4.mount('#blog-posts-events-demo')

const app5 = Vue.createApp({
  data() {
    return {
      posts: [
        { id: 1, title: 'My journey with Vue' },
        { id: 2, title: 'Blogging with Vue' },
        { id: 3, title: 'Why Vue is so fun' }
      ],
      postFontSize: 1
    }
  },
  methods: {
    onEnlargeText(enlargeAmount) {
      this.postFontSize += enlargeAmount
    }
  }
})

app5.component('blog-post', {
  props: ['title'],
  emits: ['enlargeText'],
  template: /*html*/ `
    <div class="blog-post">
      <h4>{{ title }}</h4>
      <button @click="$emit('enlargeText', 0.1)">
        Enlarge text
      </button>
    </div>
  `
})

app5.mount('#blog-posts-events-demo5')
