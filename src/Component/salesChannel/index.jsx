const SalesChannel = () => {
    return (
        <>
            <section className="bg-white px-20 py-28 xl:px-20 xl:py-28 lg:px-20 lg:py-24 md:px-16 md:py-20 sm:px-16 sm:py-16 max-[640px]:px-6 max-[640px]:py-6">
                <h2 className="text-base font-medium text-[#08445E] uppercase mb-5 md:mb-8 richtext">Sales channels</h2>
                <div className="mb-16 md:mb-24 flex justify-between max-[790px]:flex-wrap max-[767px]:mb-4">
                    <p className="font-bold w-full text-4xl sm:text-5xl md:max-w-2xl md:text-6xl lg:text-7xl mb-10 md:mb-0 shrink-1 richtext">
                        Sales to every buyer, everywhere
                    </p>
                    <div className="md:self-end">
                        <p>Sell online, in person, and around the world with<br /> the marketing tools, social integrations, and <br />sales channels you need to get your products in<br /> front of customers.</p>
                        <a href="#" className="mt-5 text-lg flex justify-between border-b pb-4 font-medium border-black w-80 md:w-auto md:min-w-[24rem] max-[475px]:w-[100%]">
                            <span>Manage your business</span>
                            <img className="rotate-180" src="/assets/leftarrow.svg" />
                        </a>
                    </div>
                </div>
                <div class="flex justify-between max-w-screen overflow-auto">
                    <img class="mr-4 w-[80vw] md:w-1/3-gutter snap-center" sizes="100vw" srcset="/assets/sales1.png" alt="img1" />
                    <img class="mr-4 w-[80vw] md:w-1/3-gutter snap-center" sizes="100vw" srcset="/assets/sales2.png" alt="img2" />
                    <img class="mr-4 w-[80vw] md:w-1/3-gutter snap-center" sizes="100vw" srcset="/assets/sales3.png" alt="img3" />
                </div>
            </section>
        </>
    )
}
export default SalesChannel;