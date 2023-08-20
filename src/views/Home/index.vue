<script setup lang="ts">
import { CHAPTER__CONFIGURATION } from '@/constants'
</script>

<template>
  <div class="home absolute inset-0 flex flex-col justify-center items-center">
    <!-- <div></div> -->
    <div class="flex mt-20px">
      <div
        v-for="chapter in CHAPTER__CONFIGURATION"
        :key="chapter.id"
        class="-mr-40px last:mr-0"
      >
        <img
          :src="chapter.img"
          class="w-auto h-60vh sm:h-66vh lg:h-45vh"
          :class="{
            'filter-grayscale': chapter.disabled,
          }"
          alt=""
        />
        <!-- h-32vw -->
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
$bg_path: 'home_bg.png';
.home {
  width: 1334px;
  height: 100%;
  background: resolve($bg_path) no-repeat center;
  background-size: 1334px 100%;
}
</style>
