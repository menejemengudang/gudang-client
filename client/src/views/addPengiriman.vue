 <template>
  <div class="form">
    <b-form-group label="noInduk">
      <b-form-input v-model="form.noInduk" required placeholder="Enter Email"></b-form-input>
    </b-form-group>
    <!-- =================================================== -->
    <!-- =================================================== -->
    <b-form-group label="tahunProduksi">
      <b-form-input v-model="form.tahunProduksi" required placeholder="Enter Email"></b-form-input>
    </b-form-group>
    <b-form-group label="varietas">
      <b-form-input v-model="form.varietas" required placeholder="Enter Email"></b-form-input>
    </b-form-group>
    <!-- ================================================= -->

    <b-form-group label="lot">
      <b-form-input v-model="form.lot" required placeholder="Enter Email"></b-form-input>
    </b-form-group>
    <!-- ================================================= -->
    <!-- =================================================== -->
   
    <!-- ================================================= -->
    <!-- =================================================== -->
    <b-form-group label="produsen">
      <b-form-input v-model="form.produsen" required placeholder="Enter Email"></b-form-input>
    </b-form-group>
    <!-- ================================================= -->
    <!-- =================================================== -->

    <b-form-group label="tujuan">
      <b-form-input v-model="form.tujuan" required placeholder="Enter Email"></b-form-input>
    </b-form-group>
    <b-form-group label="provinsi">
      <b-form-input v-model="form.provinsi" required placeholder="Enter Email"></b-form-input>
    </b-form-group>
    <!-- ================================================= -->
    <!-- =================================================== -->
    <b-form-group label="kabupaten">
      <b-form-input v-model="form.kabupaten" required placeholder="Enter Email"></b-form-input>
    </b-form-group>
    <!-- ================================================= -->
    <!-- =================================================== -->
    <b-form-group label="kecamatan">
      <b-form-input v-model="form.kecamatan" required placeholder="Enter Email"></b-form-input>
    </b-form-group>
    <!-- ================================================= -->
    <!-- =================================================== -->

    <!-- ================================================= -->
    <!-- =================================================== -->
    <b-form-group label="volume">
      <b-form-input v-model="form.volume" required placeholder="Enter Email"></b-form-input>
    </b-form-group>
    <!-- ================================================= -->
    <!-- =================================================== -->
 <!-- ================================================= -->
    <!-- =================================================== -->
    <b-form-group label="nomorSertifikat">
      <b-form-input v-model="form.nomorSertifikat" required placeholder="Enter Email"></b-form-input>
    </b-form-group>
     <!-- ================================================= -->
    <!-- =================================================== -->
         <b-form-group label="tanggalSertifikat">
      <input
        class="form-control"
        type="date"
        id="example-date-input"
        v-model="form.tanggalSertifikat"
        required
      />
    </b-form-group>
     <!-- ================================================= -->
    <!-- =================================================== -->
    <b-form-group label="tanggalKedaluarsa">
      <input
        class="form-control"
        type="date"
        id="example-date-input"
        v-model="form.tanggalKedaluarsa"
        required
      />
    </b-form-group>
    <!-- ================================================= -->
    <!-- =================================================== -->
    <b-form-group label="instansi">
      <b-form-input v-model="form.instansi" required placeholder="Enter Email"></b-form-input>
    </b-form-group>
     <!-- ================================================= -->
    <!-- =================================================== -->
    <b-form-group label="tanggalPengiriman">
      <input
        class="form-control"
        type="date"
        id="example-date-input"
        v-model="form.tanggalPengiriman"
        required
      />
    </b-form-group>
     <!-- ================================================= -->
    <!-- =================================================== -->
    <b-form-group label="sopir">
      <b-form-input v-model="form.supir" required placeholder="Enter Email"></b-form-input>
    </b-form-group>
     <!-- ================================================= -->
    <!-- =================================================== -->
    <b-form-group label="plat">
      <b-form-input v-model="form.plat" required placeholder="Enter Email"></b-form-input>
    </b-form-group>
     <!-- ================================================= -->
    <!-- =================================================== -->
     
    <button type="button" class="btn btn-warning" v-on:click="add()">add Pengiriman</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
       noInduk: "",
        tahunProduksi: "",
        varietas: "",
        lot: "",
        produsen: "",
        tujuan: "",
        provinsi: "",
        kabupaten: "",
        kecamatan: "",
        volume: "",
        nomorSertifikat: "",
        tanggalSertifikat: "",
        tanggalKedaluarsa: "",
        instansi: "",
        tanggalPengiriman: "",
        supir: "",
        plat: ""
      }
    };
  },
  methods: {
    add() {
      // console.log('okoko')

      this.$api
        .post("http://localhost:3000" + "/pengiriman/add", this.form)
        .then(({ data }) => {
          this.$swal({
            title: `Success!`,
            text: ` your product added `,
            type: "success",
            showConfirmButton: false,
            timer: 1500
          });
          this.$router.push("/pengiriman");
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
