"use client";
import { useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface ModalProps {
  title: string;
  description: string;
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  title,
  description,
  isOpen,
  onClose,
  children
}) => {
    const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };

  return ( 
    <Dialog open={isOpen} onOpenChange={onChange}>
         {isClient && (
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            {description}
          </DialogDescription>
        </DialogHeader>
        <div>
          {children}
        </div>
        </DialogContent>
      )}
    </Dialog>
    // <Dialog open={isOpen} onOpenChange={onChange}>
    //   <DialogContent>
    //     <DialogHeader>
    //       <DialogTitle>{title}</DialogTitle>
    //       <DialogDescription>
    //         {description}
    //       </DialogDescription>
    //     </DialogHeader>
    //     <div>
    //       {children}
    //     </div>
    //   </DialogContent>
    // </Dialog>
  );
};
