<template>
    <form v-on:submit.prevent="submitData">
        <div>
            <label for="name">Remplir le formumlaire:</label>
            <input v-model="enteredName" type="text" id="name" >
        </div>
        <div>
            <label for="age"></label>
            <input v-model="enteredAge" type="text" id="age" >
        </div>
        <button >Envoyer</button>
    </form>
    
</template>

<script>
 export default
    {
        emits:
        [
            'add-user',
        ],
        data()
        {
            return{
                enteredName:"",
                enteredAge:"",
            }
        },
        methods:
        {
            submitData()
            {
                
                this.$emit('add-user',this.enteredName,this.enteredAge);
                console.log(this);
            }
        },
    }

</script>

<style >
</style>