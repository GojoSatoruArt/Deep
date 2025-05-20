<script>
    import '$lib/css/system.css'
    import Button from '$lib/components/button.svelte'
    import Section from '$lib/components/section.svelte'
    import Container from '$lib/components/container.svelte'
    import Sidebar from '$lib/components/sidebar.svelte';
    import { sidebar } from '$lib/components/states.svelte';

  
  function test() {
            console.log($state.snapshot($sidebar));
        }

</script>

<Section>

    <Sidebar/>
    
</Section>
