<script lang="ts">
  import { MoveVertical } from "lucide-svelte";

  import BlockControlButton from "./block-control-button.svelte";
  import ExpandingControls from "./expanding-controls.svelte";

  export let onResize: (event: PointerEvent) => void;
  export let onPointerDown: (event: PointerEvent) => void = () => {};
  export let reverse: boolean | undefined = false;
</script>

<ExpandingControls {reverse} on:pointerdown={onPointerDown}>
  <BlockControlButton
    cursor="grab"
    label="Resize block"
    on:pointerdown={onResize}
  >
    <MoveVertical class="svg-icon" />
  </BlockControlButton>
</ExpandingControls>
