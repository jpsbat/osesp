<template>
  <b-row class="vh-100 vw-100 row-login">
    <b-col
      sm="5"
      class="d-flex justify-content-center align-items-center left-login"
    >
      <div class="col-8">
        <h2 class="text-center mb-5 title-login">Faça o login</h2>

        <b-form>
          <b-form-group label-for="email">
            <md-field>
              <label class="d-flex justify-content-between"
                >Digite seu email</label
              >
              <md-input
                class="mb-1"
                id="email"
                type="email"
                autocomplete="off"
              ></md-input>
            </md-field>
          </b-form-group>

          <b-form-group label-for="password">
            <md-field>
              <label class="d-flex justify-content-between"
                >Digite sua senha</label
              >
              <md-input class="mb-1" id="password" type="password"></md-input>
            </md-field>
          </b-form-group>

          <b-button
            class="mt-8 text-white"
            type="button"
            variant="primary"
            block
            :to="{ path: '/permissao' }"
          >
            <i class="fas fa-sign-in-alt"></i> Entrar
          </b-button>

          <hr />

          <b-button type="button" variant="outline-secondary" block>
            <i class="fas fa-user-plus"></i> Não tenho conta
          </b-button>
        </b-form>
      </div>
    </b-col>
    <b-col sm="7" class="d-flex justify-content-center align-items-center">
      <img src="../assets/img/sidebar-5.jpg" class="img-login" />
    </b-col>
  </b-row>
</template>

<script></script>

<style>
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
}

.row-login {
  margin-left: 0;
  background-color: rgba(241, 159, 7, 0.582);
}

.left-login {
  background-color: #fff;
}

.title-login {
  font-weight: bold;
}

.img-login {
  width: 600px;
  height: 600px;
}
</style>
