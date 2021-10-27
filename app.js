const App = {
  data() {
    return {
      placeholderString: "Введите название заметки",
      title: "Список заметок",
      inputValue: "",
      notes: ["test note 1", "test note 2"],
    };
  },
  methods: {
    inputChangeHandler(event) {
      this.inputValue = event.target.value;
    },
    addNewNote() {
      this.notes.push(this.inputValue);
      this.inputValue = "";
    },
    deleteNode(index) {
      this.notes.splice(index, 1);
    },
  },
};

Vue.createApp(App).mount("#app");
