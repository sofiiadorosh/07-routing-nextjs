import axios from 'axios';
import type { Note, NewNote } from '@/types/note';

interface FetchNotesParams {
  search: string;
  page: number;
}

interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}

const NOTEHUB = axios.create({
  baseURL: 'https://notehub-public.goit.study/api',
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`,
  },
});

export async function fetchNotes({
  search,
  page,
}: FetchNotesParams): Promise<FetchNotesResponse> {
  const { data } = await NOTEHUB.get<FetchNotesResponse>('/notes', {
    params: { search, page, perPage: 12 },
  });
  return data;
}

export async function fetchNoteById(id: string): Promise<Note> {
  const { data } = await NOTEHUB.get<Note>(`/notes/${id}`);
  return data;
}

export async function createNote(note: NewNote): Promise<Note> {
  const { data } = await NOTEHUB.post<Note>('/notes', note);
  return data;
}

export async function deleteNote(id: string): Promise<Note> {
  const { data } = await NOTEHUB.delete<Note>(`/notes/${id}`);
  return data;
}
