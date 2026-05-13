import Link from "next/link";

export default function About() {
  return (  
    <div className="flex flex-col flex-1 items-center justify-center">
        <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between">
            <h1 className="text-6xl font-bold">
                Product Page
            </h1>

            <Link href="/admin/dashboard/product/1" className="text-blue-500 hover:underline"> Go to Product 1</Link>
            <Link href="/admin/dashboard/product/2" className="text-blue-500 hover:underline"> Go to Product 2</Link> 
            
        </main>
    </div>
  );
}