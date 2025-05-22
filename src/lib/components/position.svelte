<script>
    import Button from "./button.svelte";
</script>


<div class="flex flex-col position-wrap w-full gap-5 p-(--spacing-padding) bg-(--main-cardbg) border-1 border-(--main-stroke) rounded-2xl">

    <div class="flex flex-row justify-between items-center position-card w-full">

    <div class="flex flex-row justify-start items-center w-full"> 
    <div class="flex flex-row justify-center items-center gap-2"> 
    <div class="flex justify-center items-center size-12  rounded-lg border-1 border-(--main-stroke)">icon</div>
    <div class="flex flex-col justify-start items-start">
        <p class="font-medium text-[1.1rem] font-[GeneralSans]">Shib Token</p> 
        <p class="opacity-55 text-sm">Shiba Inu</p>
    
    </div>
  
    </div>
    </div>

    <div class="flex flex-col justify-end items-end"> 
    <div class="opacity-55 text-sm whitespace-nowrap">Current Staked / Balance</div>
    <p class="font-medium text-[1.5rem] font-[GeneralSans]">240,106,890</p> 
    </div>

    </div>

    <div class="flex flex-row justify-between items-center position-card w-full">

        <div class="flex flex-col justify-start items-start"> 
        <div class="opacity-55 text-sm whitespace-nowrap">Price</div>
        <p class="font-medium font-[GeneralSans]">$2,621</p> 
        </div>

        <div class="position-line w-[1px] h-5 bg-white opacity-25"></div>

        <div class="flex flex-col justify-start items-start"> 
        <div class="opacity-55 text-sm whitespace-nowrap">Staking Ratio</div>
        <p class="font-medium font-[GeneralSans]">2:1</p> 
        </div>

        <div class="position-line w-[1px] h-5 bg-white opacity-25"></div>

        <div class="flex flex-col justify-start items-start"> 
        <div class="opacity-55 text-sm whitespace-nowrap">Rewards</div>
        <p class="font-medium font-[GeneralSans]">$210.23</p> 
        </div>

        <div class="position-line w-[1px] h-5 bg-white opacity-25"></div>

        <div class="flex flex-col justify-start items-start"> 
        <div class="opacity-55 text-sm whitespace-nowrap">Locked</div>
        <p class="font-medium font-[GeneralSans]">2 Days</p> 
        </div>

        </div>


    <div class="position-button w-full items-stretch flex flex-row gap-2">
        <Button
        name = 'Stake'
        />
        <Button
        variant = 'secondary'
        name = 'Unstake'
        />
    </div>
    

</div>