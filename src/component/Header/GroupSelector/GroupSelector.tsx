import './GroupSelector.scss'
import React, { FC, useState } from 'react'

import cn from 'classnames'

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Import Component

// Custom hooks
import { useApplication } from '../../../hook/useApplication'
import { Group } from '../../../types'

// Interface
interface Props {}

// Component
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const GroupSelector: FC<Props> = (props) => {
  const { isGroupSelectorOpen, groups, groupNow, changeGroup, openGroupSelector, closeGroupSelector } = useApplication()

  const handleClickMenu = () => {
    isGroupSelectorOpen ? closeGroupSelector() : openGroupSelector()
  }

  const handleClickGroup = (group: Group) => {
    changeGroup(group)
    closeGroupSelector()
  }

  const uniqueGroups = () => {
    let arr: any[] = []
    groups.forEach((x: any) => {
      const g = x.name?.split('-')
      if (arr.find((x) => x === g[0]) === undefined && g[0] !== 'Неизвестая группа') arr.push(g[0])
    })
    return arr
  }

  const getGroups = (groupName: string) => {
    return groups.filter((x: any) => {
      const g = x.name?.split('-')
      return g[0] === groupName
    })
  }

  return (
    <>
      <div className={cn('group-selector', { active: isGroupSelectorOpen })} onClick={handleClickMenu}>
        <span>{groupNow.name}</span>
      </div>

      <div className={cn('group-selector-background', { active: isGroupSelectorOpen })}>
        <div className="group-selector-menu">
          {uniqueGroups().map((x, key) => {
            return (
              <div key={key} className="group-selector-menu__content">
                <span>{x}</span>
                <ul>
                  {getGroups(x).map((y) => {
                    return <li onClick={(e) => handleClickGroup(y)}>{y.name}</li>
                  })}
                </ul>
              </div>
            )
          })}
        </div>
      </div>

      <div
        onClick={handleClickMenu}
        className={cn('group-selector-background-blur', { active: isGroupSelectorOpen })}
      />
    </>
  )
}

export default GroupSelector

const groups = [
  {
    id: 1,
    name: 'АистБд-11',
  },
  {
    id: 2,
    name: 'ппп-21',
  },
  {
    id: 3,
    name: 'ыфва-22',
  },
  {
    id: 4,
    name: 'АистБд-31',
  },
]
