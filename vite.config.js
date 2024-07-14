import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const path = [
  "src",
  "components",
  "layout",
  "configs",
  "pages",
  "utils",
  "services",
  "styles",
  "router",
]

const filepath =path.reduce((acc,cur)=>({
  ...acc, [cur]: `/${cur === "src" ? cur : "src/" + cur}`
}),"")

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      ...filepath
    }
  }
})
