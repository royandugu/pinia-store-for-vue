To validate input fields in a Vue application and highlight them with a red border if they are empty during form submission, you can follow a structured approach. Here's a simple and scalable solution:

✅ Step-by-step Implementation
1. Bind input fields to v-model
Bind each input to a data property.

2. Track validation errors
Use a errors object (or similar) to track which fields are invalid.

3. Add conditional class for red border
Use :class to add a red border class based on validation.

4. Validate on form submission
🔧 Example
vue
Copy
Edit
<template>
  <form @submit.prevent="handleSubmit">
    <div v-for="(field, index) in fields" :key="index" class="input-wrapper">
      <input
        v-model="formData[field]"
        @input="clearError(field)"
        :class="{ 'error-border': errors[field] }"
        :placeholder="`Enter ${field}`"
      />
    </div>
    <button type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      fields: ['name', 'email', 'phone'], // You can modify/add more
      formData: {
        name: '',
        email: '',
        phone: '',
      },
      errors: {}
    };
  },
  methods: {
    handleSubmit() {
      this.errors = {};

      // Validate all fields
      for (let field of this.fields) {
        if (!this.formData[field]) {
          this.errors[field] = true;
        }
      }

      if (Object.keys(this.errors).length === 0) {
        // All good, submit form
        alert("Form submitted successfully!");
      }
    },
    clearError(field) {
      if (this.formData[field]) {
        this.$delete(this.errors, field);
      }
    }
  }
};
</script>

<style scoped>
.input-wrapper input {
  border: 1px solid #ccc;
  padding: 8px;
  margin: 10px 0;
}

.error-border {
  border-color: red;
}
</style>
✅ Notes
The :class="{ 'error-border': errors[field] }" line applies the red border when the field is marked in the errors object.

@input="clearError(field)" removes the error when the user starts typing.

This setup is scalable for any number of fields.

Would you like a version that uses Vue 3 with the Composition API or script setup?




