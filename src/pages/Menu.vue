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
                <div class="md-layout-item md-small-size-100 md-size-33">
                  <md-field>
                    <label>Descrição</label>
                    <md-input v-model="descricao" type="text"></md-input>
                  </md-field>
                </div>
                <div class="md-layout-item md-small-size-100 md-size-60">
                  <md-field>
                    <label>Link</label>
                    <md-input v-model="link" type="text"></md-input>
                  </md-field>
                </div>
                <div class="md-layout-item md-small-size-100 md-size-20">
                  <md-field>
                    <label>ID Pai</label>
                    <md-input v-model="idpai" type="text"></md-input>
                  </md-field>
                </div>
                <div class="md-layout-item md-small-size-100 md-size-20">
                  <md-field>
                    <label>Ordem</label>
                    <md-input v-model="ordem" type="text"></md-input>
                  </md-field>
                </div>
                <div class="md-layout-item md-small-size-100 md-size-20">
                  <md-field>
                    <label>Ativo</label>
                    <md-input v-model="ativo" type="text"></md-input>
                  </md-field>
                </div>
                <div class="md-layout-item md-size-100 text-right">
                  <md-button
                    class="md-raised md-warning"
                    type="submit"
                    value="cadastrar"
                    @click="cadastrarMenu($event)"
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
  name: "menus",
  props: {
    dataBackgroundColor: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      descricao: "",
      link: "",
      idpai: null,
      ordem: null,
      ativo: null,
      menu: [],
    };
  },
  cadastrarMenu(e) {
    e.preventDefault();

    const idpaiNum = /^\d+$/.test(this.idpai) ? parseInt(this.idpai) : null;

    const ordemNum = /^\d+$/.test(this.ordem) ? parseInt(this.ordem) : null;

    const ativoNum = /^\d+$/.test(this.ativo) ? parseInt(this.ativo) : null;

    axios
      .post("http://localhost:3000/routes/menu/cadastrar", {
        descricao: this.descricao,
        link: this.link,
        idpai: idpaiNum,
        ordem: ordemNum,
        ativo: ativoNum,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  },
};
</script>
