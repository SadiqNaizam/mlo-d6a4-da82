import React, { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Trash2, ShoppingBag } from 'lucide-react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const initialCartItems: CartItem[] = [
  {
    id: 1,
    name: "Doraemon's Favorite Dorayaki",
    price: 3.50,
    quantity: 2,
    image: 'https://i.imgur.com/kS9r2oD.png', // A suitable image for Dorayaki
  },
  {
    id: 2,
    name: "Memory Bread Slice",
    price: 5.00,
    quantity: 1,
    image: 'https://i.imgur.com/4q5gO8c.png', // A suitable image for Memory Bread
  },
];

const CartPage: React.FC = () => {
  console.log('CartPage loaded');
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);
  const navigate = useNavigate();

  const handleQuantityChange = (id: number, quantity: number) => {
    if (quantity < 1) return; // Prevent quantity from being less than 1
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: quantity } : item
      )
    );
  };

  const handleRemoveItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const subtotal = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [cartItems]);

  const handleCheckout = () => {
    navigate('/checkout'); // Navigate to the checkout page
  };
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto py-12 px-4">
        <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-blue-600 mb-2" style={{ fontFamily: 'sans-serif' }}>Doraemon's 4D Pocket</h1>
            <p className="text-lg text-gray-600">Here are the yummy treats you've picked!</p>
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <ShoppingBag className="mx-auto h-16 w-16 text-gray-400 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-700">Your pocket is empty!</h2>
            <p className="text-gray-500 mt-2">Looks like you haven't added any delights to your cart yet.</p>
            <Button asChild className="mt-6 bg-blue-500 hover:bg-blue-600">
              <Link to="/menu">Explore the Menu</Link>
            </Button>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 lg:gap-12">
            <div className="lg:col-span-2">
              <Card>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[40%]">Product</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead className="text-center">Quantity</TableHead>
                      <TableHead className="text-right">Total</TableHead>
                      <TableHead></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {cartItems.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">
                          <div className="flex items-center gap-4">
                            <img src={item.image} alt={item.name} className="h-16 w-16 object-contain rounded-md bg-gray-100 p-1" />
                            <span>{item.name}</span>
                          </div>
                        </TableCell>
                        <TableCell>${item.price.toFixed(2)}</TableCell>
                        <TableCell className="text-center">
                           <Input
                              type="number"
                              value={item.quantity}
                              onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                              className="w-20 text-center mx-auto"
                              min="1"
                            />
                        </TableCell>
                        <TableCell className="text-right">${(item.price * item.quantity).toFixed(2)}</TableCell>
                        <TableCell>
                          <Button variant="ghost" size="icon" onClick={() => handleRemoveItem(item.id)}>
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
            </div>
            
            <div className="lg:col-span-1 mt-8 lg:mt-0">
                <Card className="sticky top-24">
                    <CardHeader>
                        <CardTitle>Order Summary</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex justify-between text-lg">
                            <span>Subtotal</span>
                            <span className="font-semibold">${subtotal.toFixed(2)}</span>
                        </div>
                         <p className="text-sm text-gray-500">Taxes and shipping calculated at checkout.</p>
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full bg-yellow-400 text-black hover:bg-yellow-500" size="lg" onClick={handleCheckout}>
                            Proceed to Checkout
                        </Button>
                    </CardFooter>
                </Card>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default CartPage;