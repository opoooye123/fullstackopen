/* BELOW  CODE IS BEFORE REFACTORING */

/* const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamental of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return(
    <div>
      <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>

      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}
export default App */


/* AFTER REFACTORING */
const Header = (prop) => {
   const course = 'Half Stack application development'
   return<>
     <h1>{course}</h1>
   </>
}

const Content = (prop) => {
  const content = [
    {part1:  'Fundamental of React',exercises1: 10},
    {part2: 'Using props to pass data', exercises2: 7},
    {part3: 'State of a componenet', exercises3: 14}
  ]
  return <>
    <p>{content[0].part1} {content[0].exercises1}</p>
    <p>{content[1].part2} {content[1].exercises2}</p>
    <p>{content[2].part3} {content[2].exercises3}</p>
  </>
}

const Total = (prop) => {
 return<>
   <p>Numbers of exercises {prop.sumOfExercise}</p>
 </>

}

const App = () => {
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14
  const sumOfExercise = exercises1 + exercises2 + exercises3
  
  return(
     <div>
      <Header  course/> 
      <Content />
      <Total  sumOfExercise={sumOfExercise}/>
     </div>
  )
}
export default App