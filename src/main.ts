import { App } from './lib/App'
import './styles/index.css'

window.addEventListener('load', () => {
  const app = App.getInstance()
  app.run()
})
