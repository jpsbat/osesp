<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-90">
        <form>
          <md-card>
            <md-card-header data-background-color="orange">
              <h4 class="title">Cadastrar usuário</h4>
              <p class="category">Complete os campos abaixo:</p>
            </md-card-header>

            <md-card-content>
              <div class="md-layout">
                <div class="md-layout-item md-small-size-100 md-size-50">
                  <md-field>
                    <label>Nome</label>
                    <md-input v-model="nome" type="text"></md-input>
                  </md-field>
                </div>
                <div class="md-layout-item md-small-size-100 md-size-33">
                  <md-field>
                    <label>Email</label>
                    <md-input v-model="login" type="email"></md-input>
                  </md-field>
                </div>
                <div class="md-layout-item md-small-size-100 md-size-50">
                  <md-field>
                    <label class="d-flex justify-content-between"
                      >Digite sua senha</label
                    >
                    <md-input
                      v-model="senha"
                      id="password"
                      type="password"
                    ></md-input>
                  </md-field>
                </div>
                <div class="md-layout-item md-small-size-100 md-size-33">
                  <md-field>
                    <label>Permissão de acesso</label>
                    <md-input v-model="idPerfilUsuario" type="text"></md-input>
                  </md-field>
                </div>
                <div class="md-layout-item md-small-size-100 md-size-33">
                  <md-field>
                    <label>Ativo?</label>
                    <md-input v-model="ativo" type="text"></md-input>
                  </md-field>
                </div>
                <div class="md-layout-item md-size-100 text-right">
                  <md-button
                    class="md-raised md-warning"
                    type="submit"
                    value="cadastrar"
                    @click="cadastrarUsuario($event)"
                    >Cadastrar</md-button
                  >
                </div>
              </div>
            </md-card-content>
          </md-card>
        </form>
      </div>
      <div class="md-layout-item md-medium-size-100 md-size-33"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "usuario",
  props: {
    dataBackgroundColor: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      nome: "",
      login: "",
      senha: "",
      ativo: null,
      idPerfilUsuario: null,
      usuarios: [],
    };
  },
  cadastrarUsuario(e) {
    e.preventDefault();

    const ativoNum = /^\d+$/.test(this.ativo) ? parseInt(this.ativo) : null;

    const idPerfilUsuarioNum = /^\d+$/.test(this.idPerfilUsuario)
      ? parseInt(this.idPerfilUsuario)
      : null;

    axios
      .post("http://localhost:3000/routes/usuarios/cadastrar", {
        nome: this.nome,
        login: this.login,
        senha: this.senha,
        idPerfilUsuario: idPerfilUsuarioNum,
        ativo: ativoNum,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  },
};
</script>
