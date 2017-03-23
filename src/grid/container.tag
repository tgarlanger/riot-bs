<bs-container>
  <div class={containerClass}>
    <yield />
  </div>

  <script>
    this.containerClass = 'container' + (this.opts.fluid ? '-fluid' : '');
  </script>
</bs-container>
