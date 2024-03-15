import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";
import Permissao from "@/pages/Permissao.vue";
import Usuario from "@/pages/Usuario.vue";
import Menu from "@/pages/Menu.vue";
import Relacionamento from "@/pages/Relacionamento.vue";
import Login from "../pages/Login.vue";
import Gerenciamento from "../pages/Gerenciamento.vue";

const routes = [
  {
    path: "/",
    name: "login",
    component: Login,
  },
  {
    path: "/dashboard",
    component: DashboardLayout,
    children: [
      {
        path: "/permissao",
        name: "Permissões de Acesso",
        component: Permissao,
      },
      {
        path: "/usuario",
        name: "Usuário",
        component: Usuario,
      },
      {
        path: "/menu",
        name: "Menu",
        component: Menu,
      },
      {
        path: "/relacionamento",
        name: "Relações do usuário",
        component: Relacionamento,
      },
      {
        path: "/gerenciamento",
        name: "Gerenciamento",
        component: Gerenciamento,
      },
      {
        path: "/",
        name: "Login",
        component: Login,
      },
    ],
  },
];

export default routes;
