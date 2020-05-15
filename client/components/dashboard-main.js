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

export default DashboardMain

// Внутри должно быть три элемента
// // div с id="title" и текстом Main
// ссылка(реакт) с навигацией /dashboard/profile/46a02278-f502-4416-a401-707cfef5cc86 и текстом "Go To Profile"
// ссылка(реакт) с навигацией /dashboard и текстом "Go To Root"