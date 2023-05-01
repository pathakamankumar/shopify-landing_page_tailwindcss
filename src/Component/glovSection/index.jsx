const GloveSection = () => {
    return (
        <>
            <section className="bg-white pr-20 py-28 xl:pr-20 xl:py-28 lg:pr-20 lg:py-24 md:pr-16 md:py-20 sm:pr-16 sm:py-16 max-[640px]:pr-6 max-[640px]:py-6">
                <div className="grid grid-cols-2 max-[991px]:grid-cols-1 ">
                    <div>
                        <img src="/assets/glove.png" />
                    </div>
                    <div className="max-[991px]:pl-16 max-[991px]:mt-10 max-[640px]:pl-6">
                        <h2 className="mb-12 md:text-[46px] md:leading-[52px] font-bold text-4xl max-[640px]:text-3xl max-[425px]:text-[23px]">Discover why millions of entrepreneurs chose Shopify to build their business
                            <br /> -<span className="bg-emerald-100">from hello world to IPO.</span>
                        </h2>
                        <div className="grid grid-cols-2 max-[475px]:grid-cols-1">
                            <div class=" before:gradient relative mb-20 pl-5 sm:pl-7 pr-4 before:absolute before:left-0 before:h-full before:w-1 before:rounded-sm before:bg-gradient-to-b before:from-[#01BAE2] before:to-[#01E2A2]">
                                <p class="mb-2 text-3xl sm:text-4xl font-medium max-[475px]:text-2xl">Millions</p>
                                <div class="text-base sm:text-lg opacity-70">of merchants worldwide</div>
                            </div>
                            <div class=" before:gradient relative mb-20 pl-5 sm:pl-7 pr-4 before:absolute before:left-0 before:h-full before:w-1 before:rounded-sm before:bg-gradient-to-b before:from-[#01BAE2] before:to-[#01E2A2]">
                                <p class="mb-2 text-3xl sm:text-4xl font-medium max-[475px]:text-2xl">170+</p>
                                <div class="text-base sm:text-lg opacity-70">countries represented</div>
                            </div>
                            <div class=" before:gradient relative mb-20 pl-5 sm:pl-7 pr-4 before:absolute before:left-0 before:h-full before:w-1 before:rounded-sm before:bg-gradient-to-b before:from-[#01BAE2] before:to-[#01E2A2]">
                                <p class="mb-2 text-3xl sm:text-4xl font-medium max-[475px]:text-2xl">10%</p>
                                <div class="text-base sm:text-lg opacity-70">of total US ecommerce</div>
                            </div>
                            <div class=" before:gradient relative mb-20 pl-5 sm:pl-7 pr-4 before:absolute before:left-0 before:h-full before:w-1 before:rounded-sm before:bg-gradient-to-b before:from-[#01BAE2] before:to-[#01E2A2]">
                                <p class="mb-2 text-3xl sm:text-4xl font-medium max-[475px]:text-2xl">$444b+ <sup className="text-[15px] relative top-[-20px]">USD</sup></p>
                                <div class="text-base sm:text-lg opacity-70">global economic activity</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default GloveSection