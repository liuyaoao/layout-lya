<template>
  <div class="btm_grow">
    <div>
      <!-- 自身固定高度的元素默认放这里 -->
      <slot></slot>
    </div>
    <div class="grw_part">
      <!-- 占据剩余说有高度的元素放这里 -->
      <slot name="grow"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name:'bottomGrow',
  components:{},
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
<style scoped>
.btm_grow {
  height:100%;
  width:100%;
  display:flex;
  flex-direction:column;
}
.btm_grow .aut_part{
  flex-shrink:0;
}
.btm_grow .grw_part{
  flex-grow: 1;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

</style>
