import { CardsSection } from "@/Components/CardsSection";
import { Hero } from "@/Components/Hero";
import { Navbar } from "@/Components/Navbar";
import { PartnerScroll } from "@/Components/PatrnerScroll";
import { Head } from "@inertiajs/react";

export default function Welcome() {
    return (
        <div className="min-h-screen">
            <Head title="Welcome" />
            <Navbar />
            <main className="relative">
                <Hero />
                <CardsSection />
                <PartnerScroll />
            </main>
        </div>
    );
}
