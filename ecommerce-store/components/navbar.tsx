import Link from "next/link";

import MainNav from "@/components/main-nav";
import Container from "@/components/ui/container";
import NavbarActions from "@/components/navbar-actions";
import getCategories from "@/actions/get-categories";
import { UserButton, SignUpButton, SignInButton, auth } from "@clerk/nextjs";
import {  UserPlus } from "lucide-react";
import { redirect } from "next/navigation";

const Navbar = async () => {
  const categories = await getCategories();

  const { userId } = auth();

  return ( 
    <div className="border-b">
      <Container>
        <div className="relative px-0 sm:px-6 lg:px-8 flex h-16 items-center">{/*<div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">*/}
          <Link href="/" className="ml-0 flex lg:ml-0 gap-x-2">{/*<Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">*/}
            <p className="font-bold text-xl">storeThree</p>
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
          {userId ? (
            <div  className="">
            <UserButton afterSignOutUrl="/" />
            </div>
          ) : (
            <SignUpButton>
              <button className=""><UserPlus /></button>
            </SignUpButton>
          )}
        </div>
      </Container>
    </div>
  );
};
 
export default Navbar;