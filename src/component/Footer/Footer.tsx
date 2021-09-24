import React, { FC } from 'react'
import './Footer.scss'

<<<<<<< HEAD
interface Props {}

=======
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Import Component
import { ReactComponent as GitHub } from '../../utils/img/github.svg'
import { ReactComponent as Vk } from '../../utils/img/vk.svg'
import { ReactComponent as Discord } from '../../utils/img/discord.svg'

// Interface
interface Props {}

// Component
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
>>>>>>> 7a268f0b98919707a0bb59631e0343e18c2c5da7
const Footer: FC<Props> = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-item">
          <div className="footer-item__logo">© 2021 Iatu-Mind, Inc.</div>
        </div>
        <div className="footer-item">
<<<<<<< HEAD
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
=======
          <a href="https://discord.gg/ewWZ9ZgVgX" className="footer-item__etc link">
            <Discord className="footer-item__ico" />
          </a>
          <a href="https://vk.com/public145541417" className="footer-item__etc link">
            <Vk className="footer-item__ico" />
          </a>
          <a href="https://github.com/Evvvai/iatu-mind-frontend" className="footer-item__etc link">
            <GitHub className="footer-item__ico" />
>>>>>>> 7a268f0b98919707a0bb59631e0343e18c2c5da7
          </a>
        </div>
      </div>
    </footer>
  )
}
export default Footer
