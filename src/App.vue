<template>
  <div id="conatiner">
    <active-user v-bind:Nom = 'Name' v-bind:Age = 'Age'></active-user>
    <user-data @add-user="afficherunInput"></user-data>
    
  </div>
  
  

</template>

<script>
export default
    {
     
        data()
        {
            return{
              Name:'',
              Age:'',
            }
        },
        methods:
        {
            afficherunInput(a , b)
            {
              console.log(a,b)
              this.Name = a;
                  this.Age = b;
                console.log(this.Age)

            }
        },
    }

</script>


<style >
</style>