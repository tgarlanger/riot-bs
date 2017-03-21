<bs-input>
  <input type="{ opts.type }" required="{ opts.required }" class="form-control" disabled={disabled} />

  <script type="es6">
    this.opts.type = this.opts.type || 'text';
    this.opts.required = this.opts.required || false;
    this.disabled = (this.opts.disabled == undefined ? false : true);
  </script>
</bs-input>