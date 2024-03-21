<template>
  <form @submit.prevent="submitForm">
    <div class="form-control" :class="{invalid: !firstName.isValid}">
      <label for="firstname">Firstname</label>
      <input type="text" id="firstname" v-model.trim="firstName.val" @blur="clearValidation('firstName')">
      <p v-if="!firstName.isValid">First name can not be blank</p>
    </div>
    <div class="form-control" :class="{invalid: !lastName.isValid}">
      <label for="lastname">Lastname</label>
      <input type="text" id="lastname" v-model.trim="lastName.val" @blur="clearValidation('lastName')">
      <p v-if="!lastName.isValid">First name can not be blank</p>
    </div>
    <div class="form-control" :class="{invalid: !description.isValid}">
      <label for="description">Description</label>
      <textarea id="description" rows="5" v-model="description.val" @blur="clearValidation('description')"></textarea>
      <p v-if="!description.isValid">First name can not be blank</p>
    </div>
    <div class="form-control" :class="{invalid: !rate.isValid}">
      <label for="rate">Hourly Rate</label>
      <input type="number" id="rate" v-model.number="rate.val" @blur="clearValidation('rate')">
      <p v-if="!rate.isValid">First name can not be blank</p>
    </div>
    <div class="form-control" :class="{invalid: !areas.isValid}">
      <h3>Area of Expertise</h3>
      <div>
        <input type="checkbox" id="frontend" value="frontend" v-model="areas.val" @blur="clearValidation('areas')">
        <label for="frontend">Frontend</label>
      </div>
      <div>
        <input type="checkbox" id="backennd" value="backennd" v-model="areas.val" @blur="clearValidation('areas')">
        <label for="backennd">Backend</label>
      </div>
      <div>
        <input type="checkbox" id="career" value="career" v-model="areas.val" @blur="clearValidation('areas')">
        <label for="career">Career</label>
      </div>
      <p v-if="!areas.isValid">First name can not be blank</p>
    </div>
    <BaseButton>Register</BaseButton>
  </form>
</template>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type="checkbox"]+label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type="checkbox"] {
  display: inline;
  width: auto;
  border: none;
}

input[type="checkbox"]:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid p {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>

<script>
export default {
  emits: ["save-data"],
  data() {
    return {
      firstName: {
        val: "",
        isValid: true
      },
      lastName: {
        val: "",
        isValid: true
      },
      description: {
        val: "",
        isValid: true
      },
      rate: {
        val: null,
        isValid: true
      },
      areas: {
        val: [],
        isValid: true
      },
      isFormValid: true
    }
  },
  methods: {
    clearValidation(input){
      this[input].isValid = true
    },
    validateForm() {
      this.isFormValid = true
      if (this.firstName.val === ""){
        this.firstName.isValid = false
        this.isFormValid = false
      }
      if (this.lastName.val === ""){
        this.lastName.isValid = false
        this.isFormValid = false
      }
      if (this.description.val === ""){
        this.description.isValid = false
        this.isFormValid = false
      }
      if (!this.rate.val || this.rate.val < 0){
        this.rate.isValid = false
        this.isFormValid = false
      }
      if (this.areas.val.length === 0){
        this.areas.isValid = false
        this.isFormValid = false
      }
    },
    submitForm() {
      this.validateForm()
      if (!this.isFormValid){
        return
      }
      const formData = {
        firstName: this.firstName.val,
        lastName: this.lastName.val,
        description: this.description.val,
        rate: this.rate.val,
        areas: this.areas.val,
      }
      this.$emit("save-data", formData)
    }
  }
}
</script>