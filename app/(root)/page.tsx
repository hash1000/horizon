
import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
  const loggedIn={firstName:"hashir",lastName:"Mehmood",email:'hashirmughal1000@gmail.com'}
  return (
    <section className='home'>
      <div className='home-content'>
       <header className='home-header'>
        <HeaderBox
        type="greeting"
        title="Welcome"
        user={loggedIn?.firstName || "Guests"}
        subtext="Access and manage your account and transaction efficiently"
        />
        <TotalBalanceBox
        accounts={[]}
        totalBanks={1}
        totalCurrentBalance={1250.35}
        />
       </header>
       Recent Transaction
      </div>
      <RightSidebar user={loggedIn} transactions={[]} banks={[{currentBalance:1250.3},{currentBalance:1235.3}]}/> 
    </section>
  )
}

export default Home
