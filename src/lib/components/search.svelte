<script>
import { searchQuery } from "./states.svelte";
import { searchFocused } from "./states.svelte";

function handleKeydown(event){
    if (event.key === 'Escape'){
        event.target.blur();
    }
}

</script>
    <input
    on:focus={() => $searchFocused = true}
    on:blur={() => $searchFocused = false}
    on:keydown = {handleKeydown}
    class="w-80 placeholder:text-(--main-light) placeholder:opacity-35 text-(--main-light) text-sm border border-(--main-stroke) rounded-md pl-3 pr-28 py-2 transition-all duration-300 ease focus:outline-none focus:border-(--main-stroke-hover) hover:border-(--main-stroke-hover) shadow-sm focus:shadow focus:w-full"
    placeholder="Search Coins" bind:value={$searchQuery}/>

