<script>
    import brandlogo from '../../../static/icons/brandlogo.svg?raw';
    import Button from '$lib/components/button.svelte';
    import Container from '$lib/components/container.svelte';
    import Cardbg from '$lib/components/topasset.svelte';
    import { register } from 'swiper/element/bundle';
    register();

    

    
</script>

<Container>

<div class="feature flex flex-col justify-between items-start w-full h-auto bg-(--main-cardbg) rounded-2xl  border-(--main-stroke) p-5 gap-15 ">

    <div class="flex justify-between items-center w-full">

        <div class="flex justify-center items-center gap-5">   
            {@html brandlogo}
            <p class="font-bold text-[1.1rem]">DeepStake</p>
            <div class="tag button flex justify-center items-center px-2 py-2  bg-transaparent text-(--main-light) rounded-lg border-1 border-(--main-stroke) font-medium">
                <p class="text-[0.8rem]">New Feature</p>
            </div>
        </div>

        <div>
            <Button
            variant = 'secondary'
            name = 'Hide Feature'
            />
        </div>    
        
    </div>


    <div class="flex justify-between items-end w-full gap-10 md:gap-10 flex-wrap">

        <div class="flex flex-col justify-center items-start gap-2">   
            <p class="font-bold text-[2rem]">Liquid Staking Suite</p>
            <p class="opacity-50">Manage and grow your assets with real-time rewards tracking and flexible Ethereum staking strategies.</p>
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

<div class="flex flex-col justify-between items-center w-full p-(--spacing-padding) rounded-2xl border-1 border-(--main-stroke) gap-5">

    <div class="flex justify-between w-full">

        <div class="flex justify-center items-center gap-3">   
            <div class="flex flex-col justify-center items-start gap-1">   
                <p class="opacity-50 ">Recommended coins for 24 Hours</p>
                <p class="font-bold text-[1.5rem]">Top Staking Assets</p>
            </div>
    
        </div>
    
        <div>
            <Button
            variant = 'secondary'
            name = '24 Hours'
            />
        </div>   

    </div>

        <div class="swiper flex flex-row justify-start items-start w-full rounded-2xl overflow-x-hidden gap-3">
                <swiper-container  slides-per-view="auto" space-between="10">
                    <swiper-slide class="flex justify-center items-center w-auto">
                        <Cardbg/>
                    </swiper-slide>
                    <swiper-slide class="flex justify-center items-center w-auto">
                        <Cardbg/>
                    </swiper-slide>
                    <swiper-slide class="flex justify-center items-center w-auto">
                        <Cardbg/>
                    </swiper-slide>
                    <swiper-slide class="flex justify-center items-center w-auto">
                        <Cardbg/>
                    </swiper-slide>
                    <swiper-slide class="flex justify-center items-center w-auto">
                        <Cardbg/>
                    </swiper-slide>
                    <swiper-slide class="flex justify-center items-center w-auto">
                        <Cardbg/>
                    </swiper-slide>
                   
                  </swiper-container>
          </div>     
</div>

</Container>

<style>
    .feature{
        background: radial-gradient(120% 140.13% at 50% 20%, transparent 40.41%, rgb(14, 117, 128) 69.27%);
    }

    
</style>