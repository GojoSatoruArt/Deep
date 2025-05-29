<script>
    import brandlogo from '../../../static/icons/brandlogo.svg?raw'
    import profile from '../../../static/icons/profile.svg?raw'
    import Button from '$lib/components/button.svelte'
    import Search from '$lib/components/search.svelte'
    import Gap from './gap.svelte'
    import { fly } from 'svelte/transition'
    import { sidebar } from './states.svelte'
    import { searchQuery } from './states.svelte'
    import { searchFocused } from './states.svelte'
    import { isMobileProfile } from './states.svelte'

    let setting = 'Setting'

    </script>
    
<div class="topnav-wrap w-full px-0 z-200 md:px-2 py-[0.1rem]"> 
<div class="topnav-content relative flex justify-between items-center w-full h-auto p-(--spacing-padding) border-b-1 md:border-1 rounded-0 md:rounded-md border-(--main-stroke) bg-(--main-cardbg) gap-5">
                
    <div class="flex flex-row justify-center items-center gap-2">
 
        <div class="sidebar-brand flex md:hidden justify-center items-center w-full gap-2">
            <div class="flex justify-center items-center w-4">{@html brandlogo} </div>
            <p class="font-bold text-[1rem]">DeepStake</p>
        </div>
   
        <p class="hidden md:flex font-medium">{$sidebar}</p>
      
    </div>
    

   
    <div class="flex justify-end items-center w-full gap-2">
        <Search/>
      
        <button on:click={() => $isMobileProfile = !$isMobileProfile} class="flex md:hidden size-8 rounded-full bg-(--main-cardbg) border-1 border-(--main-stroke) opacity-55"> {@html profile} </button>
     
        
       <div class="hidden md:flex gap-2">
        <Button name='Deposit'/> <Button name='Withdraw Funds'/>
        <Button onClick={() => $sidebar = setting} variant='secondary' name='Settings'/>
       </div>
        
    
     
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

{#if $isMobileProfile}
<div in:fly = {{y:-100, duration: 150}} out:fly = {{y:-100, duration: 150}} class="profile-nav flex flex-col items-between absolute w-full h-dvh bg-(--main-dark) z-100 border-t-1 border-(--main-stroke) gap-1 pt-16">
    <div class="button-wrap flex flex-col w-full h-full gap-2 p-5">
        <Button name='Deposit'/> <Button name='Withdraw Funds'/>
        <Button variant='secondary' name='Settings'/>
    </div>
    <div class="flex flex-col justify-center items-start gap-2 p-(--spacing-padding) border-1 border-(--main-stroke) rounded-lg">
        <p class="font-semibold">Active Premium</p>
        <p class="opacity-75 line-clamp-2">Unlock all Features on DeepStake</p>
    </div>
</div>    
{/if}

