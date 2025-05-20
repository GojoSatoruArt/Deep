<script>
    import '$lib/css/system.css'
    import Button from '$lib/components/Button.svelte'
    import Section from '$lib/components/Section.svelte'
    import Container from '$lib/components/Container.svelte'
    import Sidebar from '$lib/components/Sidebar.svelte';
    import { sidebar } from '$lib/components/states.svelte';
    import Search from '$lib/components/Search.svelte';
    import Topnav from '$lib/components/Topnav.svelte';
</script>

<Section>

    <Sidebar/>

        <div class="topnav flex flex-col justify-center items-center w-full h-full px-2 gap-2">


           <Topnav/>
            

           <div class="flex flex-col justify-start items-start w-full h-full p-(--spacing-gap) overflow-x-scroll">


            <Container>

                <div class="flex justify-center items-center w-full"> <p>{$sidebar}</p></div>
              
               </Container>
               
            


           </div>



          

        
        </div>

    
</Section>
