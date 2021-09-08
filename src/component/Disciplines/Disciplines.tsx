import './Disciplines.scss'
import React, { FC } from 'react'
import Back from '../../utils/img/here.png'
import Gray from '../../utils/img/gray_blur.png'

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Import Component

// Interface
interface Props {}

// Component
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const Disciplines: FC<Props> = (props) => {
  return (
    <section className="disciplines unselectable">
      <div
        className="disciplines-img"
        style={{
          backgroundImage: `url(${Gray}), url(${Back})`,
        }}
      ></div>
      <div className="disciplines-period">
        <div className="disciplines-period__content">
          <div className="disciplines-period__item">2018-1</div>
          <div className="disciplines-period__item hr">
            <div></div>
          </div>
          <div className="disciplines-period__item">2018-2</div>
          <div className="disciplines-period__item hr">
            <div></div>
          </div>
          <div className="disciplines-period__item active">2019-1</div>
          <div className="disciplines-period__item hr">
            <div></div>
          </div>
          <div className="disciplines-period__item">2019-2</div>
        </div>
      </div>
      <div className="disciplines-list">
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
      </div>
    </section>
  )
}

export default Disciplines

// style={{

// url("/assets/artist-profile-masthead-gradient.png"),
// url("https://cdna.artstation.com/p/users/covers/003/481/052/default/a3cc8f730fef979264bddb5e44e657a0.jpg?1630585545")