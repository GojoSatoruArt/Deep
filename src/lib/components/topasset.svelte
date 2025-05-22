<script lang="ts">
import '@carbon/charts-svelte/styles.css'
import { AreaChart } from '@carbon/charts-svelte'
import { optionsSvelte } from './chart/options.svelte';
import ethsvg from '../../../static/icons/eth.svg?raw'



let {
    chartData = {},
    chartOptions = optionsSvelte,
    profit  = '',
    token ='',
    icon = ethsvg,
    color = 'white'
    
  } = $props();

</script>
<div class="flex flex-col w-full max-w-150 h-auto justify-between bg-(--main-cardbg)  border-1 border-(--main-stroke) rounded-2xl">
    <div class="flex flex-row justify-between items-center w-full gap-2  p-(--spacing-padding)"> 
        <div class="flex items-center h-full w-full flex-row gap-3">
            <div  style="{`background-color: ${color};`}" class="flex justify-center items-center size-12  rounded-lg border-1 border-(--main-stroke)">
                    {@html icon}
            </div>

            <div class="flex flex-col">  
                <p class="opacity-55">Staked</p>
                <p class="font-medium text-[1.3rem] font-[GeneralSans]">{token}</p>
            </div>
        </div>
        <div class="size-5"></div>
    </div>
    <div class="w-full h-20 opacity-45 transition-all ease-in hover:opacity-75">
        <AreaChart data={chartData} options={chartOptions}/>
    </div>
    <div class="flex flex-col justify-start items-start p-(--spacing-padding)"> 
        <p class="opacity-55 text-[0.8rem]">Profit Rate</p>
        <p class="text-[1.3rem] font-medium">{profit}%</p>
    </div>
</div>


<style>
</style>