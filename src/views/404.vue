<template>
  <div class="page-shell not-found">
    <p class="eyebrow">Error code · 404</p>
    <h1>That level does not exist.</h1>
    <p>The route may have moved, but the portfolio is still online.</p>
    <router-link class="button" to="/">Return to checkpoint</router-link>
  </div>
</template>

<style scoped>
.not-found { min-height: 620px; display: flex; flex-direction: column; align-items: flex-start; justify-content: center; }
.not-found h1 { max-width: 760px; margin: 0; font-size: clamp(3rem, 8vw, 6rem); line-height: .95; letter-spacing: -.06em; }
.not-found > p:not(.eyebrow) { margin: 26px 0 0; color: var(--muted); font-size: 1.05rem; }
</style>
