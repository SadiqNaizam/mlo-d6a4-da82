import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { PlusCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

interface InteractiveFoodItemCardProps {
  id: string | number;
  name: string;
  price: number;
  imageUrl: string;
  onAddToCart?: (id: string | number) => void;
}

const InteractiveFoodItemCard: React.FC<InteractiveFoodItemCardProps> = ({
  id,
  name,
  price,
  imageUrl,
  onAddToCart,
}) => {
  console.log('InteractiveFoodItemCard loaded for:', name);

  const handleAddToCartClick = () => {
    toast.success(`${name} added to your order!`, {
      description: "Check your cart to complete the purchase.",
      action: {
        label: "Undo",
        onClick: () => console.log(`Undo add to cart for item ${id}`),
      },
    });
    if (onAddToCart) {
      onAddToCart(id);
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      <Card className="w-full overflow-hidden transition-shadow duration-300 hover:shadow-lg hover:shadow-blue-200/50 border-2 border-transparent hover:border-blue-400">
        <CardHeader className="p-0 relative">
          <AspectRatio ratio={4 / 3}>
            <img
              src={imageUrl || 'https://placehold.co/400x300?text=Food+Image'}
              alt={name}
              className="object-cover w-full h-full"
            />
          </AspectRatio>
          {/* Doraemon-themed motif: a simple bell */}
          <div className="absolute top-2 right-2 bg-yellow-400 rounded-full p-1.5 shadow-md border-2 border-yellow-600">
            <div className="w-3 h-3 bg-yellow-600 rounded-full"></div>
            <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-px h-1 bg-yellow-700"></div>
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <CardTitle className="text-lg font-bold text-gray-800 line-clamp-1">{name}</CardTitle>
          <p className="text-xl font-semibold text-blue-600 mt-1">${price.toFixed(2)}</p>
        </CardContent>
        <CardFooter className="p-3 pt-0">
          <Button className="w-full bg-red-500 hover:bg-red-600" onClick={handleAddToCartClick}>
            <PlusCircle className="mr-2 h-5 w-5" />
            Add to Order
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default InteractiveFoodItemCard;