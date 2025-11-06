import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Digital Nomad in Bali",
    avatar: "SC",
    content: "Finally, a way to call my bank back home without the headache. No app to download, works instantly. Saved me hours of frustration.",
    rating: 5,
  },
  {
    name: "Miguel Rodriguez",
    role: "Remote Developer",
    avatar: "MR",
    content: "I call clients worldwide daily. NomaPhone costs me 10x less than my old carrier. The browser-based approach is genius.",
    rating: 5,
  },
  {
    name: "Priya Patel",
    role: "Startup Founder",
    avatar: "PP",
    content: "We use it for our whole remote team. Shared credits, call analytics, and way cheaper than traditional business VoIP. Game changer.",
    rating: 5,
  },
  {
    name: "Tom Anderson",
    role: "Expat in UAE",
    avatar: "TA",
    content: "The virtual number feature is perfect for 2FA codes from my home country. Worth every penny. Crystal clear quality too.",
    rating: 5,
  },
  {
    name: "Lisa Wong",
    role: "Travel Blogger",
    avatar: "LW",
    content: "As someone constantly moving countries, this is essential. No contracts, no commitments. Just works everywhere I go.",
    rating: 5,
  },
  {
    name: "Alex Kumar",
    role: "Freelance Consultant",
    avatar: "AK",
    content: "The AI transcription feature is incredible for client calls. And the fact it runs in browser means I can use it on any device.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-blue-50/30 to-background dark:from-blue-950/10 dark:to-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Loved by{" "}
            <span className="text-blue-600">nomads worldwide</span>
          </h2>
          <p className="text-lg text-muted-foreground md:text-xl">
            Join thousands of digital nomads, expats, and remote workers who trust NomaPhone.
          </p>
        </div>

        {/* Stats bar */}
        <div className="mx-auto mb-16 grid max-w-4xl gap-8 text-center sm:grid-cols-3">
          <div>
            <div className="text-4xl font-bold text-blue-600">4.8/5</div>
            <div className="mt-2 text-sm text-muted-foreground">Average rating</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-600">50K+</div>
            <div className="mt-2 text-sm text-muted-foreground">Happy users</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-600">150+</div>
            <div className="mt-2 text-sm text-muted-foreground">Countries covered</div>
          </div>
        </div>

        {/* Testimonials grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2 transition-all hover:border-blue-200 hover:shadow-lg dark:hover:border-blue-800">
              <CardContent className="pt-6">
                {/* Rating stars */}
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial content */}
                <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback className="bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-400">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
