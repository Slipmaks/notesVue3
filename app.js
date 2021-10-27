const App = {
  data() {
    return {
      placeholderString: "Enter new note",
      title: "Notes list",
      inputValue: "",
      notes: [],
    };
  },
  methods: {
    addNewNote() {
      if (this.inputValue !== "") {
        this.notes.push(this.inputValue);
        this.inputValue = "";
      }
    },
    toUpperCase(item) {
      return item.toUpperCase();
    },
    deleteNode(index) {
      this.notes.splice(index, 1);
    },
  },
  computed: {},
  watch: {},
};

Vue.createApp(App).mount("#app");
