<template>
  <div class="ver_2part">
    <div class="ver_top">
      <slot name="top"></slot>
    </div>
    <div class="ver_bottom">
      <slot name="bottom"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Vertical2Part',
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
.ver_2part {
  height:100%;
  width:100%;
  display:flex;
  flex-direction:column;
  .ver_top{
    flex:1;
    width:100%;
    height: 50%;
  }
  .ver_bottom{
    flex:1;
    width:100%;
    height: 50%;
  }
}

</style>
