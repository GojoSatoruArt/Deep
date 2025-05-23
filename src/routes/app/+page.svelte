<script>
    import '$lib/css/system.css'
    import Section from '$lib/components/section.svelte'
    import Sidebar from '$lib/components/sidebar.svelte';
    import Navmobile from '$lib/components/navmobile.svelte';
    import Topnav from '$lib/components/topnav.svelte';
    import Dashboard from './Dashboard.svelte';
    import Assets from './Assets.svelte';
    import Staking from './Staking.svelte';
    import Bridge from './Bridge.svelte'; 
    import Pool from './Pool.svelte'
    import { onMount } from 'svelte';
    import { sidebar } from '$lib/components/states.svelte';

    let tab = {
        Dashboard: Dashboard,
        Assets: Assets,
        Staking: Staking,
        Bridge: Bridge,
        Pool: Pool
    } 

    let isMobile = false;
    
    if (typeof window !== 'undefined') {
        isMobile = window.innerWidth <= 768;
    }
   
    

</script>

    <Section>
       
        {#if !isMobile} <Sidebar/> {/if}

            <div class="main-content flex flex-col justify-center items-center w-full h-full py-0 md:py-[0.1rem] px-0 md:px-2 overflow-x-hidden">
            
           <Topnav/> {#if isMobile}<Navmobile/> {/if}
      
           <div class="flex flex-col justify-start items-center w-full h-full py-(--spacing-gap) overflow-x-scroll gap-5">
 
            {#key sidebar} <svelte:component this={tab[$sidebar]}/> {/key}

           </div>       
        </div>
</Section>
