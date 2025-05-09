import { Button } from "@/components/ui/button";
import { UserButton } from "@stackframe/stack";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <h1>Lets learn React with me!!</h1>
      <Button variant="destructive">Click Me</Button>
      <UserButton />
    </div>
  );
}
