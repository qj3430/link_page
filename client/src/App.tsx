import { useState, useEffect } from 'react'
import { LinkItem, LinkComponent } from './LinkComponent'
import './App.css'

function App() {
  const [links, setLinks] = useState<LinkItem[]>([])
  useEffect(() => {
    const linksList = [
      { "des": "Instagram", "url": "https://www.instagram.com/barboys0727" },
      { "des": "Youtube", "url": "https://www.youtube.com/channel/UCwlIIPcAD-zcqEbJQWi_qqw" },
    ]
    setLinks(linksList)
  }, [])

  return (
    <>
      <div>
        <img />
        <h2>@barboys</h2>
        <div className="LinkList">
          {links.map((item, index) => (
            <LinkComponent key={index} des={item.des} url={item.url} />
          ))}
        </div>
        <button>Help Me Share Please~</button>
      </div>
    </>
  )
}

export default App
