<bs-form-group>

  <div class="form-group { status } { feedback } { size }">
    <yield />
  </div>

  <script type="es6">
    this.status = (this.opts.status ? 'has-' + this.opts.status : '');
    this.feedback = (this.opts.feedback ? 'has-feedback' : '');
    
    if (this.opts.size) {
      if (this.opts.size.toLowerCase() == 'large') {
        this.size = 'form-group-lg';
      } else if (this.opts.size.toLowerCase() == 'small') {
        this.size = 'form-group-sm';
      } else {
        this.size = '';
      }
    }
  </script>
</bs-form-group>
