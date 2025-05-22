<script>
    import brandlogo from '../../../static/icons/brandlogo.svg?raw'
    import Button from '$lib/components/button.svelte'
    import Search from '$lib/components/search.svelte';
    import Gap from './gap.svelte';
    import { sidebar } from './states.svelte';
    import { searchQuery } from './states.svelte';
    import { searchFocused } from './states.svelte';
    import { fly } from 'svelte/transition';
    import { onMount } from 'svelte';
    import { isMobile } from './states.svelte';
    

    function updateIsMobile() {
    $isMobile = window.innerWidth <= 768; // 768px is a common mobile breakpoint
    }   
    onMount(() => {
    updateIsMobile(); // Initial check
    window.addEventListener("resize", updateIsMobile);
    return () => window.removeEventListener("resize", updateIsMobile); // Cleanup on destroy
    });

    
</script>
<div class="topnav-wrap w-full px-0 md:px-2 py-[0.1rem]"> 
<div class="topnav-content relative flex justify-between items-center w-full h-auto p-(--spacing-padding) border-1 rounded-md border-(--main-stroke) bg-(--main-cardbg) gap-5">
                
    <div class="flex flex-row justify-center items-center gap-2">
        {#if $isMobile}
        <div class="sidebar-brand flex justify-start items-center w-full gap-3">
            {@html brandlogo}
            <p class="font-bold text-[1.2rem]">DeepStake</p>
            </div>

            {:else}
            <p class="font-medium">{$sidebar}</p>
        {/if}
        
    </div>
    

   
    <div class="flex justify-end items-center w-full gap-2">
        <Search/>
        {#if !$isMobile}
        <Button name='Deposit'/> <Button name='Withdraw Funds'/>
        <Button variant='secondary' name='Settings'/>
        {/if}
     
    </div>
 
    {#if $searchFocused && $searchQuery.trim().length > 0}

    <div in:fly={{ y: -100, duration: 150 }} out:fly={{ y: -100, duration: 150 }} class="flex flex-col justify-center items-center absolute top-18 left-0 z-100 w-full h-auto rounded-lg bg-[#0A0A0A] border-1 border-(--main-stroke) p-(--spacing-padding) gap-3">
        <div class="search-title w-full"> 
            <p class="font-medium font-[GeneralSans] text-[1.5rem]">Search: {$searchQuery}</p>
        </div>
        <Gap/>
        <div class="search-title w-full h-full"> 
            <p class="opacity-55">no results</p>
        </div>


    </div>
        
    {/if}

    



    
</div>
</div>