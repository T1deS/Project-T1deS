<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      网站开发维护中，暂时无法访问。
    </p>
    <p>
      The Application is being maintenanced
    </p>
    <h3>You will soon meet us in About October 2021</h3>
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #1e90ff;
}
</style>
