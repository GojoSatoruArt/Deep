<script>
    import usdc from '../../../static/icons/usdc.svg?raw'
    import usdt from '../../../static/icons/usdt.svg?raw'
    import dai from '../../../static/icons/dai.svg?raw'
    import wbtc from '../../../static/icons/wbtc.svg?raw'
    import brandlogo from '../../../static/icons/brandlogo.svg?raw';
    import Button from '$lib/components/button.svelte';
    import Container from '$lib/components/container.svelte';
    import Cardbg from '$lib/components/topasset.svelte';
    import { register } from 'swiper/element/bundle';
    import { chartData } from '$lib/components/chart/chart.svelte';
    import { chartData2 } from '$lib/components/chart/chart.svelte';
    import { chartData3 } from '$lib/components/chart/chart.svelte';
    import { chartData4 } from '$lib/components/chart/chart.svelte';
    import { chartData5 } from '$lib/components/chart/chart.svelte';
    import Gap from '$lib/components/gap.svelte'
    import Position from '$lib/components/position.svelte';
    import Title from '$lib/components/title.svelte';
    
    register();
</script>

<div class="main-content flex flex-col w-full gap-10">

    

    <Container>
        <div class="feature flex flex-col justify-between items-start w-full h-auto bg-(--main-cardbg) rounded-2xl  border-(--main-stroke) p-4 gap-15 md:gap-25">
            <div class="flex justify-between items-start w-full">        
                <div class="flex flex-col md:flex-row justify-start items-start md:items-center gap-3">   
                    {@html brandlogo}
                    <p class="font-bold text-[1.1rem]">DeepStake</p>
                    <div class="tag button flex justify-center items-center px-2 py-2  bg-transaparent text-(--main-light) rounded-lg border-1 border-(--main-stroke) font-medium">
                        <p class="text-[0.8rem]">New Feature</p>
                    </div>
                </div>
                <div>
                    <Button variant = 'secondary' name = 'Hide Feature'/>
                </div>    
                
            </div>
    
            <div class="flex flex-col sm:flex-row justify-between items-end w-full gap-10 md:gap-10">
                <div class="flex flex-col justify-center items-start gap-1">   
                    <p class="font-medium font-[GeneralSans] text-[1.5rem]">Liquid Staking Suite</p>
                    <p class="opacity-50">Manage and grow your assets with real-time rewards tracking and flexible Ethereum staking strategies.</p>
                </div>
                <div class="flex flex-row justify-center items-center gap-2">
                    <Button variant = 'primary'name = 'Connect Wallet'/>
                    <Button variant = 'secondary' name = 'Enter Wallet Address'/>
                </div>    
            </div>
        </div>
    </Container>
 
    <Container>
            <div class="flex flex-col justify-between items-center w-full rounded-2xl tborder-1 border-(--main-stroke) gap-2">
                <div class="flex flex-col md:flex-row justify-between items-start w-full">
                    <div class="flex justify-center items-center gap-3 mb-2">   
                        <Title
                        title = 'Top Staking Assets'
                        subtitle = 'Recommended coins for 24 Hours'/>

                    </div>
                    <div>
                        <Button variant = 'secondary' name = '24 Hours'/>
                    </div>   
                </div>
                    <div class="swiper flex flex-row justify-start items-start w-full rounded-2xl overflow-x-hidden gap-3">
                            <swiper-container  slides-per-view="auto" space-between="10">
                                <swiper-slide class="flex justify-center items-center w-auto">
                                    <Cardbg
                                    chartData = {chartData}
                                    profit = '58.65'
                                    token = 'ETH'
                                    color = #627EEA/>
                                </swiper-slide>
                                <swiper-slide class="flex justify-center items-center w-auto">
                                    <Cardbg
                                    chartData = {chartData2}
                                    profit = '80.91'
                                    token = 'USDT'
                                    icon = {usdt}
                                    color = #26A17B
                                    />
                                </swiper-slide>
                                <swiper-slide class="flex justify-center items-center w-auto">
                                    <Cardbg
                                    chartData = {chartData3}
                                    profit = '92.2'
                                    token = 'USDC'
                                    icon = {usdc}
                                    color = #3E73C4 
                                />
                                </swiper-slide>
                                <swiper-slide class="flex justify-center items-center w-auto">
                                    <Cardbg
                                    chartData = {chartData4}
                                    profit = '55.23'
                                    token = 'DAI'
                                    icon = {dai}
                                    color = #F4B731 
                                    />
                                </swiper-slide>
                                <swiper-slide class="flex justify-center items-center w-auto">
                                    <Cardbg
                                    chartData = {chartData5}
                                    profit = '31.23'
                                    token = 'WBTC'
                                    icon = {wbtc}
                                    color = #312E39 
                                    />
                                </swiper-slide>
                                <swiper-slide class="flex justify-center items-center w-auto">    
                              </swiper-container>
                      </div>     
            </div>    
    </Container>
        <Gap/>
        <Container>
        <div class="flex flex-col md:flex-row justify-between items-start w-full mb-2">       
            <div class="flex justify-center items-center">   
                <Title
                title = 'Ongoing Positions'
                subtitle = 'Latest earning assets with 24h insights'/>
    </div>
    <div class="flex justify-between md:justify-between items-center w-full md:w-auto flex-row gap-3">
        <Button
        variant = 'secondary'
        name = '24 Hours'
        />
        <Button
        name = 'Stake'
        />
    </div>   
</div>

            <div class="flex flex-col md:flex-row justify-center items-center w-full gap-2">
            <Position
            icon ='icon'
        token = 'Shib Token'
        balance = '240,106,890'
        price = '2,621'
        ratio = '2:1'
        rewards = '210.23'
        lock = 'Locked'/>
           <Position
           icon="eth"
	token="Ethereum"
	balance="1.24"
	price="3,110"
	ratio="3:2"
	rewards="12.6"
	lock="Locked" />
            </div>
            <div class="flex flex-col md:flex-row justify-center items-center w-full gap-2">
                <Position
                icon="usdt"
	token="Tether"
	balance="5,000"
	price="1.00"
	ratio="1:1"
	rewards="0.00"
	lock="Unlocked"/>
               <Position
               icon="ada"
	token="Cardano"
	balance="12,345"
	price="0.49"
	ratio="2:3"
	rewards="3.18"
	lock="Locked" />
                </div>
                <div class="flex flex-col md:flex-row justify-center items-center w-full gap-2">
                    <Position
                    icon="doge"
	token="Dogecoin"
	balance="420,000"
	price="0.082"
	ratio="5:1"
	rewards="25.9"
	lock="Unlocked"/>
                   <Position
                   icon="avax"
	token="Avalanche"
	balance="320.18"
	price="36.10"
	ratio="4:1"
	rewards="8.75"
	lock="Unlocked"/>
                    </div>
        </Container>
</div>
<style>
    .feature{
        background: radial-gradient(120% 140.13% at 50% 20%, transparent 40.41%, rgb(14, 117, 128) 69.27%);
    }
</style>