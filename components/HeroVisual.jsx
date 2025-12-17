
function HeroVisual() {
    return (
        <div className="relative z-10 mt-16 max-w-3xl w-full">
            <svg viewBox="0 0 800 200" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
                {/* Startup Side */}
                <g>
                    <circle cx="100" cy="100" r="60" fill="#1B7A72" opacity="0.1" />
                    <circle cx="100" cy="100" r="45" fill="#1B7A72" opacity="0.2" />
                    <circle cx="100" cy="100" r="30" fill="#1B7A72" />
                    <text x="100" y="108" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold">🚀</text>
                    <text x="100" y="170" textAnchor="middle" fill="#1B7A72" fontSize="16" fontWeight="600">Startups</text>
                </g>

                {/* Connection Flow */}
                <g>
                    <path d="M 160 100 Q 400 50, 640 100" stroke="#1B7A72" strokeWidth="3" fill="none" strokeDasharray="10,5" opacity="0.4" />
                    <path d="M 160 100 Q 400 100, 640 100" stroke="#1B7A72" strokeWidth="4" fill="none" />
                    <path d="M 160 100 Q 400 150, 640 100" stroke="#1B7A72" strokeWidth="3" fill="none" strokeDasharray="10,5" opacity="0.4" />

                    {/* Center Badge */}
                    <circle cx="400" cy="100" r="50" fill="white" stroke="#1B7A72" strokeWidth="3" />
                    <text x="400" y="95" textAnchor="middle" fill="#1B7A72" fontSize="14" fontWeight="600">GLOBAL</text>
                    <text x="400" y="112" textAnchor="middle" fill="#1B7A72" fontSize="14" fontWeight="600">WONDERS</text>
                </g>

                {/* Investor Side */}
                <g>
                    <circle cx="700" cy="100" r="60" fill="#1B7A72" opacity="0.1" />
                    <circle cx="700" cy="100" r="45" fill="#1B7A72" opacity="0.2" />
                    <circle cx="700" cy="100" r="30" fill="#1B7A72" />
                    <text x="700" y="108" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold">💰</text>
                    <text x="700" y="170" textAnchor="middle" fill="#1B7A72" fontSize="16" fontWeight="600">Investors</text>
                </g>
            </svg>
        </div>
    )
}

export default HeroVisual