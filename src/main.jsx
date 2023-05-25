import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google';
import './index.css'
<script src="https://apis.google.com/js/platform.js" async defer></script>

ReactDOM.createRoot(document.getElementById('root')).render(
  
  
  <GoogleOAuthProvider clientId="70494992512-e4v1a5ttgffk1b3lv6iaper21jjics5e.apps.googleusercontent.com">
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  </GoogleOAuthProvider>
)
