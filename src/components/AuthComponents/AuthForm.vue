<template>
  <div class="flex flex-column max-w-15rem">
    <div class="p-inputgroup mt-2">
      <span class="p-inputgroup-addon">
          <i class="pi pi-envelope"></i>
      </span>
      <InputText placeholder="Email" v-model.trim="email"/>
    </div>
    <div class="p-inputgroup mt-2">
      <span class="p-inputgroup-addon">
          <i class="pi pi-lock"></i>
      </span>
      <Password placeholder="Password" v-model.trim="password" toggleMask :feedback="false"/>
    </div>
    <Button label="Войти" class="w-12 mt-2" @click="signIn"/>
    <Button label="Войти через Google" icon="pi pi-google" class="p-button-text shadow-1 mt-2 text-black-alpha-70" @click="{}"/>
  </div>
</template>

<script>
import Password from 'primevue/password'
import InputText from 'primevue/inputtext'
import { mapGetters } from 'vuex'
import router from '@/router'

export default {
  name: 'AuthForm',
  data: () => ({
    email: null,
    password: null
  }),
  methods: {
    signIn () {
      this.$store.dispatch('loginWithEmailAndPassword', { email: this.email, password: this.password })
    }
  },
  computed: {
    ...mapGetters({
      user: 'getUser'
    })
  },
  watch: {
    user: function () {
      if (this.user) router.push('/')
    }
  },
  mounted () {
    if (this.user) router.push('/')
  },
  components: {
    Password,
    InputText
  }
}
</script>

<style scoped>

</style>
