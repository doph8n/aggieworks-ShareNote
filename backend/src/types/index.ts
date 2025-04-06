export enum NoteContentType {
  MARKDOWN = 'markdown',
  HTML = 'html',
  PLAIN_TEXT = 'plain_text'
}

export enum AttachmentType {
  PDF = 'pdf',
  IMAGE = 'image',
  OTHER = 'other'
}

export interface Attachment {
  id: number;
  note_id: number;
  file_name: string;
  file_path: string;
  file_size: number;
  file_type: AttachmentType;
  created_at: Date;
  updated_at: Date;
}

export interface Course {
  id: number;
  CRN: number;
  program: string;
  name: string;
  professor: string;
  type: string;
  description?: string;
}

export interface Note {
  id: number;
  title: string;
  CRN: number;
  author: string;
  description?: string;
  attachments?: Attachment[];
  created_at: Date;
  updated_at: Date;
}

export interface Tag {
  id: number;
  name: string;
}
