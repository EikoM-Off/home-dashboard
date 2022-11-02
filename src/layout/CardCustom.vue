<template>
  <div class="p-component flex flex-column p-3">
    <div class="">
      <slot name="header" />
    </div>
    <div class="text-700 text-3xl text-black-alpha-80 font-bold pt-2 pb-2">
      <slot name="title" />
    </div>
    <div class="flex-grow-1">
      <slot name="content" />
    </div>
    <div class="pt-2 pb-2">
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardCustom'
}
</script>

<style scoped></style>
