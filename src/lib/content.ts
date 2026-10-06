import { getCollection } from 'astro:content';

const published = <T extends { data: { draft?: boolean } }>(e: T) => !e.data.draft;

export async function getExperiences() {
  return (await getCollection('experiences', published)).sort((a, b) => a.data.order - b.data.order);
}

export async function getEvents() {
  const all = await getCollection('events', published);
  const today = new Date();
  today.setUTCHours(0, 0, 0, 0);
  const upcoming = all
    .filter((e) => e.data.status !== 'finalizado' && e.data.date >= today)
    .sort((a, b) => a.data.date.getTime() - b.data.date.getTime());
  const past = all
    .filter((e) => e.data.status === 'finalizado' || e.data.date < today)
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
  return { upcoming, past };
}

export async function getArticles() {
  return (await getCollection('articles', published)).sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export async function getLaws() {
  return (await getCollection('laws')).sort((a, b) => a.data.order - b.data.order);
}

export async function getBills() {
  return (await getCollection('bills')).sort((a, b) => a.data.order - b.data.order);
}

export async function getTeam() {
  return (await getCollection('team', published)).sort((a, b) => a.data.order - b.data.order);
}

export async function getTestimonials() {
  return await getCollection('testimonials', published);
}

export async function getFaqs() {
  return (await getCollection('faqs', published)).sort((a, b) => a.data.order - b.data.order);
}
