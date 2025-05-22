<script>
    //icons
    import dashboardsvg from '../../../static/icons/dashboard.svg?raw'
    import bridgesvg from '../../../static/icons/bridge.svg?raw'
    import assetsvg from '../../../static/icons/assets.svg?raw'
    import poolsvg from '../../../static/icons/pool.svg?raw'
    import stakingsvg from '../../../static/icons/staking.svg?raw'
    import { register } from 'swiper/element/bundle';
    register();
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
<div class="sidebar w-full rounded-lg border-1 border-(--main-stroke) bg-(--main-cardbg) px-2">


    <!-- Sidebar Link-->
    
    <div class="sidebar-link flex justify-between flex-row w-full h-auto">

        <swiper-container slides-per-view="auto" space-between="10">
            {#each link as links}
              <swiper-slide class="flex justify-center items-center w-fit">
                <button
                  class:active={$sidebar === links}
                  class="flex justify-center items-center w-full py-(--spacing-padding) rounded-md border-1 border-transparent transition-all ease-in duration-75 gap-1 opacity-25 hover:opacity-50"
                  on:click={() => tabstate(links)}
                >
                  {#if icons[links]}
                    {@html icons[links]}
                  {/if}
                  {links}
                </button>
              </swiper-slide>
            {/each}
          </swiper-container>
    </div>
    </div>

<style>
    .active{
        opacity: 100;
        font-weight: 500;
        

    }
</style>