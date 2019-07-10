 <template>
  <div class="form">
    <!-- =================================================== -->
    <b-form-group label="Penyedia">
      <b-form-input v-model="form.penyedia" required placeholder="Enter Email"></b-form-input>
    </b-form-group>
    <!-- =================================================== -->
    <!-- =================================================== -->
    <b-form-group label="Perusahaan">
      <b-form-input v-model="form.perusahaan" required placeholder="Enter Email"></b-form-input>
    </b-form-group>
    <b-form-group label="kelompok">
      <b-form-input v-model="form.kelompok" required placeholder="Enter Email"></b-form-input>
    </b-form-group>
    <!-- ================================================= -->

    <b-form-group label="volume">
      <b-form-input v-model="form.volume" required placeholder="Enter Email"></b-form-input>
    </b-form-group>
    <!-- ================================================= -->
    <!-- =================================================== -->
    <b-form-group label="tanggal tanam">
      <input
        class="form-control"
        type="date"
        id="example-date-input"
        v-model="form.tanggalTanam"
        required
      />
    </b-form-group>
    <!-- ================================================= -->

    <!-- =================================================== -->
    <b-form-group label="tanggal panen">
      <input
        class="form-control"
        type="date"
        id="example-date-input"
        v-model="form.tanggalPanen"
        required
      />
    </b-form-group>
    <!-- ================================================= -->
    <!-- =================================================== -->
    <b-form-group label="lokasiPenanaman">
      <b-form-input v-model="form.lokasiPenanaman" required placeholder="Enter Email"></b-form-input>
    </b-form-group>
    <!-- ================================================= -->
    <!-- =================================================== -->

    <b-form-group label="suratJalan">
      <b-form-input v-model="form.suratJalan" required placeholder="Enter Email"></b-form-input>
    </b-form-group>
    <b-form-group label="kelayakan">
      <b-form-input v-model="form.kelayakan" required placeholder="Enter Email"></b-form-input>
    </b-form-group>
    <!-- ================================================= -->
    <!-- =================================================== -->
    <b-form-group label="kadarAir">
      <b-form-input v-model="form.kadarAir" required placeholder="Enter Email"></b-form-input>
    </b-form-group>
    <!-- ================================================= -->
    <!-- =================================================== -->
    <b-form-group label="gradeBenih">
      <b-form-input v-model="form.gradeBenih" required placeholder="Enter Email"></b-form-input>
    </b-form-group>
    <!-- ================================================= -->
    <!-- =================================================== -->

    <!-- ================================================= -->
    <!-- =================================================== -->
    <b-form-group label="labelSertifikasi">
      <b-form-input v-model="form.labelSertifikasi" required placeholder="Enter Email"></b-form-input>
    </b-form-group>
    <!-- ================================================= -->
    <!-- =================================================== -->

    <button type="button" class="btn btn-warning" v-on:click="save( )">save</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        penyedia: "",
        perusahaan: "",
        kelompok: "",
        volume: "",
        tanggalTanam: "",
        tanggalPanen: "",
        lokasiPenanaman: "",
        suratJalan: "",
        kelayakan: "",
        kadarAir: "",
        gradeBenih: "",
        labelSertifikasi: ""
      }
    };
  },
  methods: {
    loadData() {
      // var id = localStorage.getItem("tg");
      var id = this.$route.params.id;

      // console.log(id);
      this.$api
        .get("http://localhost:3000" + `/product/edit/${id}`)
        .then(({ data }) => {
          this.form = data[0];
        })
        .catch(({ response }) => {
          this.$swal({
            title: `Opps!`,
            text: `${response.data.message}`,
            type: "error",
            timer: 2500
          });
        });
    },
    clear() {
      this.form.noInduk = "";
      this.form.tahunProduksi = "";
      this.form.jenis = "";
      this.form.lot = "";
      this.form.tujuan = "";
      this.form.produsen = "";
      this.form.alamatTujuan = "";
      this.form.alamatProdusen = "";
      this.form.volume = "";
      this.form.label = "";
      this.form.tanggalProduksi = "";
      this.form.tanggalExp = "";
      this.form.instansi = "";
    },
    save() {
      var id = this.$route.params.id;
      console.log(id);
      this.$api
        .post("http://localhost:3000" + `/product/edit/${id}`, this.form)
        .then(({ data }) => {
          // console.log(data[0]);
          this.clear();
          this.$router.push("/stock");
        })
        .catch(({ response }) => {
          this.$swal({
            title: `Opps!`,
            text: `${response.data.message}`,
            type: "error",
            timer: 2500
          });
        });
    }
  },
  mounted() {
    this.loadData();
  }
};
</script>

<style scoped>
.form {
  margin: 50px;
  /* padding: 50px; */
}
</style>
