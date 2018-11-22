<template>
  <div id="app">
    <nav class="nav-extended">
      <div class="nav-wrapper">
        <span class="brand-logo center" to="/">Alelotório</span>
      </div>
      <div class="nav-content">
        <ul class="tabs tabs-transparent row">
          <li class="tab col s6"><router-link to="/">Comparação</router-link></li>
          <li class="tab col s6"><router-link to="/multiple">Repetição</router-link></li>
        </ul>
      </div>
    </nav>

    <router-view/>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto');
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

.tabs.tabs-transparent .tab a.router-link-active.router-link-exact-active{
  color: #fff;
  border-bottom-style: solid;
}
</style>
