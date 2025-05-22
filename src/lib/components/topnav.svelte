<script>
    import Button from '$lib/components/button.svelte'
    import Search from '$lib/components/search.svelte';
    import { sidebar } from './states.svelte';
</script>
<div class="w-full px-2 py-[0.1rem]"> 
<div class="topnav-content flex justify-between items-center w-full h-auto p-(--spacing-padding) border-1 rounded-md border-(--main-stroke) bg-(--main-cardbg) gap-5 overflow-x-hidden">
                
    <div class="flex flex-row justify-center items-center gap-2">
        <p class="font-medium">{$sidebar}</p>
    </div>
    

   
    <div class="flex justify-end items-center w-full gap-2">
        <Search/>
        <Button name='Deposit'/> <Button name='Withdraw Funds'/>
        <Button variant='secondary' name='Settings'/>
    </div>
    
</div>
</div>