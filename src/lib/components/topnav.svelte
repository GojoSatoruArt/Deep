<script>
    import Button from '$lib/components/Button.svelte'
    import Search from '$lib/components/Search.svelte';
</script>

<div class="topnav-content flex justify-between items-center w-full h-auto p-(--spacing-padding) border-1 rounded-md border-(--main-stroke) bg-(--main-cardbg) gap-2">
                
    <div class="flex flex-row justify-center items-center gap-2">
        <Button name='Deposit'/> <Button name='Withdraw Funds'/>
    </div>
    

   
    <div class="flex justify-end items-center w-full gap-2">
        <Search/>
        <Button variant='secondary' name='Settings'/>
    </div>
    
</div>
