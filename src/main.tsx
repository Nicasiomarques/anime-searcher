import ReactDOM from 'react-dom/client'
import { QueryClientProvider, QueryClient } from 'react-query'
import React from 'react'

import App from './App.tsx'
import './global.style.css'
import { AnimeProvider } from './hooks/use-animes'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AnimeProvider>
        <App />
      </AnimeProvider>
    </QueryClientProvider>
  </React.StrictMode>
)
