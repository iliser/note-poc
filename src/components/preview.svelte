<script>
  import { selected } from "./../models/app.ts";
  import marked from "marked";
  let note = $selected;
  $: note = $selected;
  let md = "";
  $: md = marked($note.text);
</script>

<div>
  {@html md}
</div>
