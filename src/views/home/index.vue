<template>

</template>

<script setup>



</script>

<style scoped>

.card-row {
  display: flex;
  justify-content: space-between;
}
.card-row-top {
  display: flex;
  align-items: center;
}
.card-title {
  font-size: 16px;
  font-weight: bold;
}
.card {
  background: #ffffff;
  height: 150px;
  width: 320px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  padding: 10px 15px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}
.card-content {
  width: 100%;
  margin-top: 15px;
  color: #a5a5a5;
  font-size: 12px;
  line-height: 1.5;
}
.card-bottom {
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
}
.card:hover {
  transform: scale(1.03);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
}
</style>
