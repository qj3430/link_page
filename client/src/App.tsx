import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

interface Link {
  des: string,
  url: string
}

function App() {
  const [links, setLinks] = useState<Link[]>([])
  const linksList = [
    { "des": "Instagram", "url": "https://www.instagram.com/barboys0727" },
    { "des": "Youtube", "url": "https://www.youtube.com/channel/UCwlIIPcAD-zcqEbJQWi_qqw" },
  ]
  setLinks(linksList)

  return (
    <>
      <div>
        <img />
        <h2>@barboys</h2>
        {links.map((item) => (
          <Link des={item.des} url={item.url} />
        ))}
        <button>Help Me Share Please~</button>
      </div>
    </>
  )
}

export default App
