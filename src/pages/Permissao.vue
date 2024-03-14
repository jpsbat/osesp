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
                <div class="md-layout-item md-size-33 mt-3">
                  <select id="select1" class="form-select">
                    <option disabled selected>Cargo</option>
                    <option>Administrador</option>
                    <option>Operação</option>
                    <option>TI</option>
                  </select>
                </div>
                <div class="md-layout-item md-size-33 mt-3">
                  <select id="select1" class="form-select">
                    <option disabled selected>Administrador</option>
                    <option>Sim</option>
                    <option>Não</option>
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
  name: "permissao",
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
