<template>
  <b-row class="vh-100 vw-100 row-login">
    <b-col
      sm="5"
      class="d-flex justify-content-center align-items-center left-login"
    >
      <div class="col-8">
        <h2 class="text-center mb-5 title-login">Faça o login</h2>

        <b-form>
          <b-form-group label="E-mail" label-for="email">
            <b-form-input
              id="email"
              type="email"
              placeholder="joaosilva@email.com"
              autocomplete="off"
              v-model="email"
            ></b-form-input>
          </b-form-group>

          <br />

          <b-form-group label-for="password">
            <label class="d-flex justify-content-between">
              Senha
              <small><a href="#">Esqueceu sua senha?</a></small>
            </label>

            <b-form-input
              id="password"
              type="password"
              placeholder="Digite sua senha"
              v-model="password"
            ></b-form-input>
          </b-form-group>

          <br />

          <b-button
            class="mt-8 text-white"
            type="button"
            variant="primary"
            block
            :to="{ path: '/permissao' }"
          >
            <i class="fas fa-sign-in-alt"></i> Entrar
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
