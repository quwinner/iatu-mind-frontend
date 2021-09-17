import React, { FC } from 'react'
import './Footer.scss'

interface Props {}

const Footer: FC<Props> = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-item">
          <div className="footer-item__logo">© 2021 Iatu-Mind, Inc.</div>
        </div>
        <div className="footer-item">
          <a href="https://www.youtube.com/channel/UCu-39MYQr8I7smURAUeYchw" className="footer-item__etc link">
            -{/* <YouTube className="footer-item__ico" /> */}
          </a>
          <a href="https://vk.com/duelmight" className="footer-item__etc link">
            -{/* <Vk className="footer-item__ico" /> */}
          </a>
          <a href="https://github.com/Evvvai" className="footer-item__etc link">
            -{/* <Github className="footer-item__ico" /> */}
          </a>
          <a href="https://steamcommunity.com/id/evvvai/" className="footer-item__etc link">
            -{/* <Steam className="footer-item__ico" /> */}
          </a>
          <a href="https://discord.gg/nybZnuAsze" className="footer-item__etc link">
            -{/* <Discord className="footer-item__ico" /> */}
          </a>
        </div>
      </div>
    </footer>
  )
}
export default Footer
