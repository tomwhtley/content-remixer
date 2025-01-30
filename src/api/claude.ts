import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  apiKey: import.meta.env.VITE_CLAUDE_API_KEY || '',
});

export async function remixContent(content: string): Promise<string> {
  try {
    const message = await anthropic.messages.create({
      model: 'claude-3-opus-20240229',
      messages: [{
        role: 'user',
        content: [{ 
          type: 'text',
          text: `Please remix the following content to make it more engaging while keeping the same meaning: ${content}`
        }]
      }],
      max_tokens: 1000,
      system: "You are a creative content remixer. Your goal is to make content more engaging while preserving its core meaning."
    });

    // Get the first content block that's of type 'text'
    const textContent = message.content.find(c => c.type === 'text');
    return textContent?.text || 'No response generated';
  } catch (error) {
    console.error('Error remixing content:', error);
    throw new Error('Failed to remix content');
  }
} 