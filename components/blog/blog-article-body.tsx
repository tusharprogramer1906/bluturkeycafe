import type { ComponentType } from 'react';
import EveningCafesAmbienceSouthDelhi from '@/components/blog/articles/evening-cafes-ambience-south-delhi';
import BestCoffeeShopsWorkNearNehruPlace from '@/components/blog/articles/best-coffee-shops-work-near-nehru-place';
import BestCafesFriendsHangoutGk1 from '@/components/blog/articles/best-cafes-friends-hangout-gk1';
import BirthdayPartyIdeas from '@/components/blog/articles/birthday-party-ideas';
import CoffeeBrewingMethods from '@/components/blog/articles/coffee-brewing-methods';
import PerfectDateCafe from '@/components/blog/articles/perfect-date-cafe';
import SpecialtyCoffeeGuide from '@/components/blog/articles/specialty-coffee-guide';
import TopCafesSouthDelhi2026 from '@/components/blog/articles/top-cafes-south-delhi-2026';

const bySlug: Record<string, ComponentType> = {
  'evening-cafes-ambience-south-delhi': EveningCafesAmbienceSouthDelhi,
  'best-coffee-shops-work-near-nehru-place': BestCoffeeShopsWorkNearNehruPlace,
  'best-cafes-friends-hangout-gk1': BestCafesFriendsHangoutGk1,
  'birthday-party-ideas': BirthdayPartyIdeas,
  'coffee-brewing-methods': CoffeeBrewingMethods,
  'perfect-date-cafe': PerfectDateCafe,
  'specialty-coffee-guide': SpecialtyCoffeeGuide,
  'top-cafes-south-delhi-2026': TopCafesSouthDelhi2026,
};

export default function BlogArticleBody({ slug }: { slug: string }) {
  const C = bySlug[slug];
  if (!C) return null;
  return <C />;
}
