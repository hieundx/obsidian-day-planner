<script lang="ts">
  import { Move, Copy } from "lucide-svelte";

  import BlockControlButton from "./block-control-button.svelte";
  import ExpandingControls from "./expanding-controls.svelte";

  export let onMove: (event: PointerEvent) => void;
  export let onCopy: (event: PointerEvent) => void = () => {};
  export let onPointerDown: (event: PointerEvent) => void = () => {};
</script>

<ExpandingControls --right="4px" --top="4px" on:pointerdown={onPointerDown}>
  {#if onCopy}
    <BlockControlButton
      cursor="grab"
      label="Copy block"
      on:pointerdown={onCopy}
    >
      <Copy class="svg-icon" />
    </BlockControlButton>
  {/if}
  <BlockControlButton cursor="grab" label="Move block" on:pointerdown={onMove}>
    <Move class="svg-icon" />
  </BlockControlButton>
</ExpandingControls>
