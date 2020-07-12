<script>
  import { selected } from "./../../models/app.ts";
  let snote = $selected;
  $: snote = $selected;
  
  export let note;

  let tags = [];
  note.subscribe(v => (tags = snote.tags()));
</script>

<style>
  span {
    padding: 1em;
  }
  span:hover {
    color: red;
  }
  .selected {
    color: green;
  }
</style>

<div>
  <div>
    <span
      on:click={() => {
        selected.set(note);
      }}
      class:selected={$snote.id == $note.id}>
      {$note.name}:{$note.id}
    </span>
  </div>
  {#each tags as item}
    <span>{item}</span>
  {/each}
</div>
