import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";

interface WaitlistFormSectionProps {
  variant?: "hero" | "mid-page" | "final";
}

export function WaitlistFormSection({ variant = "mid-page" }: WaitlistFormSectionProps) {
  const [email, setEmail] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Integrate with Brevo API
    console.log("Waitlist signup:", { email, variant });

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSuccess(true);
    setEmail("");

    // Reset success message after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000);
  };

  // Mid-page variant has section wrapper
  if (variant === "mid-page") {
    return (
      <section className="py-16 md:py-24 bg-gradient-to-br from-[hsl(var(--secondary)/0.1)] to-[hsl(var(--secondary)/0.05)]">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            {/* Header */}
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Ready to join?
            </h2>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              Get your spot on the waitlist now. Takes 10 seconds.
            </p>

            {/* Form */}
            {isSuccess ? (
              <div className="rounded-lg border-2 border-[hsl(var(--secondary))] bg-background p-8">
                <p className="text-xl font-semibold text-[hsl(var(--secondary))]">
                  You're in! Check your email 🎉
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  We just sent you a confirmation. Welcome to NomaPhone.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mx-auto max-w-md">
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 h-12 text-base"
                    disabled={isSubmitting}
                  />
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="sm:w-auto h-12"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Joining...
                      </>
                    ) : (
                      "Join Beta Waitlist"
                    )}
                  </Button>
                </div>

                {/* Privacy text */}
                <p className="mt-4 text-xs text-muted-foreground">
                  No spam, unsubscribe anytime. We'll only email you when we launch.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    );
  }

  // Hero and Final variants return just the form (no section wrapper)
  // They will be embedded in their parent sections
  return (
    <div className="mx-auto max-w-md">
      {isSuccess ? (
        <div className="rounded-lg border-2 border-[hsl(var(--secondary))] bg-background p-6">
          <p className="text-lg font-semibold text-[hsl(var(--secondary))]">
            You're in! Check your email 🎉
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            We just sent you a confirmation.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
              disabled={isSubmitting}
            />
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="sm:w-auto"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Joining...
                </>
              ) : (
                "Join Beta Waitlist"
              )}
            </Button>
          </div>
          <p className="mt-2 text-xs text-muted-foreground text-center">
            {variant === "hero"
              ? "First 50 get $25 total value • No spam, unsubscribe anytime"
              : "No spam, unsubscribe anytime. We'll only email you when we launch."}
          </p>
        </form>
      )}
    </div>
  );
}