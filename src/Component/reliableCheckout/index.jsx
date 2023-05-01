const ReliableCheckout = () => {
    return (
        <>
            <section className="bg-white px-20 xl:px-20 lg:px-20 md:px-16 sm:px-16 max-[640px]:px-6">
                <div className="flex item-center justify-between max-[768px]:flex-wrap">
                    <div class="mt-10 w-auto h-[560px] max-[768px]:h-auto flex items-center justify-center pr-10">
                        <img sizes="100vw" src="https://embed-ssl.wistia.com/deliveries/b8e08b58d88e56769a3112ccf1719771.jpg?image_play_button_size=2x&amp;image_crop_resized=960x960&amp;image_play_button=1&amp;image_play_button_color=54bbffe0" alt="Shopify Point of Sale" class="w-full h-full object-contain" />
                    </div>
                    <div className="w-full md:w-[460px] mt-10">
                        <h2 className="text-base font-medium text-[#08445E] uppercase mb-5 md:mb-8 richtext">POINT OF SALE</h2>
                        <p class="tracking-ff-tighter mb-6 font-bold text-[28px] leading-[30px] md:text-[40px] md:leading-[44px] richtext">Flexible point of sale to power your retail store</p>
                        <p>A POS system that allows customers to shop their way, from online to checkout line. <br /><br /></p>
                        <a href="#" className="mt-5 text-lg flex justify-between border-b pb-4 font-medium border-black w-80 md:w-auto md:min-w-[100%] max-[475px]:w-[100%]">
                            <span>Meet Shopify POS</span>
                            <img className="rotate-180" src="/assets/leftarrow.svg" />
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}
export default ReliableCheckout;