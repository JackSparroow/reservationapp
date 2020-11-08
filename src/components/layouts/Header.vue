<template>
 <nav className="navbar bg-primary">

            <h1>{{title}}</h1>
        <ul>
           <li><router-link to="/">Home </router-link></li>
           <li><router-link to="/appointments">Appointments </router-link></li>
            <li><router-link to="/faq">FAQ </router-link></li>
        </ul>
        </nav>
</template>

<script>
export default {
  name: "Header",
  setup(props){
    console.log(props.title)
  },
  props:{
    title:{
      type:String
    }
  }
};
</script>
<style scoped>
 
</style>
