<script>
    //icons
    import dashboardsvg from '../../../static/icons/dashboard.svg?raw'
    import bridgesvg from '../../../static/icons/bridge.svg?raw'
    import assetsvg from '../../../static/icons/assets.svg?raw'
    import poolsvg from '../../../static/icons/pool.svg?raw'
    import stakingsvg from '../../../static/icons/staking.svg?raw'
    import brandlogo from '../../../static/icons/brandlogo.svg?raw'
    //icons

    //components
    import Button from "./button.svelte";
    import { sidebar } from "./states.svelte";
    //components

    //function
    let icons = {
    Dashboard: dashboardsvg,
    Assets: assetsvg,
    Staking: stakingsvg,
    Bridge: bridgesvg,
    Pool: poolsvg,
    Swap: poolsvg
    };
    let link = $state(
        ['Dashboard', 'Assets', 'Staking', 'Bridge', 'Pool', 'Swap']
        );  
        
        function tabstate(tab) {
            sidebar.set(tab)
            console.log($state.snapshot(tab))
        }
    //function

    
</script>
<div class="sidebar flex flex-col justify-start items-between w-60 h-full  rounded-lg border-1 border-(--main-stroke) bg-(--main-cardbg)">

    <!-- Sidebar Brand-->
    <div class="sidebar-brand flex justify-start items-center w-full px-5 py-5 border-b-1 border-(--main-stroke) gap-3">
    {@html brandlogo}
    <p class="font-bold text-[1.2rem]">DeepStake</p>
    </div>
    <!-- Sidebar Brand-->

    <!-- Sidebar Link-->
    <div class="sidebar-link flex flex-col justify-start items-start w-full h-full px-5 py-2 gap-0">
    {#each link as links}
            <button
            class:active={$sidebar === links}
            class="flex justify-start items-center w-full bg-(--main-button) hover:px-1 py-(--spacing-padding) rounded-md border-1 border-transparent transition-all ease-in duration-75  gap-2 opacity-25 hover:opacity-50" on:click={()=>tabstate(links)}>
            {#if icons[links]} {@html icons[links]} {/if} {links}</button>
            {/each}
    </div>
    <!-- Sidebar Link-->

    <!-- Sidebar CTA-->
    <div class="flex flex-col w-full">
        <div class="sidebar-button flex flex-col w-full justify-center items-center">
            <div class="wallet flex flex-col w-full p-(--spacing-padding) border-y-1 border-(--main-stroke) gap-5">
                <div class="wallet-info flex flex-col justify-center items-stretch gap-5">
                    <div class="wallet flex flex-row justify-start items-center   gap-2">
                        <div class="size-7 bg-(--main-stroke) rounded-full"></div>
                        <p class="whitespace-nowrap mr-3">No Wallet Connected</p>
                    </div>
                    <Button/>
                </div>
            </div>

            <div class="cta flex w-full">
                <div class="wallet-info flex flex-col justify-center w-full items-stretch  p-(--spacing-padding) border-y-1 border-(--main-stroke) bg(--main-cardsub)">
                    <div class="flex flex-col justify-center items-start gap-2 p-(--spacing-padding)  border-1 border-(--main-stroke) rounded-lg">
                        <p class="font-semibold">Active Premium</p>
                        <p class="opacity-75 line-clamp-2">Unlock all Features on DeepStake</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Sidebar CTA-->
    </div>

<style>
    .active{
        opacity: 100;
        font-weight: 500;
        padding-left: 0.5rem;

    }
</style>