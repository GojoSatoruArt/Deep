<script>

    import '$lib/css/system.css'
    import Section from '$lib/components/section.svelte'
    import Container from '$lib/components/container.svelte'
    import Sidebar from '$lib/components/sidebar.svelte';
    import { sidebar } from '$lib/components/states.svelte';
    import Topnav from '$lib/components/topnav.svelte';
    import Dashboard from './Dashboard.svelte';
    import Assets from './Assets.svelte';
    import Staking from './Staking.svelte';
    import Bridge from './Bridge.svelte'; 
    import Pool from './Pool.svelte'
   

    let tab = {
        Dashboard: Dashboard,
        Assets: Assets,
        Staking: Staking,
        Bridge: Bridge,
        Pool: Pool
    } 
</script>

    <Section>
    <Sidebar/>
            <div class="main-content flex flex-col justify-center items-center w-full h-full py-[0.1rem] px-2 gap-2 overflow-x-hidden">
           <Topnav/>
        
           <div class="flex flex-col justify-start items-center w-full h-full py-(--spacing-gap) overflow-x-scroll gap-5">

            <Container>
                <div class="flex justify-start items-start w-full"> 
                    <p class="text-[1.2rem] font-medium">{$sidebar}</p>
                </div>
            </Container>

           
            {#key sidebar}
            <svelte:component this={tab[$sidebar]} />
            {/key}
           

           </div>       
        </div>
</Section>
