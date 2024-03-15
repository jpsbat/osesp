<template>
  <b-row class="vh-100 vw-100 row-login">
    <b-col
      sm="5"
      class="d-flex justify-content-center align-items-center left-login"
    >
      <div class="col-8">
        <h2 class="text-center mb-5 title-login">Faça o login</h2>

        <!-- Parágrafos para exibir mensagens de erro -->
        <p v-if="error" class="text-danger">{{ error }}</p>

        <b-form>
          <b-form-group label="E-mail" label-for="email">
            <b-form-input
              id="email"
              type="email"
              placeholder="joaosilva@email.com"
              autocomplete="off"
              v-model="login"
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
              v-model="senha"
            ></b-form-input>
          </b-form-group>

          <br />

          <b-button
            class="mt-8 text-white"
            type="submit"
            variant="primary"
            block
            @click="submitForm"
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

<script>
import axios from "axios";

export default {
  data() {
    return {
      login: "",
      senha: "",
      error: "", // Adicionando variável para armazenar mensagens de erro
    };
  },
  methods: {
    async submitForm() {
      if (!this.login || !this.senha) {
        this.error = "Preencha os campos obrigatórios."; // Definindo mensagem de erro
        return;
      }
      const loginData = {
        login: this.login,
        senha: this.senha,
      };
      axios
        .post("http://localhost:3000/routes/usuarios/login", loginData)
        .then((response) => {
          this.$router.push("/permissao");
          console.log(response.data);
        })
        .catch((error) => {
          this.error = "Login ou senha incorretos"; // Definindo mensagem de erro
          console.error("Erro ao fazer login", error);
        });
    },
  },
};
</script>

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

.text-danger {
  color: red; /* Estilizando a cor do texto para vermelho */
}
</style>
