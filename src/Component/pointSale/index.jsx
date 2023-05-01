const PointSale = () => {
    return (
        <>
            <section className="bg-white px-20 pb-28 xl:px-20 xl:pb-28 lg:px-20 lg:pb-24 md:px-16 md:pb-20 sm:px-16 sm:pb-16 max-[640px]:px-6 max-[640px]:pb-6">
                <div className="flex item-center justify-between max-[768px]:flex-wrap">
                    <div className="w-full md:w-[460px] mt-10">
                        <h2 className="text-base font-medium text-[#08445E] uppercase mb-5 md:mb-8 richtext">POINT OF SALE</h2>
                        <p class="tracking-ff-tighter mb-6 font-bold text-[28px] leading-[30px] md:text-[40px] md:leading-[44px] richtext">Flexible point of sale to power your retail store</p>
                        <p>A POS system that allows customers to shop their way, from online to checkout line. <br /><br /></p>
                        <a href="#" className="mt-5 text-lg flex justify-between border-b pb-4 font-medium border-black w-80 md:w-auto md:min-w-[100%] max-[475px]:w-[100%]">
                            <span>Meet Shopify POS</span>
                            <img className="rotate-180" src="/assets/leftarrow.svg" />
                        </a>
                    </div>
                    <div class="mt-10 w-auto flex items-center justify-center pl-10">
                        <img sizes="100vw" srcset="https://cdn.shopify.com/shopifycloud/brochure/assets/home/redesign2022/pos-2-small-2bceb2e9fd90de0e825252632b00f723978536c6c4535e44468dfc31a7cef8f0.webp 1x, https://cdn.shopify.com/shopifycloud/brochure/assets/home/redesign2022/pos-2-large-50a3a20f09c7d1fef32dd3c6fdcfc75db43bc06e980cd317d08acbba64ae9a7b.webp 2x" alt="Shopify Point of Sale" class="w-full h-full object-contain" />
                    </div>
                </div>
            </section>
        </>
    )
}
export default PointSale;