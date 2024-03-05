"use client";
// import { Modal } from "@/components/ui/modal";
import { useEffect } from 'react';
// import { Button } from "@/components/ui/button"
// import { UserButton } from "@clerk/nextjs";
import { useStoreModal } from "@/hooks/use-store-modal";

const SetupPage = () => {
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

    return null;//return (
      //<div className="p-4">
       // Root Page
        {/* <UserButton afterSignOutUrl="/"/> */}
        {/* <Modal title="Create store" description="Add a new store to manage products and categories." isOpen onClose={() =>{}}>
          Children
        </Modal> */}
    //  </div>
   // )
  }

  export default SetupPage;