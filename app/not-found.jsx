

// import Link from "next/link";
// import { Button } from "@/components/ui/button";

// export default function NotFound() {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-[100vh] px-4 text-center">
//       <h1 className="text-6xl font-bold gradient-title mb-4">404</h1>
//       <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
//       <p className="text-gray-600 mb-8">
//         Oops! The page you&apos;re looking for doesn&apos;t exist or has been
//         moved.
//       </p>
//       <Link href="/">
//         <Button>Return Home</Button>
//       </Link>
//     </div>
//   );
// }
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4 text-center font-serif">
      <h1 className="text-7xl font-bold text-black mb-4">404</h1>

      <div className="w-full max-w-md mb-6">
        <img
          src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
          alt="404 Illustration"
          className="w-full object-contain"
        />
      </div>

      <h2 className="text-2xl font-semibold mb-2 text-gray-800">
        Looks like you're lost
      </h2>
      <p className="text-gray-600 mb-6">
        The page you are looking for is not available!
      </p>

      <Link href="/">
        <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2">
          Go to Home
        </Button>
      </Link>
    </div>
  );
}

