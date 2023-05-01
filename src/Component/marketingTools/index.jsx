const MarketingTools = () => {
    return (
        <>
            <section className="bg-[#F9FAFB] px-20 py-28 xl:px-20 xl:py-28 lg:px-20 lg:py-24 md:px-16 md:py-20 sm:px-16 sm:py-16 max-[640px]:px-6 max-[640px]:py-6">
                <h2 className="text-base font-medium text-[#08445E] uppercase mb-5 md:mb-8 richtext">BUILT-IN MARKETING TOOLS</h2>
                <div className="mb-16 md:mb-24 flex justify-between md:flex-row flex-col max-[767px]:mb-4">
                    <p className="tracking-ff-tighter font-bold w-full text-4xl sm:text-5xl md:max-w-2xl md:text-6xl lg:text-7xl mb-10 md:mb-0 shrink-1 richtext">
                        From first touch to full funnel
                    </p>
                    <div className="md:self-end">
                        <a href="#" className="text-lg flex justify-between border-b pb-4 font-medium border-black w-80 md:w-auto md:min-w-[24rem] max-[475px]:w-[100%]">
                            <span>Leverage our full marketing suite</span>
                            <img className="rotate-180" src="/assets/leftarrow.svg" />
                        </a>
                    </div>
                </div>
                <div className="flex justify-between max-[768px]:flex-wrap">
                    <div class="lg:max-w-3xl w-full lex md:flex-col md:justify-center">
                        <div class="relative md:mb-6 lg:mb-16 md:flex text-left rounded focus-within:outline focus-within:outline-2 focus-within:outline-state-focus opacity-60 hover:opacity-100">
                            <button type="button" class="w-16 h-8 mr-6">
                                <img src="/assets/toolsIcon1.png" />
                            </button>
                            <div class="max-w-xl md:max-w-none group cursor-pointer border-b-2 border-grey hover:border-black">
                                <h3 class="mb-7 md:mb-5 lg:mb-7 font-bold text-xl lg:text-[26px] richtext">Reach new leads</h3>
                                <p class="mb-6 lg:mb-11 text-base md:text-lg richtext">Find new shoppers with the SEO, social media, and content marketing tools that help you reach customers where they are.</p>
                                <div class="bg-shade-30 relative bottom-0 h-[1px] w-full hidden md:block">
                                    <div class="scale-x-0 bg-black w-full h-full origin-left" style={{ transitionDuration: '0ms' }}></div>
                                </div>
                            </div>
                        </div>
                        <div class="relative md:mb-6 lg:mb-16 md:flex text-left rounded focus-within:outline focus-within:outline-2 focus-within:outline-state-focus opacity-60 hover:opacity-100">
                            <button type="button" class="w-16 h-8 mr-6">
                                <img src="/assets/toolsIcon2.png" />
                            </button>
                            <div class="grow-1 max-w-xl md:max-w-none group cursor-pointer border-b-2 border-grey hover:border-black">
                                <h3 class="mb-7 md:mb-5 lg:mb-7 font-bold text-xl lg:text-[26px] richtext">Engage with customers</h3>
                                <p class="mb-6 lg:mb-11 text-base md:text-lg richtext">Build custom email campaigns, set automations to serve every segment, and connect with customers on the go with integrated messaging tools.</p>
                                <div class="bg-shade-30 relative bottom-0 h-[1px] w-full hidden md:block">
                                    <div class="scale-x-0 bg-black w-full h-full origin-left" style={{ transitionDuration: '0ms' }}></div>
                                </div>
                            </div>
                        </div>
                        <div class="relative md:mb-6 lg:mb-16 md:flex text-left rounded focus-within:outline focus-within:outline-2 focus-within:outline-state-focus opacity-60 hover:opacity-100">
                            <button type="button" class="w-16 h-8 mr-6">
                                <img src="/assets/toolsIcon3.png" />
                            </button>
                            <div class="grow-1 max-w-xl md:max-w-none group cursor-pointer border-b-2 border-grey hover:border-black">
                                <h3 class="mb-7 md:mb-5 lg:mb-7 font-bold text-xl lg:text-[26px] richtext">Data you can build on</h3>
                                <p class="mb-6 lg:mb-11 text-base md:text-lg richtext">Take control of your customer data to build custom audiences and explore the customer insights that drive ongoing growth.</p>
                                <div class="bg-shade-30 relative bottom-0 h-[1px] w-full hidden md:block">
                                    <div class="scale-x-0 bg-black w-full h-full origin-left" style={{ transitionDuration: '0ms' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src="/assets/tools.png" />
                    </div>
                </div>
            </section>
        </>
    )
}
export default MarketingTools;