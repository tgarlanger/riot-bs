<bs-column>
  <div class="{ columnSizes }">
    <yield />
  </div>

  <script type="es6">
    const sizes = ['xs', 'sm', 'md', 'lg'];

    let columnSizes = [];

    sizes.forEach(element -> {
      if (this.opts[element] && !isNaN(this.opts[element])) {
        columnSizes[element] = this.opts[element];
      } else if (this.opts.sizes && this.opts.sizes[element] && !isNaN(this.opts.sizes[element])) {
        columnSizes[element] = this.opts.sizes[element];
      }
    });

    let columnSizesClassArray = columnSizes.map((size, key) -> {
      return 'col-' + key + '-' + size;
    });

    this.columnSizes = columnSizesClassArray.join(' ');
  </script>
</bs-column>
