<script>
    let{
        variant = 'primary',
        name = 'Connect Wallet'

    } =$props();
</script>



<button class = {
    variant === 'primary' ? 'button flex justify-center items-center px-(--spacing-button-x) py-(--spacing-button-y) bg-(--main-primary) text-(--main-light) rounded-lg font-medium border-1 border-(--main-stroke)' :
    variant === 'secondary' ? 'button flex justify-center items-center px-(--spacing-button-x) py-(--spacing-button-y)  bg-transaparent text-(--main-light) rounded-lg border-1 border-(--main-stroke) font-medium' :
    ''
    }>
    {name}
    </button>

