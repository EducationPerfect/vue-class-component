import Vue from 'vue'
import Component from "vue-class-component";

import template from "./Hello.html";


@Component({
  template,
  props: [
      "cheer", // {CheerStickerDefinitionForUser} Cheer for user.
      "size", // {string} Size of icon, in px.
      "cheersAvailable", // {number} Number of cheers available.
  ]
})

export default class Hello extends Vue {
  helloTimes: number = 0

  sayHello () {
    this.helloTimes++
  }
}