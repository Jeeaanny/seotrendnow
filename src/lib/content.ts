import { getCollection } from 'astro:content';
import { PRELAUNCH } from '../consts';

// Sample entries only show while PRELAUNCH is true. Drafts never show.
const visible = (d: { sample?: boolean; draft?: boolean }) => !d.draft && (PRELAUNCH || !d.sample);

export async function getPosts() {
  const all = await getCollection('posts', ({ data }) => visible(data));
  return all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getCaseStudies() {
  const all = await getCollection('caseStudies', ({ data }) => visible(data));
  return all.sort((a, b) => a.data.order - b.data.order);
}

export const slugify = (s: string) =>
  s.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export const fmtDate = (d: Date) =>
  d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' });

export const readMinutes = (text: string) => Math.max(1, Math.round(text.split(/\s+/).length / 220));
