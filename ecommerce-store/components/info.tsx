"use client";

import { ShoppingCart } from "lucide-react";

import Currency  from "@/components/ui/currency";
import Button from "@/components/ui/button";
import { Product } from "@/types";
import useCart from "@/hooks/use-cart";

import { useState } from 'react';

interface InfoProps {
  data: Product
};

const Info: React.FC<InfoProps> = ({ data }) => {
  const cart = useCart();
  const [selectedQuantity, setSelectedQuantity] = useState<number>(1);

  const onAddToCart = () => {
    if (selectedQuantity > 0) {
      const updatedProduct = { ...data, quantity: selectedQuantity };
      cart.addItem(updatedProduct);//cart.addItem(data);
      // console.log('cart:', updatedProduct);
    }
  }

  const incrementQuantity = () => {
    if (selectedQuantity < data.quantity) {
      setSelectedQuantity(selectedQuantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (selectedQuantity > 1) {
      setSelectedQuantity(selectedQuantity - 1);
    }
  };
  // console.log('Data:', data);
  return ( 
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <div className="text-2xl text-gray-900">
          <Currency value={data?.price} />
          <div className="text-sm">
            {data?.quantity !== 1 ? `${data?.quantity} peças disponíveis` :  `${data?.quantity} peça disponível`}{data?.quantity !== null ? '' : '- ultimo no estoque!!'}
          </div>
        </div>
      </div>
      <hr className="my-2" />{/*<hr className="my-4" /> */}
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Tamanho:</h3>
          <div>
            {data?.size?.value}
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Cor:</h3>
          <div className="h-6 w-6 rounded-full border border-gray-600" style={{ backgroundColor: data?.color?.value }} />
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Quantidade:</h3>
          <button onClick={decrementQuantity}>-</button>
          <span>{selectedQuantity}</span>
          <button onClick={incrementQuantity}>+</button>
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button onClick={onAddToCart} 
          disabled={data.quantity === 0} // Desabilita se a quantidade for zero 
          className="flex items-center gap-x-2">
          Adicionar ao carrinho
          <ShoppingCart size={20} />
        </Button>
      </div>
    </div>
  );
}
 
export default Info;
