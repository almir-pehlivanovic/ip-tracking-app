<template>
  <div class="flex flex-col h-screen max-h-screen">
    <!-- Search / Results -->
    <div
      class="
        flex
        justify-center
        relative
        bg-hero-pattern bg-cover
        px-4
        pt-8
        pb-32
      "
    >
      <!-- Search input -->
      <div class="w-full max-w-screen-sm">
        <h1 class="text-white text-center text-3xl pb-4">IP Adress Tracker</h1>
        <div class="flex">
          <input
            class="
              flex-1
              py-3
              px-2
              rounded-tl-md rounded-bl-md
              focus:outline-none
            "
            type="text"
            placeholder="Search for any IP address or leave empty to get your ip info"
          />
          <span
            class="
              cursor-pointer
              bg-black
              text-white
              px-4
              rounded-tr-md rounded-br-md
              flex
              items-center
            "
          >
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span>
        </div>
      </div>
      <!-- IP info -->
      <IPInfo />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import IPInfo from "../components/IPInfo.vue";

export default {
  name: "Home",
  components: {
    IPInfo,
  },
};
</script>
