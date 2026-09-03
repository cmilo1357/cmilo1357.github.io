<template>
  <div class="page-shell contact-page">
    <section class="contact-hero">
      <div>
        <p class="eyebrow">Connection ready · Response pending</p>
        <h1 class="page-title">Let’s build something players remember.</h1>
        <p class="lede">I’m open to gameplay programming, UEFN development, and technical art opportunities—especially roles where code and visuals need to work as one.</p>
        <a class="email-link" href="mailto:cmilo1269@gmail.com">cmilo1269@gmail.com <span aria-hidden="true">→</span></a>
      </div>

      <div class="contact-console" aria-label="Contact information">
        <div class="console-top"><span>COMMS_PANEL</span><span class="online">ONLINE</span></div>
        <dl>
          <div><dt>Location</dt><dd>Medellin, Colombia</dd></div>
          <div><dt>Focus</dt><dd>UEFN · Verse · Technical Art</dd></div>
          <div><dt>Availability</dt><dd>Remote or Colombia-based roles</dd></div>
        </dl>
        <nav class="social-links" aria-label="Professional profiles">
          <a href="https://www.linkedin.com/in/camilo-sanchez-tech-art/" target="_blank" rel="noopener noreferrer"><span>01</span> LinkedIn <b>↗</b></a>
          <a href="https://github.com/cmilo1357" target="_blank" rel="noopener noreferrer"><span>02</span> GitHub <b>↗</b></a>
          <a href="https://www.youtube.com/@oldschoolgamescontent" target="_blank" rel="noopener noreferrer"><span>03</span> YouTube <b>↗</b></a>
          <a href="d/Camilo_Sanchez_Resume.pdf" target="_blank" rel="noopener"><span>04</span> Resume <b>↓</b></a>
        </nav>
      </div>
    </section>
  </div>
</template>

<style scoped>
.contact-page { display: grid; align-items: center; }
.contact-hero { min-height: 650px; display: grid; grid-template-columns: minmax(0, 1.15fr) minmax(340px, .85fr); align-items: center; gap: 82px; }
.email-link { display: inline-flex; align-items: center; gap: 14px; margin-top: 42px; padding-bottom: 5px; border-bottom: 1px solid var(--cyan); color: var(--cyan); font: 600 clamp(.88rem, 2vw, 1.08rem)/1.4 'IBM Plex Mono', monospace; }
.contact-console { border: 1px solid var(--line); background: rgba(13,17,25,.92); box-shadow: 12px 12px 0 rgba(70,224,213,.05); }
.console-top { display: flex; justify-content: space-between; padding: 15px 18px; border-bottom: 1px solid var(--line); color: var(--dim); font: 600 .66rem/1 'IBM Plex Mono', monospace; letter-spacing: .08em; }
.online { color: var(--cyan); }
.online::before { content: ''; display: inline-block; width: 6px; height: 6px; margin-right: 8px; border-radius: 50%; background: var(--cyan); box-shadow: 0 0 9px var(--cyan); vertical-align: 1px; }
.contact-console dl { margin: 0; padding: 28px; }
.contact-console dl div { display: grid; grid-template-columns: 92px 1fr; gap: 22px; padding: 13px 0; border-bottom: 1px solid rgba(41,49,67,.7); }
.contact-console dl div:last-child { border-bottom: 0; }
.contact-console dt { color: var(--dim); font: 600 .65rem/1.5 'IBM Plex Mono', monospace; text-transform: uppercase; }
.contact-console dd { margin: 0; color: #c9ced8; font-size: .88rem; }
.social-links { display: grid; border-top: 1px solid var(--line); }
.social-links a { display: grid; grid-template-columns: 34px 1fr auto; align-items: center; padding: 18px 20px; border-bottom: 1px solid var(--line); color: var(--muted); transition: background .18s ease, color .18s ease; }
.social-links a:last-child { border-bottom: 0; }
.social-links a:hover { background: var(--panel-2); color: var(--ink); }
.social-links span { color: var(--cyan); font: 600 .63rem/1 'IBM Plex Mono', monospace; }
.social-links b { color: var(--amber); font-weight: 500; }
@media (max-width: 900px) {
  .contact-hero { min-height: auto; grid-template-columns: 1fr; gap: 60px; padding: 32px 0; }
}
@media (max-width: 620px) {
  .contact-console dl { padding: 20px; }
  .contact-console dl div { grid-template-columns: 1fr; gap: 5px; }
}
</style>
