<template>
    <div>{{Nom}}</div>
    <div>{{Age}}</div>
 
</template>

<script>
    export default
    {
     props:
      {
          Age:
          {
              type:Number,
              
          },
          Nom:
          {
              type:String,
             
                  
          },
        },
    }
</script>

<style >
</style>