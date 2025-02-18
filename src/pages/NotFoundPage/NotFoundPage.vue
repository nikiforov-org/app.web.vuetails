<template>
  <div class="NotFoundPage">
    <h1>404 — Page not found</h1>
    <a href="/">Return to homepage</a>
  </div>
</template>

<style scoped lang="scss">
  .NotFoundPage {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    flex-grow: 1;
    background-color: #111;

    h1 {
      margin: 0 0 1rem;
      color: #777;
    }

    a {
      text-decoration: none;
      color: #f39c1299;
      font-size: 1.25rem;
      transition: color 0.25s;

      &:hover {
        color: #f39c12ff;
      }
    }
  }
</style>
