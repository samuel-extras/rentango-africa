import { Star, BadgeCheck, Users, CalendarCheck } from "lucide-react";

const STATS = [
  {
    icon: CalendarCheck,
    value: "100%",
    label: "Verified listings",
    description: "Every apartment is inspected before going live.",
  },
  {
    icon: Users,
    value: "500+",
    label: "Serious guests",
    description: "Pre-screened guests with verified identities.",
  },
  {
    icon: BadgeCheck,
    value: "48hrs",
    label: "Fast onboarding",
    description: "From assessment to live listing in under 48 hours.",
  },
  {
    icon: Star,
    value: "4.9★",
    label: "Average rating",
    description: "Hosts rate their Rentango experience top-tier.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "I had no idea my apartment could earn this much. Rentango listed it in 2 days and I had bookings within the first week.",
    name: "Ifunanya Ikenna",
    role: "Host in Lekki",
    avatar: "https://avatars.githubusercontent.com/u/102558960?v=4",
  },
  {
    quote:
      "The team handled everything — photos, pricing, guests. I just receive my payment every month.",
    name: "Aderoju Titilayo",
    role: "Host in Victoria Island",
    avatar: "https://avatars.githubusercontent.com/u/47919550?v=4",
  },
  {
    quote:
      "I was skeptical at first but the clarity call convinced me. Now my apartment earns more than my salary.",
    name: "Adewale Caleb",
    role: "Host in Abuja",
    avatar: "https://avatars.githubusercontent.com/u/31113941?v=4",
  },
];

export function SocialProof() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block rounded-full bg-[#090857]/10 px-4 py-1.5 text-sm font-semibold text-[#090857] mb-4">
            Trusted by hosts across Nigeria
          </span>
          <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">
            Real results, real hosts
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Rentango is built for people who want real bookings — not empty promises.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 mb-16">
          {STATS.map(({ icon: Icon, value, label, description }) => (
            <div
              key={label}
              className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm"
            >
              <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-xl bg-indigo-50">
                <Icon className="size-6 text-[#090857]" />
              </div>
              <p className="text-3xl font-bold text-[#090857]">{value}</p>
              <p className="mt-1 text-sm font-semibold text-gray-900">{label}</p>
              <p className="mt-1 text-xs text-gray-400">{description}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm flex flex-col gap-4"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-gray-700 text-sm leading-relaxed flex-1">
                "{t.quote}"
              </p>

              <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
                <img
                  className="size-9 rounded-full object-cover ring-2 ring-indigo-100"
                  src={t.avatar}
                  alt={t.name}
                />
                <div>
                  <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
