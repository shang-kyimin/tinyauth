import { LoginButton } from "@/components/auth/LoginButton";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <main className="flex justify-center items-center flex-col h-screen">
      <section className="space-y-4">
        <div className="space-y-1">
          <h1 className="text-4xl sm:text-5xl tracking-wide font-semibold">TinyAuth</h1>
          <h6 className="sm:text-lg">Free authentication service for side projects: ideal for not only testing and development but also in production.</h6>
        </div>

        <div className="">
          <LoginButton>
            <Button>Login</Button>
          </LoginButton>
        </div>
      </section>
    </main>
  );
}
