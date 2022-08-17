<template>
  <div class="sql-table">
    <table class="table">
      <thead>
        <tr>
          <th class="text-center">id</th>
          <th class="text-center" style="width: 5rem">userId</th>
          <th>title</th>
          <th>description</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(table, index) in data" :key="index">
          <td class="text-center">{{index + 1}}</td>
          <td class="text-center">{{table.userId}}</td>
          <td>{{table.title}}</td>
          <td>{{table.body}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'TableResults',
  props: {
    data: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .sql-table {
    margin-top: 20px;
  }

  .text-center {
    text-align: center;
  }

  .table {
    border-collapse: collapse;
    border: 2px solid #ddd;
  }

  .table th {
    border: 1px solid #ddd;
    padding: 5px 10px;
  }
  .table td {
    border-right: 1px solid #ddd;
    padding: 5px 10px;
  }
</style>
