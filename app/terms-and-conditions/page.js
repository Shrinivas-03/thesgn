export default function TermsAndConditionsPage() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-20 text-gray-300 leading-relaxed">
            <section data-aos="fade-up" className="mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                    Terms & <span className="text-cyan-400">Conditions</span>
                </h1>
                <p className="text-gray-400 text-sm">Last updated: {new Date().toLocaleDateString()}</p>
            </section>

            <div data-aos="fade-up" data-aos-delay="100" className="space-y-8 prose prose-invert max-w-none">
                <section>
                    <h2 className="text-2xl font-semibold text-white mb-3">1. Acceptance of Terms</h2>
                    <p>
                        By accessing and using thesgn.blog ("the Website"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white mb-3">2. Intellectual Property Rights</h2>
                    <p>
                        Unless otherwise stated, we or our licensors own the intellectual property rights for all material on the Website. All intellectual property rights are reserved. You may access this from the Website for your own personal use subjected to restrictions set in these terms and conditions.
                    </p>
                    <p className="mt-2">You must not:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-2">
                        <li>Republish material from the Website</li>
                        <li>Sell, rent, or sub-license material from the Website</li>
                        <li>Reproduce, duplicate or copy material from the Website</li>
                        <li>Redistribute content from the Website</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white mb-3">3. User Content</h2>
                    <p>
                        In these terms and conditions, "your user content" means material (including without limitation text, images, audio material, video material and audio-visual material) that you submit to this website, for whatever purpose. You grant to us a worldwide, irrevocable, non-exclusive, royalty-free license to use, reproduce, adapt, publish, translate and distribute your user content in any existing or future media.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white mb-3">4. External Links Disclaimer</h2>
                    <p>
                        The Website may contain links to external websites that are not provided or maintained by or in any way affiliated with us. Please note that we do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white mb-3">5. Disclaimer of Warranties</h2>
                    <p>
                        This website is provided "as is" without any representations or warranties, express or implied. thesgn.blog makes no representations or warranties in relation to this website or the information and materials provided on this website. Nothing on this website constitutes, or is meant to constitute, advice of any kind.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white mb-3">6. Changes to Terms</h2>
                    <p>
                        We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our Website after those revisions become effective, you agree to be bound by the revised terms.
                    </p>
                </section>
            </div>
        </div>
    );
}
