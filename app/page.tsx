import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Github, Mail } from "lucide-react"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      {/* Skip to main content link for keyboard navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md"
      >
        Skip to main content
      </a>

      {/* Sticky Navigation */}
      <nav
        className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
        aria-label="Main navigation"
      >
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="font-bold text-lg">
              <span className="text-accent">Feel the Stars</span>
            </div>
            <ul className="hidden md:flex items-center gap-6 text-sm" role="list">
              <li>
                <a
                  href="#about"
                  className="hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background rounded px-2 py-1"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background rounded px-2 py-1"
                >
                  How it Works
                </a>
              </li>
              <li>
                <a
                  href="#mvp"
                  className="hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background rounded px-2 py-1"
                >
                  MVP
                </a>
              </li>
              <li>
                <a
                  href="#accessibility"
                  className="hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background rounded px-2 py-1"
                >
                  Accessibility
                </a>
              </li>
              <li>
                <a
                  href="#get-involved"
                  className="hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background rounded px-2 py-1"
                >
                  Get Involved
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background rounded px-2 py-1"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main id="main-content" className="container mx-auto px-4 py-8 md:py-12">
        {/* Hero Section */}
        <section aria-labelledby="hero-heading" className="mb-16 md:mb-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 id="hero-heading" className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Feel the Stars
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 leading-relaxed text-pretty">
              Experience constellations through touch and haptics. A concept app bringing the wonder of the night sky to
              blind and visually impaired people.
            </p>

            <p className="text-lg md:text-xl text-muted-foreground/90 mb-8 leading-relaxed italic">
              This is about giving blind people a way to experience the shape and presence of the night sky — not just
              hear about it.
            </p>

            {/* Important Callout */}
            <Card className="p-6 bg-accent/10 border-accent/30 mb-8">
              <p className="text-lg leading-relaxed">
                <strong className="text-accent">Looking for blind and visually impaired testers</strong> and
                accessibility feedback before any serious build begins.
              </p>
            </Card>
          </div>
        </section>

        {/* Origin Story */}
        <section id="about" aria-labelledby="about-heading" className="mb-16 md:mb-20">
          <div className="max-w-3xl mx-auto">
            <h2 id="about-heading" className="text-3xl md:text-4xl font-bold mb-6">
              Origin Story
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed text-muted-foreground">
                This idea was born from witnessing a blind person express frustration that they couldn't see the stars.
                Everyone deserves to experience the wonder of constellations. This isn't about "fixing" blindness — it's
                about offering access to an experience that brings awe and connection to so many sighted people.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" aria-labelledby="how-it-works-heading" className="mb-16 md:mb-20">
          <div className="max-w-3xl mx-auto">
            <h2 id="how-it-works-heading" className="text-3xl md:text-4xl font-bold mb-8">
              How It Works
            </h2>

            <ol className="space-y-6" role="list" aria-label="How the app works, 4 steps">
              <li className="flex gap-4">
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold"
                  aria-hidden="true"
                >
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Point your phone at the sky</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The app uses your camera and sensors to detect where you're pointing, identifying bright stars in
                    that region of the sky.
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold"
                  aria-hidden="true"
                >
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">App identifies constellations</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Starting with recognizable patterns like Orion's Belt, the app matches detected stars to known
                    constellation shapes.
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold"
                  aria-hidden="true"
                >
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Feel the pattern on your screen</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Explore the constellation by tracing your finger across the touchscreen, feeling stars and lines
                    through vibration. Haptic vibrations pulse when you touch a star location, creating a tactile star
                    map.
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold"
                  aria-hidden="true"
                >
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Learn constellation names and stories</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    VoiceOver and TalkBack announce star names and constellation information. Optional braille display
                    output for compatible devices.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        {/* MVP Scope */}
        <section id="mvp" aria-labelledby="mvp-heading" className="mb-16 md:mb-20">
          <div className="max-w-3xl mx-auto">
            <h2 id="mvp-heading" className="text-3xl md:text-4xl font-bold mb-6">
              MVP Scope
            </h2>
            <Card className="p-6 md:p-8">
              <p className="text-lg mb-6 leading-relaxed">We're starting small and focused to prove the concept:</p>
              <ul className="space-y-4 text-muted-foreground" role="list">
                <li className="flex gap-3">
                  <span className="text-accent mt-1" aria-hidden="true">
                    ✦
                  </span>
                  <span className="leading-relaxed">
                    <strong className="text-foreground">One constellation:</strong> Orion's Belt — easy to recognize,
                    only 3 bright stars
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent mt-1" aria-hidden="true">
                    ✦
                  </span>
                  <span className="leading-relaxed">
                    <strong className="text-foreground">Bright stars only:</strong> Limiting to the most visible stars
                    simplifies detection
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent mt-1" aria-hidden="true">
                    ✦
                  </span>
                  <span className="leading-relaxed">
                    <strong className="text-foreground">Two modes:</strong> Scanning mode (find the constellation) and
                    Feel mode (explore it with touch and haptics)
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent mt-1" aria-hidden="true">
                    ✦
                  </span>
                  <span className="leading-relaxed">
                    <strong className="text-foreground">VoiceOver/TalkBack first:</strong> Full screen reader support is
                    mandatory, braille display support as a stretch goal
                  </span>
                </li>
              </ul>
            </Card>
          </div>
        </section>

        {/* Accessibility */}
        <section id="accessibility" aria-labelledby="accessibility-heading" className="mb-16 md:mb-20">
          <div className="max-w-3xl mx-auto">
            <h2 id="accessibility-heading" className="text-3xl md:text-4xl font-bold mb-6">
              Accessibility Commitment
            </h2>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                This app is being designed with blind and visually impaired users as the primary audience, not an
                afterthought. Accessibility isn't a feature — it's the foundation.
              </p>

              <Card className="p-6 md:p-8">
                <h3 className="text-xl font-semibold mb-4">Planned Accessibility Features:</h3>
                <ul className="space-y-3 text-muted-foreground" role="list">
                  <li className="flex gap-3">
                    <span className="text-accent mt-1" aria-hidden="true">
                      ✓
                    </span>
                    <span className="leading-relaxed">
                      Full VoiceOver (iOS) and TalkBack (Android) support with descriptive audio feedback
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent mt-1" aria-hidden="true">
                      ✓
                    </span>
                    <span className="leading-relaxed">
                      Haptic feedback patterns that clearly indicate star positions and boundaries
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent mt-1" aria-hidden="true">
                      ✓
                    </span>
                    <span className="leading-relaxed">
                      Braille display output for users with compatible refreshable braille devices
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent mt-1" aria-hidden="true">
                      ✓
                    </span>
                    <span className="leading-relaxed">High contrast visual mode for low vision users</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent mt-1" aria-hidden="true">
                      ✓
                    </span>
                    <span className="leading-relaxed">Gesture-based navigation optimized for touch exploration</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent mt-1" aria-hidden="true">
                      ✓
                    </span>
                    <span className="leading-relaxed">No reliance on color alone to convey information</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* What We Need */}
        <section id="get-involved" aria-labelledby="get-involved-heading" className="mb-16 md:mb-20">
          <div className="max-w-3xl mx-auto">
            <h2 id="get-involved-heading" className="text-3xl md:text-4xl font-bold mb-6">
              What We Need
            </h2>

            <div className="space-y-6 mb-8">
              <p className="text-lg leading-relaxed text-muted-foreground">
                This is a concept project looking for collaborators and feedback. We need:
              </p>

              <ul className="space-y-4 text-muted-foreground" role="list">
                <li className="flex gap-3">
                  <span className="text-accent text-xl" aria-hidden="true">
                    •
                  </span>
                  <span className="leading-relaxed">
                    <strong className="text-foreground">Blind and visually impaired testers</strong> to validate that
                    the experience is meaningful and usable
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent text-xl" aria-hidden="true">
                    •
                  </span>
                  <span className="leading-relaxed">
                    <strong className="text-foreground">Accessibility experts</strong> to review and improve the design
                    before we build
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent text-xl" aria-hidden="true">
                    •
                  </span>
                  <span className="leading-relaxed">
                    <strong className="text-foreground">Mobile developers</strong> with experience in haptics, sensors,
                    and accessible app development
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent text-xl" aria-hidden="true">
                    •
                  </span>
                  <span className="leading-relaxed">
                    <strong className="text-foreground">Astronomy/star detection guidance</strong> for simple, reliable
                    constellation recognition
                  </span>
                </li>
              </ul>

              <p className="text-base leading-relaxed text-muted-foreground mt-4">
                Even early thoughts like "this wouldn't work for me" are valuable feedback.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold mb-4">Get Involved</h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg" asChild>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View project on GitHub, opens in new tab"
                  >
                    <Github className="mr-2 h-5 w-5" aria-hidden="true" />
                    GitHub Repo
                  </a>
                </Button>

                <Button size="lg" variant="outline" className="text-lg bg-transparent" asChild>
                  <a
                    href="https://reddit.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Join discussion on Reddit, opens in new tab"
                  >
                    Reddit Thread
                  </a>
                </Button>

                <Button size="lg" variant="outline" className="text-lg bg-transparent" asChild>
                  <a href="mailto:hello@feelthestars.example" aria-label="Send email to hello@feelthestars.example">
                    <Mail className="mr-2 h-5 w-5" aria-hidden="true" />
                    Email Us
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" aria-labelledby="faq-heading" className="mb-16 md:mb-20">
          <div className="max-w-3xl mx-auto">
            <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold mb-6">
              Frequently Asked Questions
            </h2>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left text-lg">Is this braille?</AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                  No, this isn't braille. It uses haptic vibrations (like the buzz you feel when you get a notification)
                  to indicate star positions on the touchscreen. When you move your finger over a star location, the
                  phone vibrates. Think of it as a tactile star map you can explore with touch.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left text-lg">Do I need special hardware?</AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                  No special hardware required. The app works with any modern iPhone or Android phone that has a camera,
                  gyroscope sensors, and haptic vibration capability (which is nearly all smartphones made in the last
                  5+ years).
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left text-lg">
                  Will it work in cities with light pollution?
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                  That's a great question and one we're still exploring. The MVP focuses on very bright stars (like
                  those in Orion's Belt) which are often visible even in cities. However, for best results, darker skies
                  away from city lights would be ideal. We may need to add a "simulated mode" for city users to practice
                  without needing clear skies.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left text-lg">How does it find constellations?</AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                  The app uses your phone's camera, GPS location, gyroscope (to detect which direction you're pointing),
                  and the current time/date to calculate which stars should be visible in that part of the sky. It then
                  tries to match the pattern to known constellations. We're starting simple with very distinctive
                  patterns.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left text-lg">What if it can't detect stars?</AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                  If cloud cover, light pollution, or technical limitations prevent detection, users can switch to
                  "practice mode" — a simulated star field where they can learn constellation patterns anytime,
                  anywhere. This also serves as a tutorial mode to get familiar with the haptic feedback system.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className="text-left text-lg">How can I help?</AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                  We especially need blind and visually impaired people to provide feedback on the concept and
                  accessibility design. If you have experience with accessible mobile app development, astronomy/star
                  detection algorithms, or haptic interface design, we'd love to hear from you. Reach out via the
                  contact links above, or check the GitHub repo for contribution guidelines.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8 mt-16" role="contentinfo">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm text-muted-foreground">
            Concept project. Not affiliated with NASA or any planetarium.
          </p>
          <p className="text-center text-sm text-muted-foreground mt-2">Built with accessibility and wonder in mind.</p>
        </div>
      </footer>
    </div>
  )
}
