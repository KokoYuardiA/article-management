import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

export default function UserProfilePage() {
  return (
    <Layout headerVariant="article">
      <main className="flex flex-1 items-center justify-center min-h-[calc(100vh-100px)]">
        <div className="w-full max-w-[400px] flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-4">User Profile</h2>
          <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-semibold text-3xl mb-2">
            J
          </div>
          <div className="w-full flex flex-col gap-2 px-6">
            <div className="flex bg-gray-100 rounded-md px-4 py-2 items-center justify-between text-sm">
              <div className="flex items-center min-w-[97px] justify-between">
                <span className="font-semibold">Username</span>
                <span className="mx-2">:</span>
              </div>
              <span>James Dean</span>
            </div>
            <div className="flex bg-gray-100 rounded-md px-4 py-2 items-center justify-between text-sm">
              <div className="flex items-center min-w-[97px] justify-between">
                <span className="font-semibold">Password</span>
                <span className="mx-2">:</span>
              </div>
              <span>Admin123</span>
            </div>
            <div className="flex bg-gray-100 rounded-md px-4 py-2 items-center justify-between text-sm">
              <div className="flex items-center min-w-[97px] justify-between">
                <span className="font-semibold">Email</span>
                <span className="mx-2">:</span>
              </div>
              <span>User</span>
            </div>
            <Button className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md">
              Back to home
            </Button>
          </div>
          
        </div>
      </main>
    </Layout>  
  );
}