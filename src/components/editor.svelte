<script>
  import { selected } from "./../models/app.ts";

  let note = $selected;
  $: note = $selected;
  let text = "";
  $: text = $note.text;
</script>

<style>
  .container {
    width: 100%;
    height: 100%;
  }
  .editor {
    padding: 1em;
    width: calc(100% - 2em);
  }
</style>

<div class="container">
  <h3>
    Note:
    <input
      type="text"
      value={$note.name}
      on:input={v => ($note.name = v.target.value)} />
  </h3>

  <textarea
    class="editor"
    value={text}
    on:input={v => {
      $note.text = v.target.value;
    }} />

</div>
