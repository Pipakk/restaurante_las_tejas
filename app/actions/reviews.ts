'use server';

import { supabase, hasSupabase } from '@/lib/supabase';
import { reviewSchema, type ReviewFormData } from '@/lib/reviewSchema';

export async function submitReview(data: ReviewFormData): Promise<{ success: boolean; error?: string }> {
  const parsed = reviewSchema.safeParse(data);
  if (!parsed.success) {
    return { success: false, error: parsed.error.errors.map((e) => e.message).join('. ') };
  }

  if (!hasSupabase || !supabase) {
    return { success: false, error: 'Modo demo: no hay base de datos configurada.' };
  }

  const { error } = await supabase.from('reviews').insert({
    name: parsed.data.name,
    rating: parsed.data.rating,
    comment: parsed.data.comment,
    approved: false,
  });

  if (error) {
    return { success: false, error: error.message };
  }
  return { success: true };
}

export async function getApprovedReviews(): Promise<
  { id: string; name: string; rating: number; comment: string; created_at: string }[]
> {
  if (!hasSupabase || !supabase) return [];

  const { data, error } = await supabase
    .from('reviews')
    .select('id, name, rating, comment, created_at')
    .eq('approved', true)
    .order('created_at', { ascending: false })
    .limit(20);

  if (error) return [];
  return (data ?? []).map((r) => ({
    id: r.id,
    name: r.name,
    rating: r.rating,
    comment: r.comment,
    created_at: r.created_at,
  }));
}
