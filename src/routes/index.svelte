<script>
	import Preview from './../components/preview.svelte';
	import Files from './../components/files/files.svelte';
  import Editor from "./../components/editor.svelte";
</script>

<style>
  .container {
    display: flex;
    height: 100%;
    width: 100%;
  }
  .files_pannel {
    width: 300px;
  }
  .editor_pannel,
  .preview_pannel {
    flex: 1;
  }
  .files_pannel,
  .editor_pannel,
  .preview_pannel {
    resize: horizontal;
    border: 1px solid red;
    height: 100%;
  }
</style>

<div class="container">
  <div class="files_pannel">
    <Files />
  </div>
  <div class="editor_pannel">
    <Editor />
  </div>
  <div class="preview_pannel">
    <Preview />
  </div>
</div>
