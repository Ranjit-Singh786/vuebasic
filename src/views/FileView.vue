<template>
  <div>
    <table id="main">
      <th class="head"><input type="text" placeholder="Enter Value"></th>
      <th class="head"><input type="text" placeholder="Enter Value"></th>
      <th class="head"><input type="text" placeholder="Enter Value"></th>
      <th class="head"><input type="text" placeholder="Enter Value"></th>
      <tr class="alt" id="row">
        <td><input type="text" placeholder="Enter Value"></td>
        <td><input type="text" placeholder="Enter Value"></td>
        <td><input type="text" placeholder="Enter Value"></td>
        <td><input type="text" placeholder="Enter Value"></td>
      </tr>
      <tr>
        <td><input type="text" placeholder="Enter Value"></td>
        <td><input type="text" placeholder="Enter Value"></td>
        <td><input type="text" placeholder="Enter Value"></td>
        <td><input type="text" placeholder="Enter Value"></td>
      </tr>
      <tr class="alt">
        <td><input type="text" placeholder="Enter Value"></td>
        <td><input type="text" placeholder="Enter Value"></td>
        <td><input type="text" placeholder="Enter Value"></td>
        <td><input type="text" placeholder="Enter Value"></td>
      </tr>
      <tr>
        <td><input type="text" placeholder="Enter Value"></td>
        <td><input type="text" placeholder="Enter Value"></td>
        <td><input type="text" placeholder="Enter Value"></td>
        <td><input type="text" placeholder="Enter Value"></td>
        
      </tr>
      <tr class="alt">
        <td><input type="text" placeholder="Enter Value"></td>
        <td><input type="text" placeholder="Enter Value"></td>
        <td><input type="text" placeholder="Enter Value"></td>
        <td><input type="text" placeholder="Enter Value"></td>
      </tr>
      <tr>
        <td><input type="text" placeholder="Enter Value"></td>
        <td><input type="text" placeholder="Enter Value"></td>
        <td><input type="text" placeholder="Enter Value"></td>
        <td><input type="text" placeholder="Enter Value"></td>
      </tr>
    </table>
    <input
      type="button"
      value="Add New Row"
      @click="addrow()"
      id="rowButton"
    />
    <input
      type="button"
      value="Add New Column"
      @click="addColumn()"
      id="columnButton"
    />
  </div>
</template>

<script>
export default {
  name: "FileView",
  methods: {
    addrow() {
      var table = document.getElementById("main");
      var rws = table.rows;
      var cols = table.rows[0].cells.length;
      var row = table.insertRow(rws.length);
      var cell;
      for (var i = 0; i < cols; i++) {
        cell = row.insertCell(i);
        cell.innerHTML = '<input type="text" placeholder="Enter Value">';
      }
    },

    addColumn() {
      var table = document.getElementById("main");
      var rws = table.rows;
      var cols = table.rows[0].cells.length;
      var cell;
      for (var i = 0; i < rws.length; i++) {
        cell = rws[i].insertCell(cols - 1);
        cell.innerHTML = '<input type="text" placeholder="Enter Value">';
      }
    },
  },
};
</script>

<style scoped>
body {
  margin: 25px 50px;
  background-color: gray;
}

#rowButton {
  background-color: red;
  width: 200px;
  margin-left: 40px;
  border-radius: 5px;
  border-color: #fff;
  border-width: 1px;
}

#columnButton {
  background-color: red;
  width: 200px;
  border-radius: 5px;
  border-color: #fff;
  border-width: 1px;
}
</style>