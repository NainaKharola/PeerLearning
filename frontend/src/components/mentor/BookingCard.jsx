import Button from '../ui/Button.jsx';

export default function BookingCard({ title, slots = [] }) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="font-semibold text-slate-950">{title}</h3>
      <div className="mt-4 grid gap-2 sm:grid-cols-2">
        {slots.map((slot) => (
          <Button key={slot} variant="secondary">
            {slot}
          </Button>
        ))}
      </div>
    </article>
  );
}
