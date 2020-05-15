import React from 'react'
import { Route } from 'react-router-dom'  
import Header from './header'
import Dashboard from './dashboard'
import DashboardMain from './dashboard-main'
import DashboardProfile from './dashboard-profile'

const Head = (props) => (
  <Helmet>
    <title>SkillCrucial Boilerplate - {props.title}</title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#FF0000" />
  </Helmet>
)

Head.propTypes = {
  title: PropTypes.string
}

Head.defaultProps = {
  title: 'skillcrucial.com'
}

export default Head
