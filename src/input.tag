<bs-input>
  <input type="{ opts.type }" required="{ opts.required }" class="form-control { size }" disabled={disabled} />

  <script type="es6">
    this.opts.type = this.opts.type || 'text';
    this.opts.required = this.opts.required || false;
    this.disabled = (this.opts.disabled == undefined ? false : true);
    
    if (this.opts.size) {
      if (this.opts.size.toLowerCase() == 'large') {
        this.size = 'input-lg';
      } else if (this.opts.size.toLowerCase() == 'small') {
        this.size = 'input-sm';
      } else {
        this.size = '';
      }
    }
  </script>
</bs-input>
