export default function DisclaimerPage() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-20 text-gray-300 leading-relaxed">
            <section data-aos="fade-up" className="mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                    <span className="text-cyan-400">Disclaimer</span>
                </h1>
                <p className="text-gray-400 text-sm">Last updated: {new Date().toLocaleDateString()}</p>
            </section>

            <div data-aos="fade-up" data-aos-delay="100" className="space-y-8 prose prose-invert max-w-none">

                <section className="bg-slate-800/40 p-6 rounded-xl border border-slate-700">
                    <h2 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2">
                        <span role="img" aria-label="warning">⚠️</span> General Information Only
                    </h2>
                    <p>
                        The information contained on thesgn.blog website (the "Service") is for general information purposes only. The views and opinions expressed on this website are purely those of the authors. If we claim or appear to be experts on a certain topic or product or service area, we will only endorse products or services that we believe, based on our expertise, are worthy of such endorsement.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white mb-3">No Reliability Warranty</h2>
                    <p>
                        thesgn.blog assumes no responsibility for errors or omissions in the contents on the Service. In no event shall we be liable for any special, direct, indirect, consequential, or incidental damages or any damages whatsoever, whether in an action of contract, negligence or other tort, arising out of or in connection with the use of the Service or the contents of the Service.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white mb-3">No Financial or Health Advice</h2>
                    <p>
                        The content on this website does not constitute financial, legal, health, or other professional advice. Any reliance you place on such information is therefore strictly at your own risk. Before making any decisions based on the content of this site, you should consult a qualified professional in the relevant field.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white mb-3">AI & Predictions Disclaimer</h2>
                    <p>
                        Our website may occasionally discuss AI tools, machine learning concepts, or predictive models. Please be aware that AI is rapidly evolving, and any predictions or algorithmic outputs discussed are purely for educational or informational purposes. They do not constitute guaranteed outcomes. We are not liable for any actions taken based on AI tool reviews or tutorials provided on this site.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white mb-3">Affiliate Links and Ads</h2>
                    <p>
                        This website may contain affiliate links, which means we may receive a small commission, at no cost to you, if you make a purchase through a link. Furthermore, third-party advertisements (such as Google AdSense) may appear on the site. The presence of ads does not imply endorsement of the advertised products or services.
                    </p>
                </section>

            </div>
        </div>
    );
}
