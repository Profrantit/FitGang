import Link from "next/link";
import Ham from "./Ham";

const Navbar = () => {
  return (
    <nav>
      <Link href="/">
        <div className="logo">
          <h1>GangFit</h1>
        </div>
      </Link>

      <Ham />
    </nav>
  );
};

export default Navbar;
