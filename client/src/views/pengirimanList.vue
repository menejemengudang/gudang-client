<template>
  <div class="container">
    <button
      v-if="onStage==true"
      type="button"
      class="btn btn-success tombol"
      v-on:click="addProduct(true)"
    >add Pengiriman</button>
    <center>
      <h3 v-if="onStage==false" class="judul">you must login first</h3>
    </center>
    <table class="table table-striped" v-if="onStage==true">
      <thead>
        <tr>
          <th>NO.</th>
          <th>noInduk</th>
          <th>tahunProduksi</th>
          <th>varietas</th>
          <th>lot</th>
          <th>produsen</th>
          <th>tujuan</th>
          <th>provinsi</th>
          <th>kabupaten</th>
          <th>kecamatan</th>
          <th>volume</th>
          <th>nomorSertifikat</th>
          <th>tanggalSertifikat</th>
          <th>tanggalKedaluarsa</th>
          <th>instansi</th>
          <th>tanggalPengiriman</th>
          <th>supir</th>
          <th>plat</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody v-for=" (item,index) in dataList " v-bind:key="item._id">
        <tr>
          <td>{{index+1}}</td>
          <td>{{item.noInduk}}</td>
          <td>{{ item.tahunProduksi}}</td>
          <td>{{ item.varietas}}</td>
          <td>{{ item.lot}}</td>
          <td>{{ item.produsen}}</td>
          <td>{{ item.tujuan}}</td>
          <td>{{ item.provinsi}}</td>
          <td>{{ item.kabupaten}}</td>
          <td>{{ item.kecamatan}}</td>

          <td>{{ item.volume}}</td>

          <td>{{ item.nomorSertifikat}}</td>

          <td>{{ item.tanggalSertifikat}}</td>
          <td>{{ item.tanggalKedaluarsa}}</td>
          <td>{{ item.instansi}}</td>
          <td>{{ item.tanggalPengiriman}}</td>
          <td>{{ item.supir}}</td>
          <td>{{ item.plat}}</td>

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
      },
      dataList: [],
      onStage: true
    };
  },

  methods: {
    loadData() {
      this.$api
        .get("http://localhost:3000" + "/pengiriman/all")
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
      this.$router.push("addPengiriman");
    },
    remove(ID, index) {
      // console.log(ID);
      var result = [];
      var cek = true;
      this.$api
        .delete("http://localhost:3000" + `/pengiriman/remove/${ID}`)
        .then(({ data }) => {
          for (var i = 0; i < this.dataList.length; i++) {
            if (i == index) {
              cek = false;
            }
            if (cek == true) {
              result.push(this.dataList[i]);
            }
          }
          this.dataList = result
        })
        .catch(({ response }) => {
          // console.log(response.data);
          this.$swal({
            title: `Opps!`,
            text: `cant delete data`,
            type: "error",
            timer: 2500
          });
        });
    },
    edit(ID, index) {
      this.$router.push({ name: "editPengiriman", params: { id: ID } });
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
.container {
  padding-left: 0px;
}
.tombol {
  margin: 0px;

  /* padding: 50px; */
}
.judul {
  margin: 20px;
}
</style>
