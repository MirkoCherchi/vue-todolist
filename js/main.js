'use strict';

const { createApp } = Vue

  createApp({
    data() {
      return {
        objs:[{text: 'text1', done: false }, {text: 'text2', done: false }, {text: 'text3', done: true }, {text: 'text4', done: false }, {text: 'text5', done: false }, {text: 'text6', done: true },]
        
      }
    },
    methods: {
        isDone(obj){
            return obj.done;
        }
    },
  }).mount('#app')