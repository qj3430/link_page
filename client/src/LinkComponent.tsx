import './LinkComponent.css'

export interface LinkItem {
  des: string,
  url: string
}

export const LinkComponent: React.FC<LinkItem> = ({ des, url }) => {
  return (
    <div className="linkItem">
      <a href={url} target="_blank">{des}</a>
      <button>
        <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/copy.png" alt="copy" />
      </button>
    </div>
  )
}
