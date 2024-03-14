<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-90">
        <form>
          <md-card>
            <md-card-header data-background-color="orange">
              <h4 class="title">Cadastrar permissão de acesso</h4>
              <p class="category">Complete os campos abaixo:</p>
            </md-card-header>

            <md-card-content>
              <div class="md-layout">
                <div class="md-layout-item md-size-33 mt-2">
                  <md-field>
                    <label>Cargo</label>
                    <md-input v-model="cargo" type="text"></md-input>
                  </md-field>
                </div>
                <div class="md-layout-item md-size-33 mt-4">
                  <select id="select1" class="form-select">
                    <option disabled selected>Administrador</option>
                    <option>Sim</option>
                    <option>Não</option>
                  </select>
                </div>
                <div class="md-layout-item md-size-100 text-right">
                  <md-button
                    class="md-raised md-warning"
                    type="submit"
                    value="cadastrar"
                    @click="cadastrarCliente($event)"
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
  name: "permissao",
  data() {
    return {
      cargo: "",
      administrador: "",
      permissaoacesso: [],
      showModal: false,
    };
  },
  props: {
    dataBackgroundColor: {
      type: String,
      default: "",
    },
  },
  mounted() {
    this.listar();
  },
  methods: {
    cadastrarPermissao(e) {
      e.preventDefault();

      axios
        .post("http://localhost:3000/routes/permissaoacesso/cadastrar", {
          cargo: this.cargo,
          administrador: this.administrador,
        })
        .then((response) => {
          console.log(response);
          this.listar();
          this.$swal("Sucesso!", `${cargo} cadastrado no sistema.`, "success");
        })
        .catch((error) => console.log(error));
    },
    listar() {
      axios
        .get("http://localhost:3000/routes/permissaoacesso/listar")
        .then((response) => {
          this.permissaoacesso = response.data.data;
        })
        .catch((error) => console.log(error));
    },
    atualizarCliente(id) {
      axios
        .get(`http://localhost:3000/routes/permissaoacesso/${id}`)
        .then((response) => {
          var novo_cargo = window.prompt(
            `Cargo: ${cargo}`,
            response.data.data.cargo
          );
          var novo_administrador = window.prompt(
            `Administrador: ${administrador}`,
            response.data.data.administrador
          );

          if (novo_cargo && novo_administrador !== null) {
            axios
              .patch(
                `http://localhost:3000/routes/permissaoacesso/alterar/${id}`,
                {
                  cargo: novo_cargo,
                  administrador: novo_administrador,
                }
              )
              .then((response) => {
                console.log(response);
                this.listar();
              })
              .catch((error) => console.log(error));
          }
        })
        .catch((error) => console.log(error));
    },
    confirmarExclusaoPermissaoAcesso(id, cargo, administrador) {
      this.idPermissaoAcesso = id;
      this.novoCargo = cargo;
      this.novoAdministrador = administrador;
      this.showModal = true;
    },
    excluirPermissaoAcesso(id) {
      axios
        .delete(`http://localhost:3000/routes/permissaoacesso/excluir/${id}`)
        .then((response) => {
          console.log(response);
          this.listar();
        })
        .catch((error) => console.log(error));

      this.showModal = false;
    },
  },
};
</script>
