import { register } from "@/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
export default function RegisterPage() {
  return (
    <div className="flex justify-center items-center min-h-[400px]">
      <div className="w-full max-w-md p-6 border rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold mb-2">Register</h2>
        <p className="text-gray-500 mb-6">
          Enter your credentials to access your account
        </p>

        <form action={register} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input id="username" placeholder="Enter your username" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700"
          >
            Register
          </Button>
        </form>
      </div>
    </div>
  );
}
