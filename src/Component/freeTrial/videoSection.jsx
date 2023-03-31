const VideoSection = () => {
    return (
        <>
            <section className="mt-10 max-[640px]:mt-2">
                <div className="bg-video w-full">
                    <iframe height="700px" className="w-full max-[640px]:h-80 max-[475px]:h-52" src="https://www.youtube.com/embed/bOsLf8Z5v50" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </section>
        </>
    )
}
export default VideoSection;