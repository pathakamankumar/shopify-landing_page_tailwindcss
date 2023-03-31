const Support = () => {
    return (
        <>
            <section className="bg-black py-32 px-52 xl:px-52 xl:py-32 lg:py-28 lg:px-44 md:px-20 md:py-16 sm:px-10 sm:py-10 max-[640px]:py-6 max-[640px]:px-6">
                <h2 className="text-base text-center font-medium default:text-[#08445E] uppercase text-[#63DDB9] mb-5 md:mb-8 richtext">SHOPIFY SUPPORT</h2>
                <p className="text-white text-center tracking-ff-tighter font-bold text-4xl lg:text-7xl md:text-6xl sm:text-5xl richtext max-[475px]:text-3xl">The help you need,<br />
                    when you need it
                </p>
                <div className="grid grid-cols-2 gap-6 text-white mt-24 lg:mt-24 md:mt-20 sm:mt-16 max-[640px]:grid-cols-1 max-[640px]:mt-6">
                    <a className="cursor-pointer">
                        <div className="rounded-2xl border border-[#1b1c1c] h-full bg-gray-900 p-10 max-[475px]:p-4">
                            <img class="w-20" src="/assets/rating star.svg" alt="Icon" />
                            <div class="py-4">
                                <h3 class=" support-card-title font-bold mb-4 text-3xl md:text-4xl mt-5">Blog</h3>
                                <p class="text-white text-base pr-24 xl:pr-24 lg:pr-0 md:pr-0 sm:pr-0 max-[640px]:pr-0">
                                    Get all the marketing and business strategy tips you need to help you run an online business.
                                </p>
                            </div>
                            <div class="pt-6 pb-2 w-24">
                                <span class="flex justify-center w-28 bg-gray-800 rounded-full px-2 py-2 text-sm font-semibold text-white mr-2 mb-2">Read<img className='ml-2 text-white w-6' src='/assets/liftarrowwhite .svg' /></span>
                            </div>
                        </div>
                    </a>
                    <a className="cursor-pointer">
                        <div className="rounded-2xl border border-[#1b1c1c] h-full bg-gray-900 p-10 max-[475px]:p-4">
                            <img class="w-20" src="/assets/rating star.svg" alt="Icon" />
                            <div class="py-4">
                                <h3 class=" support-card-title font-bold mb-4 text-3xl md:text-4xl mt-5">Online Courses</h3>
                                <p class="text-white text-base pr-24 xl:pr-24 lg:pr-0 md:pr-0 sm:pr-0 max-[640px]:pr-0">
                                Learn tried-and-tested business tips with instant access to lessons from successful entrepreneurs.
                                </p>
                            </div>
                            <div class="pt-6 pb-2 w-24">
                                <span class="flex justify-center w-28 bg-gray-800 rounded-full px-2 py-2 text-sm font-semibold text-white mr-2 mb-2">Learn<img className='ml-2 text-white w-6' src='/assets/liftarrowwhite .svg' /></span>
                            </div>
                        </div>
                    </a>
                    <a className="cursor-pointer">
                        <div className="rounded-2xl border border-[#1b1c1c] h-full bg-gray-900 p-10 max-[475px]:p-4">
                            <img class="w-20" src="/assets/rating star.svg" alt="Icon" />
                            <div class="py-4">
                                <h3 class=" support-card-title font-bold mb-4 text-3xl md:text-4xl mt-5">Community</h3>
                                <p class="text-white text-base pr-24 xl:pr-24 lg:pr-0 md:pr-0 sm:pr-0 max-[640px]:pr-0">
                                Connect with a community of brands, partners, and fellow merchants who understand Shopify.                                </p>
                            </div>
                            <div class="pt-6 pb-2 w-24">
                                <span class="flex justify-center w-28 bg-gray-800 rounded-full px-2 py-2 text-sm font-semibold text-white mr-2 mb-2">Discuss<img className='ml-2 text-white w-6' src='/assets/liftarrowwhite .svg' /></span>
                            </div>
                        </div>
                    </a>
                    <a className="cursor-pointer">
                        <div className="rounded-2xl border border-[#1b1c1c] h-full bg-gray-900 p-10 max-[475px]:p-4">
                            <img class="w-20" src="/assets/rating star.svg" alt="Icon" />
                            <div class="py-4">
                                <h3 class=" support-card-title font-bold mb-4 text-3xl md:text-4xl mt-5">Help Center</h3>
                                <p class="text-white text-base pr-24 xl:pr-24 lg:pr-0 md:pr-0 sm:pr-0 max-[640px]:pr-0">
                                Find answers with a dedicated helpdesk resource full of articles and videos from our Support team.                                </p>
                            </div>
                            <div class="pt-6 pb-2 w-24">
                                <span class="flex justify-center w-28 bg-gray-800 rounded-full px-2 py-2 text-sm font-semibold text-white mr-2 mb-2">Get help<img className='ml-2 text-white w-6' src='/assets/liftarrowwhite .svg' /></span>
                            </div>
                        </div>
                    </a>
                </div>
            </section>
        </>
    );
};
export default Support;
