<template>
  <form @submit.prevent="checkForm">
    <h2 class="text-center">Registrarse en el concurso</h2>
    <div v-if="errors.length" class="alert alert-green" role="alert">
      <h4 class="alert-heading text-danger">
        Por favor, corrija el(los) siguiente(s) error(es):
      </h4>
      <ul>
        <li v-for="error in errors" :key="error">
          <small class="text-danger">{{ error }}</small>
        </li>
      </ul>
    </div>
    <!-- number input -->
    <div class="form-outline mb-4">
      <input type="number" id="dni" v-model="dni" class="form-control" />
      <label class="form-label" for="dni">Número de Cédula</label>
    </div>

    <div class="row mb-4">
      <div class="col">
        <div class="form-outline">
          <input type="text" id="names" v-model="names" class="form-control" />
          <label class="form-label" for="names">Nombres</label>
        </div>
      </div>
      <div class="col">
        <div class="form-outline">
          <input
            type="text"
            id="lastName"
            v-model="lastname"
            class="form-control"
          />
          <label class="form-label" for="lastName">Apellidos</label>
        </div>
      </div>
    </div>

    <!-- Text input -->
    <div class="form-outline mb-4">
      <input type="text" id="phone" v-model="phone" class="form-control" />
      <label class="form-label" for="phone">Telefono</label>
    </div>

    <div class="row mb-4">
      <div class="col">
        <select
          class="form-select"
          v-model="departament"
          aria-label="Default select example"
        >
          <option selected disabled>Seleccione</option>
          <option
            v-for="departament in departaments"
            :key="departament.id"
            :value="departament.id"
          >
            {{ departament.name }}
          </option>
        </select>
        <label class="form-label" for="form6Example5">Departamento</label>
      </div>
      <div class="col">
        <select
          class="form-select"
          v-model="city"
          aria-label="Default select example"
        >
          <option selected disabled>Seleccione</option>
          <option
            v-for="city in cities"
            :key="city.id"
            :value="city.id"
          >
            {{ city.name }}
          </option>
        </select>
        <label class="form-label" for="form6Example5">Ciudad</label>
      </div>
    </div>

    <!-- Email input -->
    <div class="form-outline mb-4">
      <input
        type="email"
        id="form6Example5"
        v-model="email"
        class="form-control"
      />
      <label class="form-label" for="form6Example5">Email</label>
    </div>

    <!-- Checkbox -->
    <div class="form-check d-flex justify-content-center mb-4">
      <input
        class="form-check-input me-2"
        type="checkbox"
        v-model="habeasData"
        id="habeasData"
      />
      <label class="form-check-label" for="form6Example8">
        Autorizo el tratamiento de mis datos personales de acuerdo con la política de tratamiento de datos personales.
      </label>
    </div>

    <!-- Submit button -->
    <button type="submit" class="btn btn-primary btn-block mb-4">
      Registrarse
    </button>
  </form>
</template>

<script>
import CustomerController from '../controller/customer/customer.controller'

export default {
  name: 'AboutView',
  data: () => ({
    errors: [],
    dni: null,
    names: null,
    lastname: null,
    phone: null,
    departament: null,
    city: null,
    email: null,
    habeasData: false,
    departaments: [],
    cities: []
  }),
  async created() {
    this.departaments = await CustomerController.get.allDepartaments()
  },
  watch: {
    async departament (id) {
      const cities = await CustomerController.get.allCities()
      this.cities = cities.filter(city => city.departament_id === id)
    }
  },
  methods: {
    checkForm() {
      this.errors = []

      if (!this.names) {
        this.errors.push('El nombre es obligatorio.')
      }
      if (!this.lastname) {
        this.errors.push('El apellido es obligatorio.')
      }
      if (!this.dni) {
        this.errors.push('El número de cédula es obligatorio.')
      }

      if (!this.phone) {
        this.errors.push('El número de teléfono es obligatorio.')
      }

      if (!this.email) {
        this.errors.push('El correo electrónico es obligatorio.')
      } else if (!this.validEmail(this.email)) {
        this.errors.push('El correo electrónico debe ser válido.')
      }

      if (!this.departament) {
        this.errors.push('El departamento es obligatorio.')
      }

      if (!this.city) {
        this.errors.push('La ciudad es obligatoria.')
      }

      if (!this.habeasData) {
        this.errors.push('Debe autorizar el tratamiento de sus datos personales.')
      }

      if (!this.errors.length) {
        this.submitForm()
      } else {
        alert(
          'Por favor, corrija el(los) siguiente(s) error(es): ' +
            this.errors.join(' ')
        )
      }
    },
    async submitForm () {
      const payload = {
        dni: this.dni,
        name: this.names,
        last_name: this.lastname,
        cell_phone: this.phone,
        departament: this.departament,
        city_id: this.city,
        email: this.email,
        habeas_data: this.habeasData
      }
      await CustomerController.post.newCustomer(payload)
      alert('Formulario enviado!')
      this.clearForm()
    },
    clearForm () {
      this.dni = null
      this.names = null
      this.lastname = null
      this.phone = null
      this.departament = null
      this.city = null
      this.email = null
      this.habeasData = false
    },
    validEmail: function (email) {
      var re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    }
  }
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
