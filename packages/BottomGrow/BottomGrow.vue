<template>
  <div class="btm_grow">
    <div>
      <slot></slot>
    </div>
    <div class="grw_part">
      <slot name="grow"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BottomGrow',
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
.btm_grow {
  height:100%;
  width:100%;
  display:flex;
  flex-direction:column;
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
