export default function PrivacyPolicyPage() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-20 text-gray-300 leading-relaxed">
            <section data-aos="fade-up" className="mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                    Privacy <span className="text-cyan-400">Policy</span>
                </h1>
                <p className="text-gray-400 text-sm">Last updated: {new Date().toLocaleDateString()}</p>
            </section>

            <div data-aos="fade-up" data-aos-delay="100" className="space-y-8 prose prose-invert max-w-none">
                <section>
                    <h2 className="text-2xl font-semibold text-white mb-3">1. Introduction</h2>
                    <p>
                        Welcome to thesgn.blog ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, and share your information when you visit our website.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white mb-3">2. Information We Collect</h2>
                    <p>
                        We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Website, or otherwise when you contact us. This may include your name, email address, and the contents of any messages you send via our contact forms.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white mb-3">3. Use of Cookies</h2>
                    <p>
                        Our website uses "cookies" and similar tracking technologies to access or store information. Cookies are small data files stored on your hard drive or in device memory that help us improve our Services and your experience, see which areas and features of our Services are popular, and count visits. You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white mb-3">4. Third-Party Ads and Google AdSense</h2>
                    <p>
                        Currently, we do not display any advertisements on our website. However, we are in the process of applying for Google AdSense. Once approved, we will use third-party advertising companies, including Google, to serve ads when you visit our website. These companies may use information (not including your name, address, email address, or telephone number) about your visits to this and other websites in order to provide advertisements about goods and services of interest to you.
                    </p>
                    <p className="mt-3">When Google AdSense is active:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-2">
                        <li>Google, as a third-party vendor, will use cookies to serve ads on our site.</li>
                        <li>Google's use of the advertising cookies will enable it and its partners to serve ads to our users based on their visit to our sites and/or other sites on the Internet.</li>
                        <li>Users may opt-out of personalized advertising by visiting <a href="https://myadcenter.google.com/" target="_blank" rel="noreferrer" className="text-cyan-400 font-medium">Google's Ads Settings</a>.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white mb-3">5. Analytics and Data Collection</h2>
                    <p>
                        We use Google Analytics to measure traffic and understand user behavior. Google Analytics collects information such as how often users visit this site, what pages they visit when they do so, and what other sites they used prior to coming to this site. We use the information we get from Google Analytics only to improve this site.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white mb-3">6. Contact Us</h2>
                    <p>
                        If you have questions or comments about this Privacy Policy, please contact us at:
                    </p>
                    <p className="mt-2 font-medium text-cyan-400">
                        <a href="mailto:shrinivasnadager03@gmail.com">shrinivasnadager03@gmail.com</a>
                    </p>
                </section>
            </div>
        </div>
    );
}
