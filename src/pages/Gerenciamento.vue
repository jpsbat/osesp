<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card>
          <md-card-header data-background-color="orange">
            <h4 class="title">Permissões de acesso</h4>
            <p class="category">Cargos e permissões cadastrados no sistema</p>
          </md-card-header>
          <md-card-content>
            <tb-perfil-usuario></tb-perfil-usuario>
          </md-card-content>
        </md-card>
      </div>
    </div>
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card>
          <md-card-header data-background-color="orange">
            <h4 class="title">Usuários</h4>
            <p class="category">Usuários cadastrados no sistema</p>
          </md-card-header>
          <md-card-content>
            <tb-usuarios></tb-usuarios>
          </md-card-content>
        </md-card>
      </div>
    </div>
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card>
          <md-card-header data-background-color="orange">
            <h4 class="title">Menus</h4>
            <p class="category">Menus cadastrados no sistema</p>
          </md-card-header>
          <md-card-content>
            <tb-menu></tb-menu>
          </md-card-content>
        </md-card>
      </div>
    </div>
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card>
          <md-card-header data-background-color="orange">
            <h4 class="title">Relações do usuário</h4>
            <p class="category">
              Visualize quais permissões os usuários possuem no sistema
            </p>
          </md-card-header>
          <md-card-content>
            <tb-permissao></tb-permissao>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import TbPerfilUsuario from "../components/Tabelas/TbPerfilUsuario";
import TbPermissao from "../components/Tabelas/TbPermissao";
import TbUsuarios from "../components/Tabelas/TbUsuarios";
import TbMenu from "../components/Tabelas/TbMenu";

export default {
  components: {
    TbMenu,
    TbPermissao,
    TbPerfilUsuario,
    TbUsuarios,
  },
};
</script>
