import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import AccessibilityTool from './components/AccessibilityTool'
import HomePage from './pages/HomePage'
import ProductOverviewPage from './pages/ProductOverviewPage'
import ProductCohiPage from './pages/ProductCohiPage'
import HowItWorksPage from './pages/HowItWorksPage'
import ExecutiveValuePage from './pages/ExecutiveValuePage'
import PricingPage from './pages/PricingPage'
import ResourcesPage from './pages/ResourcesPage'
import './App.css'

function Layout({ theme, onThemeToggle }) {
  return (
    <div className="app">
      <Header theme={theme} onThemeToggle={onThemeToggle} />
      <AccessibilityTool />
      <main className="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product" element={<ProductOverviewPage />} />
          <Route path="/product/overview" element={<ProductOverviewPage />} />
          <Route path="/product/cohi" element={<ProductCohiPage />} />
          <Route path="/product/how-it-works" element={<HowItWorksPage />} />
          <Route path="/executive-value" element={<ExecutiveValuePage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
        </Routes>
        <Footer />
      </main>
    </div>
  )
}

function App() {
  const [theme, setTheme] = useState(() => {
    // Default to 'light' theme as requested
    if (typeof window === 'undefined') return 'light'
    // Optionally check preference, but prioritize light default if no explicit choice
    const saved = localStorage.getItem('theme')
    if (saved) return saved
    return 'light' 
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const handleThemeToggle = () => {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
  }

  return (
    <Layout
      theme={theme}
      onThemeToggle={handleThemeToggle}
    />
  )
}

export default App
