import Vue from 'vue'
import Component from "vue-class-component";
import Hello from './components/Hello'
import { mapState, mapMutations } from 'vuex'
import template from "./app.html";

// We declare the props separately
// to make props types inferable.

@Component({
  components: {
    Hello
  },

  // Vuex's component binding helper can use here
  computed: mapState([
    'count'
  ]),
  methods: mapMutations([
    'increment'
  ]),
  props: ["propMessage"],
  template: template
})
export default class App extends Vue {
  // inital data
  msg: number = 123

  propMessage: string = "";

  // use prop values for initial data
  helloMsg: string = 'Hellos, ' + this.propMessage

  // annotate refs type
  $refs!: {
    helloComponent: Hello
  }

  // additional declaration is needed
  // when you declare some properties in `Component` decorator
  count!: number
  increment!: () => void

  beforeMount(): void
  {
    console.log("cheesE");
  }

  // lifecycle hook
  mounted () {
    this.greet()
  }

  // computed
  get computedMsg () {
    return 'computed ' + this.msg
  }

  // method
  greet () {
    // alert('greeting: ' + this.msg)
    this.$refs.helloComponent.sayHello()
  }

  // direct dispatch example
  incrementIfOdd () {
    this.$store.dispatch('incrementIfOdd')
  }
}