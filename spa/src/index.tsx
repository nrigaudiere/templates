import { createRoot } from 'react-dom/client'
import { App } from './App'
import { AppHelper } from './helpers/App.helper'

const root = createRoot(document.getElementById(AppHelper.APP_ROOT))
root.render(<App />)
