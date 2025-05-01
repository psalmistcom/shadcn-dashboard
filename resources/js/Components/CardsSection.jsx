import { motion } from "framer-motion";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from "./ui/card";
import { GraduationCap, LaptopMinimalCheck, UserRoundPen } from "lucide-react";

export function CardsSection() {
    const cards = [
        {
            icon: (
                <GraduationCap className="h-8 w-8 text-primary text-emerald-700" />
            ),
            title: "Online Training",
            description: "Explore a variety of fresh topics",
        },
        {
            icon: (
                <UserRoundPen className="h-8 w-8 text-primary text-emerald-700" />
            ),
            title: "Online Instructors",
            description: "Expert instruction.",
        },
        {
            icon: (
                <LaptopMinimalCheck className="h-8 w-8 text-primary text-emerald-700" />
            ),
            title: "Always Online",
            description: "Learn on your schedule.",
        },
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 40 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
            },
        },
    };

    return (
        <section className="relative z-10 mb-14 lg:container">
            {/* Negative margin pulls cards up into hero section */}
            <div className="container px-4 sm:px-6">
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={container}
                    className="grid md:grid-cols-3 gap-6 -mt-24"
                >
                    {cards.map((card, index) => (
                        <motion.div key={index} variants={item}>
                            <Card className="h-full hover:shadow-emerald-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-emerald-100 border border-emerald-200">
                                <div className="flex p-6">
                                    {/* Icon on the left */}
                                    <div className="flex-shrink-0 mr-4 mt-1 ">
                                        {card.icon}
                                    </div>

                                    {/* Content on the right */}
                                    <div>
                                        <CardTitle className="text-lg capitalize text-emerald-700">
                                            {card.title}
                                        </CardTitle>
                                        <CardDescription className="mt-1 text-emerald-700">
                                            {card.description}
                                        </CardDescription>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
