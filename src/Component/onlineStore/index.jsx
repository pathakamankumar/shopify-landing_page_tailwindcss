import OuterSlider from "./outerSlider";

const OnlineStore = () => {
    return (
        <>
            <section className="onlineStore bg-[#F9FAFB] px-20 py-28 xl:px-20 xl:py-28 lg:px-20 lg:py-24 md:px-16 md:py-20 sm:px-16 sm:py-16 max-[640px]:px-6 max-[640px]:py-6">
                <h2 className="text-base font-medium text-[#08445E] uppercase mb-5 md:mb-8 richtext">BUILD AN ONLINE STORE</h2>
                <p class="font-bold w-full text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-10 md:mb-0 shrink-1 richtext">Your store, your way</p>
                <div className="py-10">
                    <OuterSlider />
                </div>
                <div class="grid grid-cols-3 gap-4 md:grid-cols-3 sm:grid-cols-2 max-[640px]:grid-cols-1 opacity-[0.6] relative text-black h-auto">
                    <div class="text-left relative">
                        <div class="mb-4 relative rounded focus-within:outline focus-within:outline-2 focus-within:outline-state-focus">
                            <button type="button" class="h-0 w-0 after:content-[''] after:absolute after:inset-0"></button>
                            <h3 class="mb-3 text-xl font-semibold">Build an online storefront</h3>
                            <p class="text-lg">
                                Bring your vision to life with our drag-and-drop store creator. No coding expertise required — just your next big idea.
                            </p>
                        </div>
                        <a class="group flex justify-start items-center cursor-pointer">
                            <span class="underline font-semibold mr-2">Online Store Builder</span>
                            <img src="/assets/leftarrow.svg" className="ml-1 w-4 opacity-0 group-hover:opacity-100 rotate-180 transition-all duration-500 group-hover:translate-x-2 will-change-transform" />
                        </a>
                    </div>
                    <div class="text-left relative">
                        <div class="mb-4 relative rounded focus-within:outline focus-within:outline-2 focus-within:outline-state-focus">
                            <button type="button" class="h-0 w-0 after:content-[''] after:absolute after:inset-0"></button>
                            <h3 class="mb-3 text-xl font-semibold">Craft the brand you want</h3>
                            <p class="text-lg">
                                Select from customizable templates created by a community of world-class designers.
                            </p>
                        </div>
                        <a class="group flex justify-start items-center cursor-pointer">
                            <span class="underline font-semibold mr-2">Theme Store</span>
                            <img src="/assets/leftarrow.svg" className="ml-1 w-4 opacity-0 group-hover:opacity-100 rotate-180 transition-all duration-500 group-hover:translate-x-2 will-change-transform" />
                        </a>
                    </div>
                    <div class="text-left relative">
                        <div class="mb-4 relative rounded focus-within:outline focus-within:outline-2 focus-within:outline-state-focus">
                            <button type="button" class="h-0 w-0 after:content-[''] after:absolute after:inset-0"></button>
                            <h3 class="mb-3 text-xl font-semibold">Level up with apps</h3>
                            <p class="text-lg">
                                Add more features and functionality to your online store with apps built by trusted Shopify developers.
                            </p>
                        </div>
                        <a class="group flex justify-start items-center cursor-pointer">
                            <span class="underline font-semibold mr-2">Shopify App Store</span>
                            <img src="/assets/leftarrow.svg" className="ml-1 w-4 opacity-0 group-hover:opacity-100 rotate-180 transition-all duration-500 group-hover:translate-x-2 will-change-transform" />
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OnlineStore;