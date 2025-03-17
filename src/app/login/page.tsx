import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { login } from "@/actions";
export default function LoginPage() {
  // const errorMessage = "";
  // if (params.error) {
  //   errorMessage = params.error:
  // }
  return (
    <div className="flex justify-center items-center min-h-[400px]">
      <div className="w-full max-w-md p-6 border rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold mb-2">Login</h2>
        <p className="text-gray-500 mb-6">
          Enter your credentials to access your account
        </p>

        <form action={login} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              name="username"
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              name="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700"
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}
