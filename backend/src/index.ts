import { Hono } from 'hono';
import { cors } from 'hono/cors';

enum fileType{
  MARKDOWN = "markdown",
  PDF = "pdf",
  JPG = "jpg",
  PNG = "png",
  PLAIN_TEXT = "plain_text"
}

interface Attachment{
  id: number,
  fileName: string,
  fileSize: number,
  filePath: string,
  fileType: fileType
}

interface Note{
  id: number,
  name: string,
  crn: string,
  author: string,
  description?: string,
  attachments?: Attachment,
  date_updated: string,
  date_created: string,
}

const app = new Hono();

app.use('*', cors({
  origin: ['http://localhost:3000'],
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

app.get('/', (c) => c.text('Online'));

app.get('/api/notes', (c) => c.text('Api Online'))

