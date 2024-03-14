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
                  <select id="select1" class="form-select">
                    <option disabled selected>Usuário</option>
                    <option>Bach</option>
                    <option>Beethoven</option>
                    <option>Mozart</option>
                    <option>Chopin</option>
                    <option>Vivaldi</option>
                  </select>
                </div>
                <div class="md-layout-item md-size-33 mt-3">
                  <select id="select1" class="form-select">
                    <option disabled selected>Menus</option>
                    <option>Cadastros</option>
                    <option>Produtos</option>
                    <option>Classificação de eventos</option>
                    <option>Metas</option>
                    <option>Compositores</option>
                    <option>Obras</option>
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
    return {};
  },
};
</script>
