<bs-button-group>
  <div class="btn-group { size }" role="group">
    <yield />
  </div>

  <script type="es6">
    const sizes = ['xs', 'sm', 'lg'];

    for (size in sizes) {
      if (this.opts[size] !== undefined) {
        this.size = 'btn-group-' + size;
        break;
      }
    }

  </script>
</bs-button-group>
