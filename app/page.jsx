import Features from '@/components/Features';
import Hero from '@/components/Hero';
import VisualConcept from '@/components/VisualConcept';

export default function Home() {
  return (
    <div className="flex flex-col gap-0 bg-white dark:bg-dark-charcoal">
      <Hero />

      <section id="visual-concepts" className="bg-white dark:bg-dark-charcoal">
        <VisualConcept
          title="Variables"
          description="Think of a variable as a labeled box where you can store data. The box has a name (identifier), and inside it holds a value (data). You can always open the box to see what is inside, or replace the contents with something else."
          imageSrc="/visual-var.png"
        />
      </section>

      <Features />
    </div>
  );
}
