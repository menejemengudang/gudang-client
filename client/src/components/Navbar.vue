<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="info">
      <b-navbar-brand href="#">Gudang</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item :to="{name:'Stock'}">stock</b-nav-item>
          <b-nav-item :to="{name:'pengiriman'}" right>pengiriman</b-nav-item>
          <!-- <b-nav-item  disabled>Disabled</b-nav-item> -->
        </b-navbar-nav>
        <!-- <router-link :to="{name:about}">/usesdsds</router-link> -->
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item right :to="{name:'Register'}" v-on:click="tes()" v-if="tes()==false">Register</b-nav-item>
          <b-nav-item right :to="{name:'Login'}" v-on:click="tes()" v-if="tes()==false">Login</b-nav-item>
          <b-nav-item right v-on:click="logout()" v-if="tes()==true">Logout</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    {{tes()}}
    <!-- <router-view></router-view> -->
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  computed: {
    // ...mapState(["registerType"])
  },
  data() {
    return {
      isLogin: true
    };
  },
  methods: {
    // ...mapMutations(["setRegisterType", "setLoginType"]),
    //   var payload = this.$route.params.type;
    // this.setRegisterType(payload);
    tes() {
      var token = localStorage.getItem("tg");
      if (!token) {
        return false;
      } else {
        return true;
      }
    },
    logout() {
      console.log("keluar dong");
      localStorage.removeItem("tg");
      localStorage.removeItem("rg");
      this.tes();
      location.reload();
    },
    cekLogin() {
      var token = localStorage.getItem("tg");
      console.log(token, "xcxc");
    }
  },

  mounted() {}
};
</script>
