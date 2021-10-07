<template>
  <div class="home container mx-auto">
    <button @click="showCard = !showCard" class="btn">
      Mostrar card
    </button>

    <div class="card animate-fade-in" v-if="showCard">
      <div class="flex-shrink-0">
        <img class="h-12 w-12" src="@/assets/logo.png" alt="ChitChat Logo">
      </div>
      <div class="ml-6 pt-1">
        <h4 class="text-xl text-gray-900 leading-tight">ChitChat</h4>
        <p class="text-base text-gray-600 leading-normal">You have a new message!</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      showCard: false
    }
  }
}
</script>

<style lang="scss">
.card {
  @apply max-w-sm mx-auto flex p-3 bg-white rounded-lg shadow-xl
}
.btn {
  @apply font-bold py-2 px-4 rounded bg-black-500 text-white mb-6;

  &:hover {
    @apply bg-black-700;
  }
  }

</style>
