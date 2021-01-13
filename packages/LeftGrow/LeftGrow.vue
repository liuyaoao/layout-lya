<template>
  <div class="lft_grow">
    <div class="grw_part">
      <slot name="grow"></slot>
    </div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LeftGrow',
  data(){
    return {
    }
  },
  mounted(){
  },
  methods:{
  }
}

</script>
<style lang="scss" scoped>
.lft_grow {
  height:100%;
  width:100%;
  display:flex;
  // flex-direction:column;
  .aut_part{
    flex-shrink:0;
  }
  .grw_part{
    flex-grow: 1;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
}

</style>
