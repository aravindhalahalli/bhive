import './App.css'

function App() {
  return (
    <div>
      <div className="text-primary-1">Primary 1 (Black)</div>
      <div className="text-primary-2">Primary 2 (Yellow)</div>
      <button className="rounded-lg border border-button-primary-stroke bg-button-primary-main px-4 py-2 font-medium text-text-main">
        Primary Button
      </button>
      <button className="rounded-lg border border-button-secondary-stroke bg-button-secondary-main px-4 py-2 font-medium text-text-secondary">
        Secondary Button
      </button>

      <p className="text-text-main">This is main text (#263238).</p>
      <p className="text-text-secondary">This is secondary text (#65624C).</p>
      <h1 className="text-h1 font-bold">Heading 1</h1>
      <h2 className="text-h2 font-semibold">Heading 2</h2>
      <h3 className="text-h3 font-medium">Heading 3</h3>
      <h4 className="text-h4 font-medium">Heading 4</h4>
      <h5 className="text-h5 font-normal">Heading 5</h5>
      <h6 className="text-h6 font-normal">Heading 6</h6>
    </div>
  )
}

export default App
