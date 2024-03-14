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
                <div class="md-layout-item md-size-50 mt-2">
                  <md-field>
                    <label>Descrição do cargo</label>
                    <md-input v-model="descricao" type="text"></md-input>
                  </md-field>
                </div>
                <div class="md-layout-item md-size-20 mt-2">
                  <md-field>
                    <label>Administrador?</label>
                    <md-input v-model="administrador" type="text"></md-input>
                  </md-field>
                </div>
                <div class="md-layout-item md-size-100 text-right">
                  <md-button
                    class="md-raised md-warning"
                    type="submit"
                    value="cadastrar"
                    @click="cadastrarPermissao($event)"
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
  props: {
    dataBackgroundColor: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      descricao: "",
      administrador: null,
      permissaoacesso: [],
    };
  },
  methods: {
    cadastrarPermissao(e) {
      e.preventDefault();

      const administradorNum = /^\d+$/.test(this.administrador)
        ? parseInt(this.administrador)
        : null;

      axios
        .post("http://localhost:3000/routes/permissaoacesso/cadastrar", {
          descricao: this.descricao,
          administrador: administradorNum,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>
