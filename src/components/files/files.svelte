<script>
  import { all, Note, selected } from "./../../models/app.ts";
  import FilePreview from "./file_preview.svelte";
</script>

<style>
  .container {
    display: flex;
    flex-direction: column;
  }
</style>

<div class="container">
  {#each $all as item}
    <FilePreview note={item} />
  {/each}
  <button
    on:click={() => {
      $selected = Note('New note', '');
      $all.push($selected);
      $all = $all;
    }}>
    New note
  </button>
</div>
