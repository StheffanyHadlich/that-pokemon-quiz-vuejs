<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="info" class="navbar">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right v-if="locale" :text="locale">
            <b-dropdown-item
              v-for="locale in locales"
              v-on:click="() => changeLocale(locale)"
              right
            >
              {{locale}}
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <div class="app-container">
      <router-view />
    </div>
  </div>
</template>

<script>
import locales from './locales'

const availableLocales = Object.keys(locales)

export default {
  name: "app",
  data() {
    return {
      locales: availableLocales,
      locale: availableLocales[0]
    }
  },
  mounted() {
    this.$translate.setLang(availableLocales[0]);
  },
  methods: {
    changeLocale: function(locale){
      this.locale = locale
      this.$translate.setLang(locale)
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.navbar {
  position: fixed;
  width: 100%;
  z-index: 100
}

.app-container {
  padding-top: 90px;
}

.selected-language {
  font-weight: bolder
}
</style>
