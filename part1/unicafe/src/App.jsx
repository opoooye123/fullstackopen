import { useState } from 'react'


const StatisticsLine = ({text,value}) => {
 return(
<table>
  <tbody>
    <tr>
      <td>{text}: {value}</td>
    </tr>
  </tbody>
</table>
  )

}


const App = () =>  {
  const [good,setGood] = useState(0)
  const [neutral,setNeutral] = useState(0)
  const [bad,setBad] = useState(0)
  
  const handleClickGood = () => {
    
    const updatedClick = good + 1;
    setGood(updatedClick)
  }

  const handleClickNeutral = () => {
    
    const updatedClick = neutral + 1;
    setNeutral(updatedClick)
  }

  const handleClickBad = () => {
    
    const updatedClick = bad + 1;
    setBad(updatedClick)
  }

  const totalFeed = good + neutral + bad
  const averageStats = totalFeed === 0 ? 0 : (good * 1 + bad * -1) /  totalFeed 
  const positiveFeed = totalFeed === 0 ? 0 : (good / totalFeed) * 100

  return (
    <>
     <h1>give feedback</h1>

     <button onClick={handleClickGood}>good</button>
     <button onClick={handleClickNeutral}>neutral</button>
     <button onClick={handleClickBad}>bad</button>
     <h2>Statistics</h2>
     <StatisticsLine text={'good'} value={good}/>
     <StatisticsLine text={'bad'} value={bad} />
     <StatisticsLine text={'neutral'} value={neutral}/>
     <StatisticsLine  text={'totalfeed'} value={totalFeed}/>
     <StatisticsLine text={'averagefeed'} value={averageStats}/>
     <StatisticsLine text={'positve'} value={positiveFeed}/>
    </>
  )
}

export default App
