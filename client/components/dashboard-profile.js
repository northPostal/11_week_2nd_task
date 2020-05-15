import React from 'react'
import { Route } from 'react-router-dom'  

const Dashboard = () => {
  return (
    <div>
      <div id="title"> Main </div>
      <Link to="/dashboard/profile/46a02278-f502-4416-a401-707cfef5cc86"> Go To Profile </Link>
      <Link to="/dashboard/main"> Go To Root </Link>
        </div>
  )
}

Dummy.propTypes = {}

export default DashboarProfile

/*Внутри должно быть четыре элемента

ссылка(реакт) с навигацией /dashboard и текстом "Go To Root"
ссылка(реакт) с навигацией /dashboard/main и текстом "Go To Main"
div с id="title" и текстом Profile
div c id="username" и текстом, которые берется из параметра роута(см лекцию)*/