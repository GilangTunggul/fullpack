<template>
  <v-parallax
    src="@/views/Image/bk2.jpg"
    dark
    height="700"
  >
  <v-row>
    <v-col
    md="6"
    offset-md="3">
  <v-card
    class="mx-auto mt-5"
    max-width="600"
    color="yellow lighten-3"
  >
    <v-card-title class="text-center justify-center py-6">
       <h2
        class="display-1 font-weight-bold"
        align="center"
        justify="center"
         >{{ currentTitle }}</h2>
    </v-card-title>

    <v-window v-model="step">
      <v-window-item :value="1">
        <v-card-text>
          <v-form
      ref="form"
      v-model="valid"
      lazy-validation
      solo
     >
          <v-text-field
            v-model="email"
            label="Email"
            value=""
            :rules="emailRules"
            filled
            required
          ></v-text-field>
          <v-text-field
            v-model="password"
            :rules="[rules.required, rules.min]"
            label="Password"
            :type="passwordd ? 'text' : 'password'"
            name="input-10-2"
            hint="At least 8 characters"
            filled
            required
          ></v-text-field>
          </v-form>
          <span class="caption grey--text text--darken-1">
            This is the email and password you will use to login to your Admin account
          </span>
        </v-card-text>
      </v-window-item>

      <v-window-item :value="2">
        <div class="pa-4 text-center">
          <v-img
            class="mb-4"
            contain
            height="128"
            src="@/views/Image/logosts.png"
          ></v-img>
          <h3 class="title font-weight-light mb-2">Welcome to Admin account</h3>
          <span class="caption grey--text">Welcome!</span>
        </div>
      </v-window-item>
    </v-window>

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn
        :disabled="step === 1"
        text
        @click="step--"
      >
        Back
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
        :disabled="step === 2"
        color="primary"
        depressed
        @click="step++"
      >
        Next
      </v-btn>
    </v-card-actions>
  </v-card>
</v-col>
</v-row>
    <v-snackbar
      v-model="snackbar"
      :vertical="vertical"
      color="red"
    >
      {{ text }}
      <v-btn
        color="black"
        text
        justify="center"
        @click="snackbar = false"
      >
        Close
      </v-btn>
    </v-snackbar>

</v-parallax>
</template>
<script>
  export default {
    name: 'Admin',
    data: () => ({
    step: 1,
    email: '',
    password: '',
    snackbar: false,
    text: 'Sorry But Password or Email Incorrect',
    passwordd: false,
    valid: true,
    emailRules: [
    v => !!v || 'Email is required',
    v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
    rules: {
          required: value => !!value || 'Password is Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
        },
    }),

    computed: {
      currentTitle () {
        switch (this.step) {
          case 1: return 'Login Admin'
          default: return 'Admin Account'
        }
      },
    },
    methods : {
        validate () {
        if (this.$refs.form.validate()) {
          this.snackbar = true
        }
      },
    }
  };
</script>