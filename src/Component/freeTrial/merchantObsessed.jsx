import VideoSection from "./videoSection"

const MerchantObsessed = () => {
    return (
        <>
            <section className="meetPeopleBg px-20 py-28 xl:px-20 xl:py-28 lg:px-20 lg:py-24 md:px-16 md:py-20 sm:px-16 sm:py-16 max-[640px]:px-6 max-[640px]:py-6">
                <div className="copy-text relative hidden sm:block md:grid grid-cols-12">
                    <div className="flex flex-col justify-start col-span-3 col-start-1">
                        <div className="flex items-center justify-end">
                            <iframe width="120" height="170" className="rounded-2xl" src="https://www.youtube.com/embed/bOsLf8Z5v50" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                        <div className="flex items-center justify-start mt-5">
                        <iframe width="220" height="300" className="rounded-2xl" src="https://www.youtube.com/embed/LEtP7HgGTu0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                        <div className="flex items-center justify-end">
                        <iframe width="170" height="240" className="rounded-2xl" src="https://www.youtube.com/embed/DjEStjqtiqY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div className="relative z-20 col-start-4 col-span-6 pt-20">
                        <h2 className="text-homepage-eyebrow relative z-20 mb-4 text-center text-base font-semibold uppercase md:mb-8">MERCHANT OBSESSED</h2>
                        <p className="relative mx-auto text-center font-bold leading-[50px] tracking-tighter [&>span]:block [&>span]:whitespace-nowrap [&_.mo-shopify]:px-1 [&_.mo-shopify]:leading-[1.1] [&_.mo-shopify]:inline-block [&_.mo-shopify]:text-transparent [&_.mo-shopify]:bg-clip-text [&_.mo-shopify]:bg-homepage-merchant-obsessed-headline md:text-7xl sm:text-5xl min-[1020px]:text-8xl min-[1450px]:text-9xl richtext">
                            <span>Meet</span>
                            <span>the people</span>
                            <span>who chose</span>
                            <span>
                                <span className="mo-shopify">Shopify</span>
                            </span>
                        </p>
                    </div>
                    <div className="flex flex-col justify-start col-span-3 col-start-10 ">
                        <div className="flex items-center justify-start">
                        <iframe width="120" height="170" className="rounded-2xl" src="https://www.youtube.com/embed/w1V3gZv0ebY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                        <div className="flex items-center justify-end mt-5">
                        <iframe width="220" height="300" className="rounded-2xl" src="https://www.youtube.com/embed/tbnzAVRZ9Xc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                        <div className="flex items-center justify-start">
                        <iframe width="170" height="240" className="rounded-2xl" src="https://www.youtube.com/embed/lYGGpc2mMno" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>

                    </div>
                </div>
                <VideoSection />
            </section>
        </>
    )
}
export default MerchantObsessed