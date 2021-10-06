const Head = ({ course }) => <h1>{course.name}</h1>;

const Part = ({ part }) => {
  return (
    <p>
      {" "}
      {part?.name} {part?.exercises}
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
      {course.parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </>
  );
};

export const Course = ({ course }) => {
    return (
      <div>
        <Head course={course} />
        <Content course={course} />
        <Total parts={course.parts} />
      </div>
    );
};