const CLAUDE_API_ENDPOINT = 'https://api.anthropic.com/v1/messages'

export async function remixContent(content: string): Promise<string> {
  try {
    const response = await fetch(CLAUDE_API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': import.meta.env.VITE_CLAUDE_API_KEY || '',
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-3-opus-20240229',
        max_tokens: 1000,
        messages: [{
          role: 'user',
          content: `Please remix the following content to make it more engaging while keeping the same meaning: ${content}`
        }]
      })
    })

    if (!response.ok) {
      throw new Error('Failed to remix content')
    }

    const data = await response.json()
    return data.content[0].text
  } catch (error) {
    console.error('Error remixing content:', error)
    throw error
  }
} 