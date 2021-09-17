import './ScheduleTicket.scss'
import React, { FC, useState } from 'react'
import cn from 'classnames'

// Import components
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Custom hook

// Svg
import { ReactComponent as Close } from '../../../utils/img/Laba.svg'

// Utils

// Interface
interface Props {
  ticket?: any
  setShow: any
}

// Component
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const ScheduleTicket: FC<Props> = (props) => {
  return (
    <div
      onClick={(e: any) => props.setShow(false)}
      className={cn('l-ticket unselectable', { active: props.setShow.isActive })}
    >
      <section className="ticket-main">
        <div className="ticket-header">
          <div className="ticket-header__title">Примечание к расписанию</div>
          <div onClick={(e: any) => props.setShow(false)} className="ticket-header__close">
            <Close />
          </div>
        </div>
        <hr className="ticket-hr" />
        <div className="ticket-text">
          <p>
            Добро пожаловать! Здесь уважают новичков и чтят тех, кто пали. Здесь нет волков, но тут живут по закону
            стаи. Не удивляйся, если вдруг твои нервы сдали. В моём квартале! (В его квартале!) Здесь уважают новичков и
            чтят тех, кто пали. Здесь нет волков, но тут живут по закону стаи. Не удивляйся, если вдруг твои нервы
            сдали. Здесь не бывает плохих дней, но всё хреново. Здесь, не успев протрезветь, уже бухают снова. И голос
            медных труб тут давным-давно привычен. Будь осторожен, чтоб не стать чьей-нибудь добычей. В этом мире имена
            не имеют ролей. В этом мире пешки играют за королей. Здесь тяжело среди нулей найти единицу. И куда проще
            оступиться. В моём квартале героям не нужны медали, Здесь характер закаляется прочнее стали. О здешней жизни
            в журнале ты не найдёшь статей. Тут плюют на моду, не пытаясь стать под стать ей. Это то место, где берёт
            своё начало урбан, Где стоит зазеваться, и считай, что уже убран. Где Бог не слышит ни молитвы и ни жалобы.
          </p>
        </div>
      </section>
    </div>
  )
}

export default ScheduleTicket
