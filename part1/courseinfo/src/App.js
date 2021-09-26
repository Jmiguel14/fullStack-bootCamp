const Head = ({ course }) => {
  return <h1>{course.name}</h1>;
};

const Part1 = ({part1}) => {
  return <p > {part1.name} {part1.exercises}</p>
}
const Part2 = ({part2}) => {
  return <p> {part2.name} {part2.exercises} </p>
}
const Part3 = ({part3}) => {
  return <p> {part3.name} {part3.exercises} </p>
}

const Content = ({
  parts
}) => {
  return (
    <>
      <Part1 part1={parts[0]} />
      <Part2 part2={parts[1]} />
      <Part3 part3={parts[2]} />
    </>
  );
};

const Total = ({ parts }) => {
  return <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>;
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
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
  }

  return (
    <div>
      <Head course={course} />
      <Content
        parts={course.parts}
      />
      <Total
        parts={course.parts}
      />
    </div>
  );
};

export default App;
