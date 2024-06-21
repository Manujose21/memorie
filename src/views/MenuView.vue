<template>
  <div class="flex flex-col gap-2 justify-center items-center">
    <p class="text-3xl">Memoria sipider-man</p>
    <img src="../assets/images/spider-menu.png" class="h-48 w-52" alt="" />
    <button @click="STATE_APP = 'GAME'">Jugar</button>
  </div>
</template>

<script setup lang="ts">
import { useStateApp } from '@/composables/useStateApp'

const { STATE_APP } = useStateApp()
</script>

<style scoped></style>
