<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <side-bar
      :sidebar-item-color="sidebarBackground"
      :sidebar-background-image="sidebarBackgroundImage"
    >
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/permissao">
        <md-icon>key</md-icon>
        <p>Permissões de Acesso</p>
      </sidebar-link>
      <sidebar-link to="/usuario">
        <md-icon>person</md-icon>
        <p>Usuário</p>
      </sidebar-link>
      <sidebar-link to="/menu">
        <md-icon>content_paste</md-icon>
        <p>Menu</p>
      </sidebar-link>
      <sidebar-link to="/relacionamento">
        <md-icon>library_books</md-icon>
        <p>Relações do usuário</p>
      </sidebar-link>
      <sidebar-link to="/gerenciamento">
        <md-icon>list</md-icon>
        <p>Gerenciamento</p>
      </sidebar-link>
      <sidebar-link to="/" class="active-pro">
        <md-icon>login</md-icon>
        <p>Login</p>
      </sidebar-link>
    </side-bar>

    <div class="main-panel">
      <top-navbar></top-navbar>

      <fixed-plugin
        :color.sync="sidebarBackground"
        :image.sync="sidebarBackgroundImage"
      >
      </fixed-plugin>

      <dashboard-content> </dashboard-content>

      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>
  </div>
</template>

<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "@/pages/Layout/MobileMenu.vue";
import FixedPlugin from "./Extra/FixedPlugin.vue";

export default {
  components: {
    TopNavbar,
    DashboardContent,
    ContentFooter,
    MobileMenu,
    FixedPlugin,
  },
  data() {
    return {
      sidebarBackground: "orange",
      sidebarBackgroundImage: require("@/assets/img/sidebar-5.jpg"),
    };
  },
};
</script>
