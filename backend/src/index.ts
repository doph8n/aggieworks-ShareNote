import { Hono } from 'hono';
import { cors } from 'hono/cors';

enum FileType{
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
  fileType: FileType
}

interface Note{
  id: number,
  name: string,
  crn: string,
  author: string,
  tags?: string[],
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

app.post('/api/notes'), async (c) => {
  const body = await c.req.parseBody()

  const name = body.name as string
  const crn = body.crn as string
  const author = body.crn as string
  const description = body.description as string || undefined
  let tags: string[] | undefined
  if (body.tags) {
    try {
      tags = JSON.parse(body.tags as string)
    } catch (error) {
      console.error('Error Tags:', error)
    }
  }
  const file = body.file
  let attachment: Attachment | undefined 
  if (file && typeof file !== 'string') {
    const fileName = file.fileName
    const fileSize = file.fileSize
    const fileExtension = fileName.split('.').pop?.toLowerCase() || ''
    let fileType: FileType
    switch (fileExtension) {
      case 'md': 
        fileType = FileType.MARKDOWN
        break
      case 'pdf': 
        fileType = FileType.PDF
        break
      case 'jpg':
      case 'jpeg':
        fileType = FileType.JPG
        break
      case 'png':
        fileType = FileType.PNG
        break
      default: 
    }
}

const note: Note = {
  id: Date.now(),
  name,
  crn,
  author,
  description,
  attachments: attachment,
  tags,
  date_created: new Date().toISOString(),
  date_updated: new Date().toISOString()
}
