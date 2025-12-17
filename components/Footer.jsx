import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300 pt-12 pb-6">
            <div className="mx-auto max-w-7xl px-4">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-8 border-b border-slate-700">
                    {/* Company Info with Logo */}
                    <div>
                        <div className="flex items-center mb-4">
                            <Image
                                src="/new-logo.png"
                                alt="Global Wonders Logo"
                                width={50}
                                height={50}
                                className="mr-3"
                            />
                            <div>
                                <h3 className="text-xl font-bold text-white">GLOBAL WONDERS</h3>
                                <p className="text-xs text-slate-400">Investment Advisory Services</p>
                            </div>
                        </div>
                        <p className="text-sm text-slate-400 leading-relaxed">
                            Connecting Smart Funds with Game-Changing Startups. Responsible realization of capital through expert advisory and partnership.
                        </p>
                    </div>

                    {/* Legal Entity Information */}
                    <div>
                        <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">Company Information</h4>
                        <div className="space-y-2 text-sm">
                            <p className="font-medium text-white">RAMAN GLOBALWONDERS CONSULTING PRIVATE LIMITED</p>
                            <p className="text-slate-400">
                                <span className="text-slate-500">CIN:</span> U70200MH2023PTC406612
                            </p>
                            <p className="text-slate-400 leading-relaxed">
                                <span className="text-slate-500">Registered Office:</span><br />
                                NO. 11 2ND FLOOR, DIVYA COMMERCIAL COMPLEX,<br />
                                NO. 37, Mumbai, Mumbai<br />
                                Mumbai-400071, Maharashtra, India
                            </p>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">Contact Us</h4>
                        <div className="space-y-3 text-sm">
                            <div>
                                <p className="text-slate-500 text-xs mb-1">General Inquiries</p>
                                <a href="mailto:info@globalwonders.co" className="text-[#1B7A72] hover:text-[#15645d] transition-colors">
                                    info@globalwonders.co
                                </a>
                                {/* <p className="text-slate-400 mt-1">
                                    <a href="tel:+912222663344" className="hover:text-white transition-colors">022-2266 3344</a>
                                </p> */}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    {/* Copyright */}
                    <p className="text-sm text-slate-500">
                        © 2025 Global Wonders. All rights reserved.
                    </p>

                    {/* Legal Links */}
                    <div className="flex flex-wrap justify-center gap-1 text-sm">
                        <Link
                            href="/privacy-policy"
                            className="px-3 py-1 text-slate-400 hover:text-[#1B7A72] transition-colors"
                        >
                            Privacy Policy
                        </Link>
                        <span className="text-slate-600">|</span>
                        <Link
                            href="/terms"
                            className="px-3 py-1 text-slate-400 hover:text-[#1B7A72] transition-colors"
                        >
                            Terms of Use
                        </Link>
                        <span className="text-slate-600">|</span>
                        <Link
                            href="/terms#disclaimer"
                            className="px-3 py-1 text-slate-400 hover:text-[#1B7A72] transition-colors"
                        >
                            Disclaimer
                        </Link>
                    </div>
                </div>

                {/* Additional Disclaimer */}
                <div className="mt-6 pt-6 border-t border-slate-800">
                    <p className="text-xs text-slate-500 text-center leading-relaxed">
                        Global Wonders provides advisory services for fundraising and investment opportunities.
                        We are not a registered stock exchange, broker-dealer, or investment advisor.
                        All investment decisions should be made after consulting with qualified financial advisors.
                    </p>
                </div>
            </div>
        </footer>
    );
}