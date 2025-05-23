<script>
import { searchQuery } from "./states.svelte";
import { searchFocused } from "./states.svelte";
import Search from '../../../static/icons/search.svg?raw'
function handleKeydown(event){
    if (event.key === 'Escape'){
        event.target.blur();
    }
}

</script>
    <div class="relative flex justify-end items-center w-full">
    <input
    on:focus={() => $searchFocused = true}
    on:blur={() => $searchFocused = false}
    on:keydown = {handleKeydown}
    class="w-33 md:w-75 placeholder:text-(--main-light) placeholder:opacity-35 text-(--main-light) text-sm border border-(--main-stroke) rounded-md pl-3 py-2 transition-all duration-300 ease focus:outline-none focus:border-(--main-stroke-hover) hover:border-(--main-stroke-hover) shadow-sm focus:shadow focus:w-full"
    placeholder="Search Coins" bind:value={$searchQuery}/>
    <div class="size-4 absolute inset-y-0 right-2 top-[11px] flex items-center opacity-50">
        {@html Search}
    </div>
    </div>
