<bs-dropdown>
  <div class="{ direction }">
    <virtual data-is="bs-button" additionalClasses="dropdown-toggle" toggle="dropdown" >
      {opts.text}
      <span class="caret"></span>
    </virtual>
    <yield />
  </div>

  <script>
    this.direction = (this.opts.direction == 'up' || this.opts.direction == 'down' ? 'drop' + this.opts.direction : 'dropdown');
  </script>
</bs-dropdown>
