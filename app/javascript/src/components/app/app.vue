<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import LayoutHeader from "../components/layout/LayoutHeader.vue";
export default {
  components: { LayoutHeader },
}
</script>