<template>
  <dialog v-show="open" ref="dialog">
    <BaseButton class="btn-outline" @click="closeDialog">
      x
    </BaseButton>

    <p class="login-subtitle">CADASTRE-SE</p>
    <p class="login-title">Crie sua conta gratuita</p>

    <form method="dialog" @submit.prevent="login">
      <div class="field-input">
        <label for="input-name">Nome completo</label>
        <input
          id="input-name"
          v-model="name"
          type="text"
          placeholder="Digite seu nome completo"
          required
        />
      </div>
      <div class="field-input">
        <label for="input-new-email">E-mail</label>
        <input
          id="input-new-email"
          v-model="email"
          type="text"
          placeholder="Digite seu e-mail"
          required
        />
      </div>
      <div class="field-input">
        <label for="input-new-password">Senha</label>
        <input
          id="input-new-password"
          v-model="password"
          type="password"
          placeholder="Digite uma senha de 8 caracteres ou mais"
          required
        />
      </div>
      <div class="field-input">
        <label for="input-confirm-password">Confirmar senha</label>
        <input
          id="input-confirm-password"
          v-model="confirmPassword"
          type="password"
          placeholder="Confirme sua senha digitada acima"
          required
        />
      </div>
      
      <BaseButton type="submit" class="dialog-submit">
        Cadastrar-se
      </BaseButton>
    </form>

    <p>ou</p>

    <div class="login-social">
      <div 
        id="google-btn" 
        class="g-signin2" 
        data-onsuccess="onSignIn" 
        data-width="270" 
        data-height="50"
        data-longtitle="true"
      ></div>
      <div 
        class="fb-login-button" 
        data-width="270" 
        data-size="large"
        data-button-type="continue_with" 
        data-layout="default" 
        data-auto-logout-link="false" 
        data-use-continue-as="false"
      ></div>
    </div>
  </dialog>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      open: false,
    }
  },
  methods: {
    openDialog() {
      this.open = true
      this.$refs.dialog.showModal()
    },

    closeDialog() {
      this.open = false
      this.$refs.dialog.close()
    },

    login() {
      
    }
  },
}
</script>

<style lang="scss" scoped>
dialog {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 2rem;
  border: 2px solid $primary-clr;
  border-radius: 1rem;
  color: $text-dark-clr-1;
  text-align: center;

  &::backdrop {
    background: rgb(0 0 0 / 0.5);
  }

  .login-title {
    font-family: $font-foral-pro;
    font-size: 2.5rem;
    font-weight: 700;
  }

  .btn-outline {
    margin-left: auto;
    padding: 0.5rem;
    background: transparent;
    color: $text-dark-clr-1;
    line-height: 0.5;
  }

  .login-forgot {
    margin-top: 0.5rem;

    &:hover {
      color: $primary-clr;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;

    .field-input {
      display: flex;
      flex-direction: column;
      width: 100%;
      background-color: transparent;

      label {
        text-align: left;
      }

      input {
        padding: 0.5rem 1rem;
        border: 1px solid $primary-clr;
        border-radius: 4rem;

        &::placeholder {
          color: $text-dark-clr-2;
        }

        &:focus {
          outline: none;
        }
      }
    }

    .dialog-submit {
      margin: auto;
      padding: 1rem 2rem;
    }
  }

  .login-social {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-top: 1.5rem;
  }
}
</style>