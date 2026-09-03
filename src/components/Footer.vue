<template>
  <footer class="footer">
    <div class="footer-shell">
      <p><span aria-hidden="true">©</span> 2026 Camilo Sanchez</p>
      <p>Gameplay systems <span>·</span> Technical art <span>·</span> UEFN</p>
      <a href="mailto:cmilo1269@gmail.com">cmilo1269@gmail.com</a>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({ name: 'Footer' });
</script>

<style scoped>
.footer { border-top: 1px solid var(--line); background: rgba(7,9,13,.9); }
.footer-shell { width: min(100%, var(--max-width)); min-height: 96px; margin: 0 auto; padding: 24px; display: flex; align-items: center; justify-content: space-between; gap: 24px; color: var(--dim); font: 600 .66rem/1.5 'IBM Plex Mono', monospace; letter-spacing: .04em; text-transform: uppercase; }
.footer-shell p { margin: 0; }
.footer-shell p span { color: var(--cyan); }
.footer-shell a { color: var(--muted); text-transform: none; }
.footer-shell a:hover { color: var(--cyan); }
@media (max-width: 760px) {
  .footer-shell { align-items: flex-start; flex-direction: column; gap: 8px; padding: 28px 18px; }
}
</style>
