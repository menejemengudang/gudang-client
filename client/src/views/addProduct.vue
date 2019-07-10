 <template>
  <div class="form">
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

    <button type="button" class="btn btn-warning" v-on:click="add( )">add Product</button>
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
    add() {
      // console.log('okoko')

      this.$api
        .post("http://localhost:3000" + "/product/add", this.form)
        .then(({ data }) => {
          this.$swal({
            title: `Success!`,
            text: ` your product added `,
            type: "success",
            showConfirmButton: false,
            timer: 1500
          });
          this.$router.push("/stock");
          this.onReset();
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
  }
};
</script>

<style scoped>
.form {
  margin: 50px;
  /* padding: 50px; */
}
</style>
