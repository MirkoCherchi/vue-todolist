'use strict';

const { createApp } = Vue

  createApp({
    data() {
      return {
        objs:[{text: 'Text1', done: false }, {text: 'Text2', done: false }, {text: 'Text3', done: true }, {text: 'Text4', done: false }, {text: 'Text5', done: false }, {text: 'Text6', done: true },],

        newObj: '',
      }
      
    },
    
    methods: {
        isDone(obj){
            return obj.done;
        },

        deleteObj(index){
            this.objs.splice(index, 1);
        },

        addNewObj(){
            if (this.newObj.trim() !== '') {
                this.objs.push({text: this.newObj, done: false});
                this.newObj = '';
            }
        },
    },
  }).mount('#app')