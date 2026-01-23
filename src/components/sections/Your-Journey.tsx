import BackgroundDots from "@/components/ui/background";
import { JourneyAnimation } from "./journey/JourneySection";

export function YourJourney() {
  return (
    <section className="relative overflow-hidden">
      <BackgroundDots
        className="py-15"
        spacing={36}
        dotSize={2.5}
        backgroundColor=""
        dotColor="#D9D9D9"
        style={{
          background: "linear-gradient(to bottom, #ffffff 38.524%, #feecd6 171.52%)",
        }}
      >
        <div className="relative mx-auto max-w-7xl px-[4%]">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-medium text-[#111111]">
              Your Journey to AI Enablement
            </h2>
            <p className="mt-4 text-base text-[#454545]">
              A Framework for Enterprise Readiness
            </p>
          </div>

          <JourneyAnimation />
        </div>
      </BackgroundDots>
    </section>
  );
}