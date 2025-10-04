import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AuthProvider } from './context/AuthContext.tsx'
import { GoogleOAuthProvider } from '@react-oauth/google';


const queryClient = new QueryClient()



createRoot(document.getElementById('root')!).render(

  <BrowserRouter>

    <QueryClientProvider client={queryClient}>

      <GoogleOAuthProvider clientId='206544673218-7avdo6l8gerui1joblm0sqobme28l4a3.apps.googleusercontent.com' >

        <AuthProvider>

          <App />

        </AuthProvider>

      </GoogleOAuthProvider>

    </QueryClientProvider>

  </BrowserRouter >

)
