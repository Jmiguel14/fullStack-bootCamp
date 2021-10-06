const Head = ({ course }) => <h1>{course.name}</h1>;

const Part = ({ part }) => {
  return (
    <p>
      {" "}
      {part.name} {part.exercises}
    </p>
  );
};

const Total = ({ parts }) => {
  const total = parts.reduce((sum, el) => sum + el.exercises, 0);
  return <h4>Total of {total} exercises</h4>;
};

const Content = ({ course }) => {
  return (
    <>
      <Part part={course.parts[0]} />
      <Part part={course.parts[1]} />
      <Part part={course.parts[2]} />
      <Part part={course.parts[3]} />
    </>
  );
};

const Course = ({ course }) => {
  return (
    <div>
      <Head course={course} />
      <Content course={course} />
      <Total parts={course.parts} />
    </div>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
      {
        name: "Redux",
        exercises: 11,
      },
    ],
  };

  return <Course course={course} />;
};

export default App;
