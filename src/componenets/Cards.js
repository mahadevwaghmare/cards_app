import react from 'react';
import Card from './Card';

function Cards({ courses }) {
    let allCourses = [];

    const getCourses = () => {
        Object.values(courses).forEach(
            (courseCategory) => courseCategory.forEach(
                (course) => allCourses.push(course)
            )
        )
        return allCourses;
    }

    return (
        <div>
            {
                !courses ? (<div>No Data Found</div>) : (
                    getCourses().map((course) => {
                        return <Card key={course.id} course={course} />;
                    })
                )
            }
        </div>
    );
}

export default Cards;