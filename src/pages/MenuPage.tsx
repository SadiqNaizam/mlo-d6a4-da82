import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import InteractiveFoodItemCard from '@/components/InteractiveFoodItemCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Themed placeholder data for the menu
const menuItems = [
  {
    id: 1,
    name: '"Anywhere Door" Pepperoni Pizza',
    price: 15.99,
    imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800',
    category: 'mains',
  },
  {
    id: 2,
    name: '"Memory Bread" French Toast',
    price: 12.50,
    imageUrl: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?q=80&w=800',
    category: 'mains',
  },
  {
    id: 3,
    name: 'Doraemon\'s Favorite Dorayaki',
    price: 6.00,
    imageUrl: 'https://images.unsplash.com/photo-1615837197154-2e801f2d15be?q=80&w=800',
    category: 'desserts',
  },
  {
    id: 4,
    name: '"Time Furoshiki" Tiramisu',
    price: 8.50,
    imageUrl: 'https://images.unsplash.com/photo-1571115332346-95f1902513a4?q=80&w=800',
    category: 'desserts',
  },
  {
    id: 5,
    name: '"Take-copter" Iced Tea',
    price: 4.50,
    imageUrl: 'https://images.unsplash.com/photo-1556679343-c7306c19761a?q=80&w=800',
    category: 'drinks',
  },
  {
    id: 6,
    name: '"Small Light" Sparkling Soda',
    price: 4.00,
    imageUrl: 'https://images.unsplash.com/photo-1605332435552-f6733ea79b3b?q=80&w=800',
    category: 'drinks',
  },
    {
    id: 7,
    name: 'Giant\'s "Heart-Stopping" Steak',
    price: 24.99,
    imageUrl: 'https://images.unsplash.com/photo-1633436374961-a965224dd347?q=80&w=800',
    category: 'mains',
  },
  {
    id: 8,
    name: 'Shizuka\'s Sweet Potato Delight',
    price: 7.25,
    imageUrl: 'https://images.unsplash.com/photo-1608149870955-4948714b62d2?q=80&w=800',
    category: 'desserts',
  }
];

const MenuPage = () => {
  console.log('MenuPage loaded');

  const handleAddToCart = (id: string | number) => {
    // In a real app, this would dispatch an action to a global state (e.g., Redux, Zustand)
    console.log(`Adding item ${id} to cart`);
  };

  const renderMenuItems = (category: string) => {
    return menuItems
      .filter(item => item.category === category)
      .map(item => (
        <InteractiveFoodItemCard
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          imageUrl={item.imageUrl}
          onAddToCart={handleAddToCart}
        />
      ));
  };

  return (
    <div className="flex flex-col min-h-screen bg-blue-50/50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-600" style={{ fontFamily: 'sans-serif' }}>
            Our Magical Menu
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Discover a taste of the future, inspired by Doraemon's amazing gadgets!
          </p>
        </div>

        <Tabs defaultValue="desserts" className="w-full">
          <TabsList className="grid w-full grid-cols-3 md:w-1/2 mx-auto mb-8 bg-blue-100 p-2 rounded-lg">
            <TabsTrigger value="mains">Mains</TabsTrigger>
            <TabsTrigger value="desserts">Desserts</TabsTrigger>
            <TabsTrigger value="drinks">Drinks</TabsTrigger>
          </TabsList>

          <TabsContent value="mains">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
              {renderMenuItems('mains')}
            </div>
          </TabsContent>
          <TabsContent value="desserts">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
              {renderMenuItems('desserts')}
            </div>
          </TabsContent>
          <TabsContent value="drinks">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
              {renderMenuItems('drinks')}
            </div>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default MenuPage;