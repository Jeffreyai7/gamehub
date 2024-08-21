import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from "./theme.ts"
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './services/routes.tsx'

const queryclient = new QueryClient;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme} >
    <QueryClientProvider client={queryclient} >
      <ColorModeScript  initialColorMode={theme.config.initialColorMode} />
      <RouterProvider router={router} />
    <ReactQueryDevtools/>
    </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
