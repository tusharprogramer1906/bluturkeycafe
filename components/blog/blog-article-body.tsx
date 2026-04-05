import type { ComponentType } from 'react';
import BestCafesFriendsHangoutGk1 from '@/components/blog/articles/best-cafes-friends-hangout-gk1';
import BirthdayPartyIdeas from '@/components/blog/articles/birthday-party-ideas';
import CoffeeBrewingMethods from '@/components/blog/articles/coffee-brewing-methods';
import PerfectDateCafe from '@/components/blog/articles/perfect-date-cafe';
import SpecialtyCoffeeGuide from '@/components/blog/articles/specialty-coffee-guide';

const bySlug: Record<string, ComponentType> = {
  'best-cafes-friends-hangout-gk1': BestCafesFriendsHangoutGk1,
  'birthday-party-ideas': BirthdayPartyIdeas,
  'coffee-brewing-methods': CoffeeBrewingMethods,
  'perfect-date-cafe': PerfectDateCafe,
  'specialty-coffee-guide': SpecialtyCoffeeGuide,
};

export default function BlogArticleBody({ slug }: { slug: string }) {
  const C = bySlug[slug];
  if (!C) return null;
  return <C />;
}
