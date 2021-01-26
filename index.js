new Vue({
  el: "#app",
  data() {
    return {
      fname: null,
      name: null,
      shukais: [],
      daylys: [],
      weeklys: [],
      devides: []
    };
  },
  mounted() {
    axios.get("vu.json").then((response) => {
      this.fname = response.data.fname;
      this.name = response.data.name;
      this.shukais = response.data.shukais;
      this.daylys = response.data.daylys;
      this.weeklys = response.data.weeklys;
      this.devides = response.data.devides;
    });
  },
  methods: {
    save: function (event) {
      axios.post("output.php", {
        fname: this.fname,
        name: this.name,
        shukais: this.shukais,
        daylys: this.daylys,
        weeklys: this.weeklys,
        devides: this.devides
      });
    }
  }
});
