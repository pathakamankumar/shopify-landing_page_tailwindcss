const BusinessOperation = () => {
    return (
        <>
            <section className="bg-white px-20 py-28 xl:px-20 xl:py-28 lg:px-20 lg:py-24 md:px-16 md:py-20 sm:px-16 sm:py-16 max-[640px]:px-6 max-[640px]:py-6">
                <h2 className="text-base font-medium text-[#08445E] uppercase mb-5 md:mb-8 richtext">CENTRALIZED BUSINESS OPERATIONS</h2>
                <div className="mb-16 md:mb-24 flex justify-between md:flex-row flex-col max-[767px]:mb-4">
                    <p className="tracking-ff-tighter font-bold w-full text-4xl sm:text-5xl md:max-w-2xl md:text-6xl lg:text-7xl mb-10 md:mb-0 shrink-1 richtext">
                        Streamline your back office
                    </p>
                    <div className="md:self-end">
                        <a href="#" className="text-lg flex justify-between border-b pb-4 font-medium border-black w-80 md:w-auto md:min-w-[24rem] max-[475px]:w-[100%]">
                            <span>Manage your business</span>
                            <img className="rotate-180" src="/assets/leftarrow.svg" />
                        </a>
                    </div>
                </div>
                <div>
                </div>
            </section>
        </>
    )
}
export default BusinessOperation;