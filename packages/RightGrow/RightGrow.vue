<template>
  <div class="rit_grow">
    <div class="aut_part">
      <slot></slot>
    </div>
    <div class="grw_part">
      <slot name="grow"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RightGrow',
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
.rit_grow {
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
