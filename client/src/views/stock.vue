<template>
  <div class="container">
    <button
      v-if="onStage==true"
      type="button"
      class="btn btn-success tombol"
      v-on:click="addProduct(true)"
    >add Product</button>
    <center>
      <h3 v-if="onStage==false" class="judul">you must login first</h3>
    </center>
    <table class="table table-striped" v-if="onStage==true">
      <thead>
        <tr>
          <th>NO.</th>
          <th>Penyedia Benih</th>
          <th>Perusahaan</th>
          <th>Kelompok Tani</th>
          <th>Volume</th>
          <th>Tgl Penanaman</th>
          <th>Tgl Panen</th>
          <th>Lokasi Penanaman</th>
          <th>Surat Jalan</th>
          <th>Kelayakan</th>
          <th>Kadar Air</th>
          <th>Grade Benih</th>
          <th>Label Sertifikasi/th></th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody v-for=" (item,index) in dataList " v-bind:key="item._id">
        <tr>
          <td>{{index+1}}</td>
          <td>{{item.penyedia}}</td>
          <td>{{ item.perusahaan}}</td>
          <td>{{ item.kelompok}}</td>
          <td>{{ item.volume}}</td>
          <td>{{ item.tanggalTanam}}</td>
          <td>{{ item.tanggalPanen}}</td>
          <td>{{ item.lokasiPenanaman}}</td>
          <td>{{ item.suratJalan}}</td>
          <td>{{ item.kelayakan}}</td>

          <td>{{ item.kadarAir}}</td>

          <td>{{ item.gradeBenih}}</td>

          <td>{{ item.labelSertifikasi}}</td>

          <td>
            <button type="button" class="btn btn-info" v-on:click="edit(item._id,index)">edit</button>
          </td>
          <td>
            <button type="button" class="btn btn-info" v-on:click="remove(item._id,index)">delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        tahunProduksi: "",
        jenis: "",
        lot: "",
        produsen: "",
        provinsi: "",
        kabupaten: "",
        kecamatan: "",
        tujuan: "",
        volume: "",

        label: "",
        tanggalProduksi: "",
        tanggalExp: "",
        instansi: ""
      },
      dataList: [],
      onStage: true
    };
  },

  methods: {
    loadData() {
      this.$api
        .get("http://localhost:3000" + "/product/all")
        .then(({ data }) => {
          this.dataList = data;
        })
        .catch(({ response }) => {
          // console.log(response.data);
          this.$swal({
            title: `Opps!`,
            text: `cant load data`,
            type: "error",
            timer: 2500
          });
        });
    },
    addProduct() {
      this.$router.push("addProduct");
    },
    remove(ID, index) {
      // console.log(ID);
      var result = [];
      var cek = true;
      this.$api
        .delete("http://localhost:3000" + `/product/remove/${ID}`)
        .then(({ data }) => {
          for (var i = 0; i < this.dataList.length; i++) {
            if (i == index) {
              cek = false;
            }
            if (cek == true) {
              result.push(this.dataList[i]);
            }
          }
          this.dataList = result;
        })
        .catch(({ response }) => {
          // console.log(response.data);
          this.$swal({
            title: `Opps!`,
            text: `cant load data`,
            type: "error",
            timer: 2500
          });
        });
    },
    edit(ID, index) {
      this.$router.push({ name: "edit", params: { id: ID } });
    },
    verify() {
      // console.log("masio ngantok panggah tak tlateni");

      var tg = localStorage.getItem("tg");
      if (!localStorage.getItem("tg")) {
        this.onStage = false;
      }
    }
  },
  mounted() {
    this.loadData();
    this.verify();
  },
  watch: {
    dataList: function(val) {
      this.dataList = val;
    }
  }
};
</script>
<style scoped>
.tombol {
  margin: 10px;

  /* padding: 50px; */
}
.judul {
  margin: 20px;
}
</style>
