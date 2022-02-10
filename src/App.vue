<template>
  <router-view></router-view>
</template>


<style>
.card {
  box-shadow: 0px 1px 11px -1px rgba(0, 0, 0, 0.53);
  -webkit-box-shadow: 0px 1px 11px -1px rgba(0, 0, 0, 0.53);
  -moz-box-shadow: 0px 1px 11px -1px rgba(0, 0, 0, 0.53);
}

.quantity {
  display: flex;
  align-items: center;
}
.quantity input {
  width: 20px;
  padding: 0 5px;
  margin: 0 5px;
  border: 0;
  outline: none;
  font-size: initial;
}
.quantity span {
  font-size: 18px;
  cursor: pointer;
}
a,
h1,
h4 {
  text-decoration: none !important;
  color: #000000;
}
</style>
