<script>
    import Button from "./button.svelte";

    let{
        icon ='icon',
        token = 'Shib Token',
        balance = '240,106,890',
        price = '2,621',
        ratio = '2:1',
        rewards = '210.23',
        lock = 'Locked'
    }=$props();
</script>


<div class="flex flex-col position-wrap w-full gap-5 p-(--spacing-padding) bg-(--main-cardbg) border-1 border-(--main-stroke) rounded-2xl">

    <div class="flex flex-row justify-between items-center position-card w-full">

    <div class="flex flex-row justify-start items-center w-full"> 
    <div class="flex flex-col md:flex-row justify-center items-start md:items-center gap-2"> 
    <div class="flex justify-center items-center size-12  rounded-lg border-1 border-(--main-stroke)">{icon}</div>
    
    <div class="flex flex-col justify-start items-start">
        <p class="font-medium text-[1.1rem] font-[GeneralSans]">{token}</p> 
        <p class="opacity-55 text-sm">{token}</p>
    
    </div>
  
    </div>
    </div>

    <div class="flex flex-col justify-end items-end"> 


    <div class="opacity-55 text-sm whitespace-nowrap">Current Staked / Balance</div>
    <p class="font-medium text-[1.5rem] font-[GeneralSans]">{balance}</p> 
    </div>

    </div>

    <div class="flex flex-wrap justify-between items-center position-card w-full">

        <div class="flex flex-col justify-start items-start"> 
        <div class="opacity-55 text-sm whitespace-nowrap">Price</div>
        <p class="font-medium font-[GeneralSans]">${price}</p> 
        </div>

        <div class="position-line w-[1px] h-5 bg-white opacity-25"></div>

        <div class="flex flex-col justify-start items-start"> 
        <div class="opacity-55 text-sm whitespace-nowrap">Staking Ratio</div>
        <p class="font-medium font-[GeneralSans]">{ratio}</p> 
        </div>

        <div class="position-line w-[1px] h-5 bg-white opacity-25"></div>

        <div class="flex flex-col justify-start items-start"> 
        <div class="opacity-55 text-sm whitespace-nowrap">Rewards</div>
        <p class="font-medium font-[GeneralSans]">${rewards}</p> 
        </div>

        <div class="position-line w-[1px] h-5 bg-white opacity-25"></div>

        <div class="flex flex-col justify-start items-start"> 
        <div class="opacity-55 text-sm whitespace-nowrap">Locked</div>
        <p class="font-medium font-[GeneralSans]">{lock}Days</p> 
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