<bs-dropdown-menu-item>
  <li class="{ opts.disabled }">
    <a href="{ link }">{ opts.text }</a>
  </li>

  <script>
    this.link = this.opts.link || '#';
  </script>
</bs-dropdown-menu-item>
