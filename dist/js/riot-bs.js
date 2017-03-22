riot.tag2('bs-button', '<button type="button" class="btn { buttonType } { size }"> <yield></yield> </button>', '', '', function(opts) {
var validTypes = ['default', 'primary', 'success', 'info', 'warning', 'danger', 'link'];

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
});

riot.tag2('bs-checkbox', '<div class="checkbox"> <label class="{ inlineClass }"> <input type="checkbox" value="{ opts.value }"> { opts.text } <label> </div>', '', '', function(opts) {
        this.opts.inlineClass = (this.opts.inline ? 'checkbox-inline' : '');
});
riot.tag2('bs-form-group', '<div class="form-group { status } { feedback } { size }"> <yield></yield> </div>', '', '', function(opts) {
this.status = this.opts.status ? 'has-' + this.opts.status : '';
this.feedback = this.opts.feedback ? 'has-feedback' : '';

if (this.opts.size) {
  if (this.opts.size.toLowerCase() == 'large') {
    this.size = 'form-group-lg';
  } else if (this.opts.size.toLowerCase() == 'small') {
    this.size = 'form-group-sm';
  } else {
    this.size = '';
  }
}
});

riot.tag2('bs-input', '<input type="{ opts.type }" required="{ opts.required }" class="form-control { size }" disabled="{disabled}">', '', '', function(opts) {
this.opts.type = this.opts.type || 'text';
this.opts.required = this.opts.required || false;
this.disabled = this.opts.disabled == undefined ? false : true;

if (this.opts.size) {
  if (this.opts.size.toLowerCase() == 'large') {
    this.size = 'input-lg';
  } else if (this.opts.size.toLowerCase() == 'small') {
    this.size = 'input-sm';
  } else {
    this.size = '';
  }
}
});

riot.tag2('bs-input-addon', '<span class="input-group-addon"> <yield></yield> </span>', '', '', function(opts) {
});

riot.tag2('bs-input-group', '<div class="input-group"> <yield></yield> </div>', '', '', function(opts) {
});
