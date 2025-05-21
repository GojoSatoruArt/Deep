<script lang="ts">
import { LineChart } from '@carbon/charts-svelte'
import '@carbon/charts-svelte/styles.css'

function randFloat(min, max) {
    return parseFloat((Math.random() * (max - min) + min).toFixed(2));
  }
  function generateFluctuatingData(days = 30) {
    const result = [];
    let currentValue = randFloat(50, 150); // start with a base value
    const today = new Date();

    for (let i = 0; i < days; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() - (days - i)); // go backward

      // fluctuate up/down randomly
      const delta = randFloat(-5, 5);
      currentValue = Math.max(0, currentValue + delta); // keep it >= 0

      result.push({
        group: "ETH",
        date: date.toISOString().split("T")[0],
        value: currentValue
      });
    }

    return result;
  } 
  const data = generateFluctuatingData(10);
  const options = {
    axes: {
      bottom: {
        mapsTo: "date",
        scaleType: "time",
        visible: true, // hide x-axis
      },
      left: {
        mapsTo: "value",
        scaleType: "linear",
        visible: false,
        domain: [50, 100], // hide y-axis
      },
    },
    curve: "curveMonotoneX", // smooth line
    points: {
      enabled: true, // hide points
    },
    grid: {
      x: {
        enabled: false, // hide grid
      },
      y: {
        enabled: false,
      },
    },
    toolbar: {
      enabled: false, // hide toolbar
    },
    legend: {
      enabled: false, // hide legend
    },
    height: "200px",
  };

  
</script>


<div class="flex flex-col w-100 h-auto justify-between bg-(--main-cardbg)  border-1 border-(--main-stroke) rounded-2xl">


    <div class="flex flex-row justify-between items-center w-full gap-5  p-(--spacing-padding)"> 


        <div class="flex items-center h-full w-full  flex-row gap-2">

            <div class="flex justify-center items-center bg-(--main-cardbg) p-5 rounded-lg border-1 border-(--main-stroke)">ID</div>

            <div class="flex flex-col gap-1 ">  
                <p class="opacity-55">Stake</p>
                <p class="font-bold text-[1.3rem]">Ethereum (ETH)</p>
            </div>
        </div>

        <div class="size-5"></div>
 
    </div>
    <div class="w-ful h-50 overflow-hidden opacity-75">
        <LineChart {data} {options}/>
    </div>
    
    

    <div class="flex flex-col justify-start items-start p-(--spacing-padding)"> 
        <p class="opacity-55 text-[0.8rem]">Profit Rate</p>
        <p class="text-[1.3rem] font-medium">14.85%</p>
    </div>
    
</div>

<style>
  
</style>