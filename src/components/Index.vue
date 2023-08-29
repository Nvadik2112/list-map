<template>
  <div v-if="list" class="main">
    <table>
      <thead>
      <tr>
        <th>ФИО</th>
        <th>Организация</th>
        <th>Подразделение</th>
        <th>Должность</th>
      </tr>
      </thead>
      <tbody>
        <tr
            v-for="item in mappedList"
            :key="item.id"
            @click="openModal(item.id)"
            class="table-item"
            :class="{ 'table-item--active': item.id === personId }"
        >
          <td>
            {{ item.name }}
          </td>
          <td>{{ item.company }}</td>
          <td>{{ item.department }}</td>
          <td>{{ item.profession }}</td>
        </tr>
      </tbody>
    </table>
    <div class="modal">
      <button type="button" style="width: 200px;" @click="clearLocalStorage">Очистить localStorage</button>
      <div class="modal_item" @click="createNewPerson">
        Создать нового сотрудника
      </div>
      <div v-if="personId" class="modal_item" @click="editPerson">
        Отредактировать существующего сотрудника
      </div>
      <div v-if="personId" class="modal_item" @click="deletePerson">Удалить сотрудника</div>
    </div>
  </div>
</template>

<script>

export default {
  name: "App",
  data() {
    return {
      personId: null,
      list: {},
    };
  },
  computed: {
    mappedList() {
      return Object.values(this.list);
    }
  },
  methods: {
    clearLocalStorage() {
      this.list = null;
      localStorage.removeItem('list');
    },
    openModal(id) {
      this.personId = id;
    },
    closeModal() {
      this.personId = null;
    },
    createNewPerson() {
      this.$router.push(`/person/${Number(Object.keys(this.list)[this.mappedList.length - 1]) + 1}`);
      this.closeModal();
    },
    editPerson() {
      this.$router.push(`/person/${this.personId}`);
      this.closeModal();
    },
    deletePerson() {
      delete this.list[this.personId];
      localStorage.list = JSON.stringify(this.list)
      this.closeModal();
    },
  },
  created() {
    this.list = JSON.parse(localStorage.list);
  },
};
</script>

<style scoped>
  table {
    border-collapse: collapse;
  }

  tr {
    border: 1px solid black;
  }

  th,
  td {
    padding: 10px;
  }

  .table-item {
    cursor: pointer;
  }

  .table-item:hover {
    background-color: bisque;
  }

  .table-item--active {
    background-color: azure !important;
  }

  .modal {
    position: fixed;
    top: 50px;
    right: 20px;
    background-color: white;
    padding: 10px;
    display: flex;
    width: 300px;
    flex-direction: column;
    gap: 10px;
  }

  .modal_item {
    cursor: pointer;
    text-align: left;
  }
</style>