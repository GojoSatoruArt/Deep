<script>
    //icons
    import dashboardsvg from '../../../static/icons/dashboard.svg?raw'
    import bridgesvg from '../../../static/icons/bridge.svg?raw'
    import assetsvg from '../../../static/icons/assets.svg?raw'
    import poolsvg from '../../../static/icons/pool.svg?raw'
    import stakingsvg from '../../../static/icons/staking.svg?raw'
    //icons
    import { register } from 'swiper/element/bundle';
    register();

    //components
    import { sidebar } from "./states.svelte";
    //components

    //function
    let icons = { Dashboard: dashboardsvg, Assets: assetsvg, Staking: stakingsvg, Bridge: bridgesvg, Pool: poolsvg, Swap: poolsvg};
    let link = $state(['Dashboard', 'Assets', 'Staking', 'Bridge', 'Pool', 'Swap']);  
    function tabstate(tab) {
    sidebar.set(tab);
    }
    //function

</script>

<div class="sidebar flex md:hidden w-full border-b-1 border-(--main-stroke) bg-(--main-cardbg)">
    <!-- Sidebar Link-->
        <swiper-container class="w-full" slides-per-view="auto" space-between="5" css-mode="false" speed="400">
            {#each link as links}
              <swiper-slide class="w-fit">
                <button class:active={$sidebar === links}
                  class="relative flex justify-center items-center w-auto h-full py-(--spacing-padding) px-5 rounded-md border-1 border-transparent transition-all ease-in duration-75 gap-1 opacity-25 hover:opacity-50"
                  on:click={() => tabstate(links)}>
                  {links}</button>
                {#if $sidebar === links }
                <div data-flip-id="line" class="size-5 absolute bottom-0 w-full h-[1px] bg-white"></div>
                {/if}
              </swiper-slide>
            {/each}
          </swiper-container>
    <!-- Sidebar Link-->
    </div>

<style>
    .active{
        opacity: 100;
        font-weight: 500;
    }
</style>