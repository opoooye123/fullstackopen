const Header = (prop) => {
   return<>
     <h1>{prop.course}</h1>
   </>
}

const Content = (prop) => {
  console.log(prop)
  return <>
   <p>{prop.parts[0].name}: {prop.parts[0].exercises}</p>
   <p>{prop.parts[1].name}: {prop.parts[1].exercises}</p>
   <p>{prop.parts[2].name}: {prop.parts[2].exercises}</p>
  </>
}

const Total = (prop) => {
 return<>
   <p>Number of exercises: {prop.sumOfExercise}</p>
 </>

}

const App = () => {

  const course = 'Half Stack application development'

  const parts = [{
    name: 'Fundamental of React',
    exercises: 10
  },

  {
    name: 'Using props to pass data',
    exercises: 7
  },

   {
    name: 'State of a component',
    exercises: 14
  }
]

  const sumOfExercise = parts[0].exercises + parts[1].exercises +  parts[2].exercises
  return(
     <div>
       < Header course={course}/>
       <Content parts={parts}/>
       <Total sumOfExercise={sumOfExercise}/>
     </div>
  )
}
export default App