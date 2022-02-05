<script>
    import { onMount } from "svelte";
    import { socket, socketStores } from "../stores";
    let { example } = socketStores;
    onMount(() => {
        $socket.emit("hi", "hello from Client");
    });
</script>

<div class="row">
    <div class="col">About</div>
    <div>{$example}</div>
</div>
