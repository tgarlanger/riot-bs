riot.tag2('bs-checkbox', '<div class="checkbox"> <label class="{ inlineClass }"> <input type="checkbox" value="{ opts.value }"> { opts.text } <label> </div>', '', '', function(opts) {
        this.opts.inlineClass = (this.opts.inline ? 'checkbox-inline' : '');
});
riot.tag2('bs-form-group', '<div class="form-group"> <yield></yield> </div>', '', '', function(opts) {
});

riot.tag2('bs-input', '<input type="{ opts.type }" required="{ opts.required }" class="form-control" disabled="{disabled}">', '', '', function(opts) {
this.opts.type = this.opts.type || 'text';
this.opts.required = this.opts.required || false;
this.disabled = this.opts.disabled == undefined ? false : true;
});