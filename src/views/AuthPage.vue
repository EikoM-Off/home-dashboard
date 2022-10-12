<template>
  <div class="flex flex-column align-items-center w-12">
    <AuthForm />
  </div>
</template>

<script>
import AuthForm from '@/components/AuthComponents/AuthForm'
export default {
  name: 'AuthPage',
  components: {
    AuthForm
  }
}
</script>

<style scoped>

</style>
