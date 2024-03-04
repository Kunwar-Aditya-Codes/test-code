import { Ollama } from '@langchain/community/llms/ollama';
import { NextRequest } from 'next/server';

interface ImageData {
  imageData: string;
}

export const POST = async (req: NextRequest) => {
  const data: ImageData = await req.json();

  console.log(typeof data.imageData);

  // const ollama = new Ollama({
  //   baseUrl: 'http://localhost:11434',
  //   model: 'orca-mini:latest',
  // });

  // const stream = await ollama.stream(`Which country has the highest GDP?`);

  // const chunks = [];
  // for await (const chunk of stream) {
  //   chunks.push(chunk);
  // }

  // const answer = chunks.join('');

  return new Response('answer');
};
