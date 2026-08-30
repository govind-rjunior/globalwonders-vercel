import Image from 'next/image';

function HeroVisual() {
    return (
        <div className="relative z-10 mt-16 max-w-5xl w-full">
            <Image
                src="/hero-flow.jpg"
                alt="How Global Wonders connects startups and investors: capital flows from institutional and individual investors to ambitious startups through identification, rigorous evaluation and due diligence, strategic matching, and value creation — returns and impact flow back"
                width={2000}
                height={668}
                priority
                sizes="(max-width: 768px) 100vw, 1024px"
                className="w-full h-auto rounded-2xl"
            />
        </div>
    )
}

export default HeroVisual
