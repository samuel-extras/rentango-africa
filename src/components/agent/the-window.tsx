import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Logo } from "../logo";

export function TheWindow() {
  return (
    <section>
      <div className="bg-background py-24 md:py-32">
        <div className="mx-auto flex flex-col px-6 md:grid md:max-w-5xl md:grid-cols-2 md:gap-12">
          <div className="order-last mt-6 flex flex-col gap-12 md:order-first">
            <div className="space-y-6">
              <h2 className="text-balance text-3xl font-semibold md:text-4xl lg:text-5xl">
                Rentango is that window in real estate
              </h2>
              {/* put emojis before all the items */}
              <p className="text-muted-foreground">
                {" "}
                Earn by simply connecting apartments to the platform. Shortlet
                real estate is exploding, And people are booking apartments for:{" "}
                <strong>
                  Birthday parties 🎉, Business trips 🛩️, vacations 🌴,
                  Staycations , Business meetings 💼, Relocation 🚜, Mini events
                  🎉 and more,
                </strong>{" "}
                But most apartments don&apos;t get booked because they&apos;re
                invisible.{" "}
              </p>
            </div>

            <blockquote className="text-xl font-medium">
              <p>Rentango fixes all the problems in shortlet real estate.</p>
            </blockquote>
          </div>

          <div className="-mx-6 px-6 mask-[radial-gradient(ellipse_100%_100%_at_50%_0%,#000_70%,transparent_100%)] sm:mx-auto sm:max-w-md md:-mx-6 md:ml-auto md:mr-0">
            <div className="bg-background rounded-2xl border p-3 shadow-lg md:pb-12">
              <div className="grid grid-cols-2 gap-2">
                <Integration
                  icon="https://plus.unsplash.com/premium_photo-1661402076818-385b97b75cbb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJpcnRoZGF5JTIwcGFydHl8ZW58MHx8MHx8fDA%3D"
                  name="Birthday parties"
                />
                <Integration
                  icon="https://images.unsplash.com/photo-1654686474914-bb98f6280d10?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnVzaW5lc3MlMjB0cmlwfGVufDB8fDB8fHww"
                  name="Business trips"
                />
                <Integration
                  icon="https://images.unsplash.com/photo-1606788075819-9574a6edfab3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFtaWx5JTIwaG9tZXxlbnwwfHwwfHx8MA%3D%3D"
                  name="Family vacations"
                />
                <Integration
                  icon="https://images.unsplash.com/photo-1606836591695-4d58a73eba1e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzaW5lc3MlMjBtZWV0aW5nfGVufDB8fDB8fHww"
                  name="Business meetings"
                />
                <Integration
                  icon="https://images.unsplash.com/photo-1758523671165-967ec4af0d76?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJlbG9jYXRpb258ZW58MHx8MHx8fDA%3D"
                  name="Relocation"
                />
                <Integration
                  icon="https://images.unsplash.com/photo-1735547876935-7be80eae1c88?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVsb2NhdGlvbnxlbnwwfHwwfHx8MA%3D%3D"
                  name="Other"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const Integration = ({ icon, name }: { icon: string; name: string }) => {
  return (
    <div className="hover:bg-muted space-y-4 rounded-lg border transition-colors aspect-video overflow-hidden relative">
      <img src={icon} alt={name} className="w-full h-full object-cover" />
      <h3 className="text-sm font-medium absolute top-1/2 -translate-y-1/2 left-0 right-0 p-4  text-white z-20 text-center bg-white/5  transition-all duration-300 hover:backdrop-blur-xs hover:text-black">
        {name}
      </h3>
    </div>
  );
};
