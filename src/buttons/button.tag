<bs-button>
  <button type="button" class="btn { buttonType } { size } { block } { active } { opts.additionalClasses }" disabled={disabled} data-toggle={opts.toggle} >
    <yield />
  </button>

  <script type="es6">
    var validTypes = [
      'default',
      'primary',
      'success',
      'info',
      'warning',
      'danger',
      'link'
    ];

    this.buttonType = '';
    if (validTypes.indexOf(this.opts.type) != -1) {
      this.buttonType = 'btn-' + this.opts.type;
    }

    if (this.opts.size) {
      if (this.opts.size.toLowerCase() == 'large') {
        this.size = 'btn-lg';
      } else if (this.opts.size.toLowerCase() == 'small') {
        this.size = 'btn-sm';
      } else if (this.opts.size.toLowerCase() == 'extra-small') {
        this.size = 'btn-xs';
      } else {
        this.size = '';
      }
    }

    this.block = (this.opts.block ? 'btn-block' : '');
    
    this.active = (this.opts.active ? 'active' : '');
    
    this.disabled = (this.opts.disabled == undefined ? false : true);
  </script>
</bs-button>
