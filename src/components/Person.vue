<template>
  <div v-if="currentPerson" class="person">
    <label>ФИО
      <input v-model="currentPerson.name" type="text">
    </label>
    <label>Организация
      <input v-model="currentPerson.company" type="text">
    </label>
    <label>Подразделение
      <input v-model="currentPerson.department" type="text">
    </label>
    <label>Должность
      <input v-model="currentPerson.profession" type="text">
    </label>
    <button type='button' @click="apply">Применить</button>
  </div>
</template>

<script>
export default {
  name: 'CurrentPerson',
  data() {
    return {
      list: {},
      currentPerson: null,
    };
  },
  computed: {
    personId() {
      return this.$route.params.id;
    },
  },
  methods: {
    apply() {
      this.list[this.personId] = this.currentPerson;
      localStorage.list = JSON.stringify(this.list)
      this.$router.push(`/`);
    }
  },
  created() {
    this.list = JSON.parse(localStorage.list)

    if (this.personId in this.list) {
      this.currentPerson = this.list[this.personId]
    } else {
      this.currentPerson = {
        name: '',
        id: this.personId,
        company: '',
        department: '',
        profession: '',
      }
    }
  },
};
</script>

<style scoped>
  .person {
    margin: auto;
    width: 300px;
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    gap: 20px;
  }

  label {
    text-align: left;
  }

  input {
    width: 98%;
  }
</style>