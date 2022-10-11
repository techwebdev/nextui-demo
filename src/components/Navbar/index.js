import React from "react";
import { Link } from "@nextui-org/react";

function Navbar() {
  return (
    <div className="Navbar">
      <Link href="/">Product</Link>
      <Link href="/cart">Cart</Link>
    </div>
  );
}

export default Navbar;
