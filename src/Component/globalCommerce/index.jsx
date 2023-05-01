const GlobalCommerce = () => {
    return (
        <>
            <section className="bg-gradient-to-r from-emerald-100 to-emerald-300 bg-white px-20 py-28 xl:px-20 xl:py-28 lg:px-20 lg:py-24 md:px-16 md:py-20 sm:px-16 sm:py-16 max-[640px]:px-6 max-[640px]:py-6">
                <div className="grid grid-cols-2">
                    <div>
                        <a class="w-fit cursor-pointer flex mb-9 rounded-full border border-[#CAD4D7] px-7 py-[0.65rem] hover:border-[#A8B1B4]">
                            <img src='/assets/Polygondown.svg' className="rotate-90 w-5 mr-2" />
                            Watch a 2 min Shopify overview
                        </a>
                        <h1 class="font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl w-11">The global commerce platform</h1>
                        <p class="text-lg lg:text-[1.375rem] font-normal md:leading-[2.125rem] mt-10">Build your business with Shopify to sell online, offline, and everywhere in between.</p>
                        <div class="flex mt-8">
                            <div class="flex h-16 w-full items-center bg-white justify-between rounded-full border-2 border-zinc-300 pl-6 pr-1 sm:w-[498px]">
                                <input type="email" class="h-14 w-full sm:w-72 outline-none" placeholder="Enter your email address" />
                                <button class="font-bold bg-black border-solid border-2 rounded-[30px] leading-none px-[1.75rem] py-[1.1875rem] border-[transparent] text-white hover:bg-slate-700" type="submit">Start free trial
                                </button>
                            </div>
                        </div>
                        <p class="text-[13px] text-slate-600 mt-5">Try Shopify free for 3 days, no credit card required. By entering your email, you agree to receive marketing emails from Shopify.</p>
                    </div>
                    <div>
                        <div class="overflow-x-hidden">
                            <div class="py-12 animate-marquee whitespace-nowrap ">
                                <p class="mx-4 text-4xl">Marquee Item 1</p>
                                <p class="mx-4 text-4xl">Marquee Item 2</p>
                                <p class="mx-4 text-4xl">Marquee Item 3</p>
                                <p class="mx-4 text-4xl">Marquee Item 4</p>
                                <p class="mx-4 text-4xl">Marquee Item 5</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default GlobalCommerce