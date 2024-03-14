<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-90">
        <form>
          <md-card>
            <md-card-header data-background-color="orange">
              <h4 class="title">Cadastrar um menu</h4>
              <p class="category">Complete os campos abaixo:</p>
            </md-card-header>

            <md-card-content>
              <div class="md-layout">
                <div class="md-layout-item md-small-size-100 md-size-50">
                  <md-field>
                    <label>Descrição</label>
                    <md-input v-model="username" type="text"></md-input>
                  </md-field>
                </div>
                <div class="md-layout-item md-small-size-100 md-size-33">
                  <md-field>
                    <label>Link</label>
                    <md-input v-model="emailadress" type="email"></md-input>
                  </md-field>
                </div>
                <div class="md-layout-item md-small-size-100 md-size-50">
                  <md-field>
                    <label>ID Pai</label>
                    <md-input v-model="emailadress" type="email"></md-input>
                  </md-field>
                </div>
                <div class="md-layout-item md-small-size-100 md-size-50">
                  <md-field>
                    <label>Ordem</label>
                    <md-input v-model="emailadress" type="email"></md-input>
                  </md-field>
                </div>
                <div class="md-layout-item md-size-33 mt-3">
                  <select id="select1" class="form-select">
                    <option disabled selected>Ativo</option>
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
  name: "menus",
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
