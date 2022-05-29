<script>
import {resistorCost, resistorPrice} from "../domain";
export default {
  data() {
    return {
      amount: 0
    }
  },
  computed: {
    totalCost() {
      return resistorCost(resistorPrice, this.amount)
    }
  }
}
</script>

<template>
  <input v-model="amount"/>
  <div>Price: {{totalCost}}</div>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
