import type { BlogFaq } from '@/data/blogs';

type Props = { faqs: BlogFaq[] };

export default function BlogFaqsSection({ faqs }: Props) {
  if (!faqs.length) return null;

  return (
    <section className="mt-12 pt-10 border-t border-border" aria-labelledby="blog-faqs-heading">
      <h2 id="blog-faqs-heading" className="text-2xl md:text-3xl font-bold text-primary mb-6">
        FAQs
      </h2>
      <div className="space-y-8">
        {faqs.map((faq) => (
          <div key={faq.question}>
            <h3 className="text-xl font-semibold text-primary mb-2">{faq.question}</h3>
            <p className="text-foreground/80 leading-relaxed whitespace-pre-line">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
