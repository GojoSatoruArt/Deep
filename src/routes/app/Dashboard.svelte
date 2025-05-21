<script>
    import brandlogo from '../../../static/icons/brandlogo.svg?raw'
    import Button from '$lib/components/Button.svelte';
</script>

<div class="flex flex-col justify-between items-start w-full h-50 bg-(--main-cardbg) rounded-md border-1 border-(--main-stroke) p-5">

    <div class="flex justify-between items-center w-full">

        <div class="flex justify-center items-center gap-3">   
            {@html brandlogo}
            <p class="font-bold text-[1.1rem]">DeepStake</p>
            <div class="tag button flex justify-center items-center px-2 py-2  bg-transaparent text-(--main-light) rounded-lg border-1 border-(--main-stroke) font-medium"><p class="text-[0.8rem]">New Feature</p></div>
        </div>

        <div>
            <Button
            variant = 'secondary'
            name = 'Hide Feature'
            />
        </div>    
        
    </div>


    <div class="flex justify-between items-center w-full">

        <div class="flex justify-center items-center gap-3">   
            <p class="font-bold text-[2rem]">Liquid Staking Suite</p>
        </div>

        <div class="flex flex-row justify-center items-center gap-2">
            <Button
            variant = 'primary'
            name = 'Connect Wallet'
            />
            <Button
            variant = 'secondary'
            name = 'Enter Wallet Address'
            />
        </div>    
        
    </div>

    
</div>