import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Custom Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// shadcn/ui Components
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';

// Icons
import { CheckCircle2 } from 'lucide-react';

const OrderConfirmationPage = () => {
  console.log('OrderConfirmationPage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-blue-50">
      <Header />

      <main className="flex-grow flex items-center justify-center p-4 md:p-8">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <Card className="w-full max-w-lg shadow-2xl rounded-xl overflow-hidden border-2 border-blue-400">
            <CardHeader className="text-center bg-blue-100 p-6">
              <img
                src="https://i.pinimg.com/originals/6a/d7/8f/6ad78f4471801f6195e571e063b0a2c5.gif"
                alt="Doraemon eating Dorayaki"
                className="w-32 h-32 mx-auto mb-4 rounded-full border-4 border-white shadow-lg"
              />
              <CardTitle className="text-3xl font-bold text-blue-800" style={{ fontFamily: 'sans-serif' }}>
                Your treats are on the way!
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 text-center space-y-4">
              <Alert variant="default" className="bg-green-100 border-green-300 text-green-800">
                <CheckCircle2 className="h-5 w-5" />
                <AlertTitle className="font-semibold">Order Confirmed!</AlertTitle>
                <AlertDescription>
                  We've received your order and are preparing it with extra delight.
                </AlertDescription>
              </Alert>

              <div className="text-gray-700 space-y-2">
                <p>
                  <strong>Order Number:</strong> #DORA12345
                </p>
                <p>
                  <strong>Estimated Delivery:</strong> 30-45 minutes
                </p>
                <p className="pt-2">
                  Thank you for choosing Doraemon Delights! Get ready for a taste of the future.
                </p>
              </div>

              <div className="flex justify-center gap-4 pt-4">
                <Button asChild size="lg">
                  <Link to="/menu">Back to Menu</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/">Go Home</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default OrderConfirmationPage;