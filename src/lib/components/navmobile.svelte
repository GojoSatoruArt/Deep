<script>
    //icons
    import dashboardsvg from '../../../static/icons/dashboard.svg?raw'
    import bridgesvg from '../../../static/icons/bridge.svg?raw'
    import assetsvg from '../../../static/icons/assets.svg?raw'
    import poolsvg from '../../../static/icons/pool.svg?raw'
    import stakingsvg from '../../../static/icons/staking.svg?raw'
    import { register } from 'swiper/element/bundle';
    import { gsap } from 'gsap';
    import { Flip } from "gsap/Flip";
    gsap.registerPlugin(Flip);
    
    import { onMount, tick } from 'svelte';
    register();
    //icons

    //components
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
    
        async function tabstate(tab) {
        const state = Flip.getState("[data-flip-id='line']");
        sidebar.set(tab);
        await tick(); // wait for DOM to update
        Flip.from(state, {
        duration: 1,
        ease: "power1.inOut",
        absolute: true,
        });
        }
    //function

     //Animation

    //Animation

</script>
<div class="sidebar w-full border-b-1 border-(--main-stroke) bg-(--main-cardbg) px-0 py-0">


    <!-- Sidebar Link-->
    <div class="sidebar-link flex justify-between flex-row h-auto">
        <swiper-container slides-per-view="auto" space-between="">
            {#each link as links}
              <swiper-slide class="flex justify-center items-center w-fit">
                <button
                  class:active={$sidebar === links}
                  class="relative flex justify-center items-center w-full py-(--spacing-padding) px-5 rounded-md border-1 border-transparent transition-all ease-in duration-75 gap-1 opacity-25  hover:opacity-50"
                  on:click={() => tabstate(links)}
                >
                  {#if icons[links]}
                    {@html icons[links]}
                  {/if}
                  {links}
                </button>
                {#if $sidebar === links }
                <div data-flip-id="line" class="size-5 absolute bottom-0 w-full h-[1px] bg-white">hello</div>
                {/if}
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