import { useState } from 'react'
import { remixContent } from './services/api'

function App() {
  const [inputText, setInputText] = useState('')
  const [outputText, setOutputText] = useState('')

  const handleRemix = async () => {
    try {
      setOutputText('Remixing...')
      const remixedContent = await remixContent(inputText)
      setOutputText(remixedContent)
    } catch (error) {
      setOutputText('Error remixing content. Please try again.')
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Content Remixer</h1>
        
        <div className="space-y-6">
          <div>
            <label htmlFor="input" className="block text-sm font-medium text-gray-700 mb-2">
              Input Text
            </label>
            <textarea
              id="input"
              className="w-full h-40 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Paste your content here..."
            />
          </div>

          <button
            onClick={handleRemix}
            className="w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Remix Content
          </button>

          <div>
            <label htmlFor="output" className="block text-sm font-medium text-gray-700 mb-2">
              Remixed Output
            </label>
            <div
              id="output"
              className="w-full h-40 p-3 bg-white border border-gray-300 rounded-lg overflow-auto"
            >
              {outputText || 'Your remixed content will appear here...'}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
