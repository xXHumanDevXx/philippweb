<script>
  class Footer extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <footer style="background-color: #f5f5f5; padding: 15px; border-radius: 8px;">
          <a href="index.html">Homepage</a> |
          <a href="index.html">News</a> |
          <a href="projekte.html">Projekte</a> |
          <a href="index.html">PhilippWeb OG Edition</a>
        </footer>
      `;
    }
  }

  customElements.define('custom-footer', Footer);
</script>
