import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const bestsellers = [
  {
    title: "Doraemon's Favorite Dorayaki",
    description: "The classic, fluffy pancakes filled with sweet red bean paste. A taste of friendship and adventure!",
    imageUrl: "https://via.placeholder.com/1200x800/a0d8ef/333333?text=Dorayaki",
    cta: "Taste the Classic",
  },
  {
    title: "Memory Bread Genius Toast",
    description: "A slice of perfectly toasted bread that will make you feel like you can remember anything. Topped with honey and butter.",
    imageUrl: "https://via.placeholder.com/1200x800/f5c974/333333?text=Memory+Bread",
    cta: "Unlock Your Potential",
  },
  {
    title: "Gian's Hearty Stew",
    description: "A surprisingly delicious and robust stew, just like Gian's heart of gold. Packed with fresh vegetables and tender meat.",
    imageUrl: "https://via.placeholder.com/1200x800/e88b3a/333333?text=Gian's+Stew",
    cta: "Savor the Flavor",
  },
];

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const BestsellersShowcase: React.FC = () => {
  console.log('BestsellersShowcase loaded');

  return (
    <section className="w-full py-12 md:py-20 bg-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            Everyone's Favorites
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Discover the dishes that capture the magic of Doraemon!
          </p>
        </motion.div>

        <Carousel
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {bestsellers.map((item, index) => (
              <CarouselItem key={index}>
                <Card className="overflow-hidden border-none shadow-none bg-transparent">
                  <CardContent className="relative flex aspect-video items-center justify-center p-0">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black/40 rounded-lg" />
                    <div className="relative z-10 text-center text-white p-6 md:p-8">
                      <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={textVariants}
                      >
                        <h3 className="text-3xl md:text-5xl font-extrabold drop-shadow-lg">
                          {item.title}
                        </h3>
                        <p className="mt-4 max-w-md mx-auto text-base md:text-lg drop-shadow-md">
                          {item.description}
                        </p>
                        <Button asChild size="lg" className="mt-8 transition-transform duration-200 hover:scale-105">
                          <Link to="/menu">{item.cta}</Link>
                        </Button>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default BestsellersShowcase;