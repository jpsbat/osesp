<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-90">
        <form>
          <md-card>
            <md-card-header data-background-color="orange">
              <h4 class="title">Cadastrar chave de permissão</h4>
              <p class="category">
                Complete os campos abaixo para liberar para o usuário o acesso
                aos menus
              </p>
            </md-card-header>

            <md-card-content>
              <div class="md-layout">
                <div class="md-layout-item md-size-33 mt-3">
                  <select id="" v-model="usuario" class="form-select">
                    <option disabled selected>Usuário</option>
                    <option
                      v-for="usuario in usuarios_disponiveis"
                      :key="usuario.ID"
                      :value="usuario.ID"
                    >
                      {{ usuario.nome }}
                    </option>
                  </select>
                </div>
                <div class="md-layout-item md-size-33 mt-3">
                  <select id="" v-model="menu" class="form-select">
                    <option disabled selected>Menu</option>
                    <option
                      v-for="menu in menus_disponiveis"
                      :key="menu.id"
                      :value="menu.id"
                    >
                      {{ menu.descricao }}
                    </option>
                  </select>
                </div>
                <div class="md-layout-item md-size-100 text-right">
                  <md-button class="md-raised md-warning">Cadastrar</md-button>
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
export default {
  name: "relacionamento",
  props: {
    dataBackgroundColor: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      usuarios_disponiveis: [],
      menus_disponiveis: [],
    };
  },
  mounted() {
    this.preencherSelect();
  },
  methods: {
    cadastrarRelacionamento(e) {
      e.preventDefault();

      axios
        .post("http://localhost:3000/routes/permissao/cadastrar", {
          nome: this.nome,
          email: this.email,
        })
        .then((response) => {
          console.log(response);
          this.listar();
        })
        .catch((error) => console.log(error));
    },
    preencherSelect() {
      axios
        .get("http://localhost:3000/routes/permissao/listar")
        .then((response) => {
          this.usuarios_disponiveis = response.data.data;
          this.menus_disponiveis = response.data.data;
          this.listar();
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>
