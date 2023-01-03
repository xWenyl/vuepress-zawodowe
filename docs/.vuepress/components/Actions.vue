<template>
  <div class="menu-container">
    <router-link to="/inf03">
      <h2>INF.03</h2>
      <p>
        Tworzenie i administrowanie stronami i aplikacjami internetowymi oraz
        bazami danych.
      </p>
    </router-link>
    <router-link to="/inf04/">
      <h2>INF.04</h2>
      <p>Projektowanie, programowanie i testowanie aplikacji.</p>
    </router-link>
  </div>
</template>

<style lang="scss">
.menu-container {
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  gap: 1.5rem;

  a {
    padding: 1.5rem;
    border-radius: 0.5rem;
    background-color: var(--c-bg-dark);
    color: var(--c-text);
    text-decoration: none !important;
    border: 2px solid transparent;
    transition: 0.2s ease all;

    &:hover {
      background-color: var(--c-bg-darker);
      border: 2px solid var(--c-brand);
    }
  }

  h2,
  p {
    padding: 0;
    margin: 0;
  }
}
</style>
