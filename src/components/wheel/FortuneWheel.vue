<template>
  <div class="wheel_wrap">
    <h1>Quien será el ganador</h1>
    <Wheel
      ref="wheel"
      :gift="gift"
      :data="customers"
      @done="done"
      :imgParams="logo"
      @click="spinTheWheel"
    />
    <ul>
      <li v-for="customer in customers" :key="customer.id">
        {{ customer.value }}
      </li>
    </ul>
  </div>
</template>

<script>
import { Wheel } from 'vue3-fortune-wheel'
import CustomerController from '../../controller/customer/customer.controller'

export default {
  name: 'FortuneWheel',
  components: {
    Wheel
  },
  data() {
    return {
      gift: 2,
      logo: {
        width: 150,
        height: 140,
        src: 'https://images.carandbike.com/car-images/big/mercedes-benz/m-class/mercedes-benz-m-class.jpg?v=6'
      },
      dataCustomers: []
    }
  },
  computed: {
    customers() {
      return [...this.dataCustomers].map((customer) => ({
        id: customer.id,
        value: customer.name,
        bgColor: "#7d7db3",
        color: "#ffffff"
      }))
    }
  },
  async created() {
    const {data} = await this.getCustomers()
    this.dataCustomers = data
    console.log(data);
    console.log(this.dataCustomers)
  },
  methods: {
    getCustomers: CustomerController.get.allCustomers,
    done(params) {
      console.log(params)
    },
    spinTheWheel() {
      this.$refs.wheel.spin()
    }
  }
}
</script>