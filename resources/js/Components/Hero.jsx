import { Button } from "./ui/button";

export function Hero() {
    return (
        <section className="relative pt-24 pb-48 md:pt-32 md:pb-64 overflow-hidden bg-emerald-800/10">
            <div className="container flex flex-col items-center gap-6 text-center relative z-0">
                <div className="space-y-4">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                        Build amazing digital experiences
                    </h1>
                    <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                        Our platform helps you create beautiful websites that
                        look great on any device. Get started today and bring
                        your ideas to life.
                    </p>
                </div>
                <div className="flex gap-4">
                    <Button size="lg">Get Started</Button>
                    <Button variant="outline" size="lg">
                        Learn More
                    </Button>
                </div>
            </div>

            {/* Gradient background for better card visibility */}
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background to-transparent z-0" />
        </section>
    );
}
