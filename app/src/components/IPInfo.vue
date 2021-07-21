<template>
  <div
    class="
      absolute
      -bottom-52
      lg:-bottom-20
      flex flex-col
      lg:flex-row
      bg-white
      gap-y-4 gap-x-12
      p-8
      rounded-md
      shadow-md
    "
  >
    <!-- Flex item #1 -->
    <div class="flex flex-col">
      <h3 class="text-xs sm:mb-2 uppercase">IP Address</h3>
      <span class="text-xl sm:text-2xl">{{ ipInfo.address }}</span>
    </div>
    <!-- Flex item #2 -->
    <div class="flex flex-col">
      <h3 class="text-xs sm:mb-2 uppercase">Location</h3>
      <span class="text-xl sm:text-2xl">{{ ipInfo.state }}</span>
    </div>
    <!-- Flex item #3 -->
    <div class="flex flex-col">
      <h3 class="text-xs sm:mb-2 uppercase">Timezone</h3>
      <span class="text-xl sm:text-2xl">UTC{{ ipInfo.timezone }}</span>
    </div>
    <!-- Flex item #4 -->
    <div class="flex flex-col">
      <h3 class="text-xs sm:mb-2 uppercase">Isp</h3>
      <span class="text-xl sm:text-2xl">{{ ipInfo.isp }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["ipInfo"],
};
</script>