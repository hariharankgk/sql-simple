<template>
  <div id="app">
    <div class="sql-container">
      <p>Table Name: users</p>
      <div class="query-box">
        <input type="text" class="input-box" v-model="queryString" placeholder="Enter your Query...">
        <button class="submit-btn" type="button" @click="runSqlQuery()">Submit</button>
      </div>
      <TableResults :data="tableData" />
    </div>
  </div>
</template>

<script>
import TableResults from './components/TableResults.vue'
import { mapActions } from "vuex";

export default {
  name: 'App',
  components: {
    TableResults
  },
  data() {
    return {
      queryString: '',
      key: '',
      value: ''
    }
  },
  computed: {
    tableData() {
      if(this.key && this.value) {
        return this.$store.getters.tableList.filter((item) => item[this.key] == this.value); 
      }
      return this.$store.getters.tableList;
    }
  },
  methods: {
    ...mapActions(["fetchTable"]),
    getValue(array, col, position) {
      if(array.length > 4) {
        return array[array.indexOf(col) + position];
      }
      return;
    },
    checkString(values) {
      const string = values.split(" ").map(data => { 
        let value = data;
        if(value === 'SELECT' || value === 'FROM' || value === 'WHERE') {
          value = value.toLowerCase();
        }
        return value;
       });
       return string;
    },
    runSqlQuery() {
      const query = this.checkString(this.queryString);
      this.key = this.getValue(query, 'where', 1);
      this.value = this.getValue(query, 'where', 3);
      console.log(this.key);
      console.log(this.value);
    },
    filterData(key, value) {
      const tableList = this.$store.getters.tableList;
      const filterList = tableList.filter((item) => item[key] == value);
      return filterList; 
    }
  },
  mounted() {
    this.fetchTable();
  }
}
</script>

<style>
*, body {
  margin: 0;
}

.sql-container {
  padding: 30px;
}

.query-box {
  display: flex;
}
.query-box .input-box {
  padding: 10px 15px;
  border-radius: 4px;
  width: 40%;
  border: 2px solid #ddd;
}

.query-box .submit-btn {
  margin-left: 20px;
  background-color: #00718F;
  color: #fff;
  box-shadow: none;
  border-radius: 4px;
  border: none;
  padding: 10px 20px;
}
</style>
