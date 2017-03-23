<bs-checkbox>
    <div class="checkbox">
        <label class="{ inlineClass }">
            <input type="checkbox" value="{ opts.value }">
            { opts.text }
        <label>
    </div>

    <script>
        this.opts.inlineClass = (this.opts.inline ? 'checkbox-inline' : '');
    </script>
</bs-checkbox>