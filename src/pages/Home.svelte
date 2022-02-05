<script>
    import { onMount } from "svelte";
    import { props } from "../stores";

    onMount(() => {
        console.log($props);
    });
</script>

<svelte:head>
    <title>Home</title>
</svelte:head>
<div class="row">
    <div class="col">Home</div>
</div>
