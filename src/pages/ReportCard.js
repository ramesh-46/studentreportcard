import React from 'react';
import './ReportCard.css'; // New CSS file for styling

const ReportCard = () => {
    const studentData = {
        name: "John Doe",
        age: 16,
        fatherName: "Richard Doe",
        class: "10th Grade",
        profilePic: "https://www.shutterstock.com/image-photo/young-smiling-indian-boy-student-600nw-2421369589.jpg",
        grades: [
            { subject: "Math", grade: "A+" },
            { subject: "English", grade: "A" },
            { subject: "Science", grade: "B+" },
            // Add more subjects as needed
        ],
        achievements: ["🏆 Math Olympiad Winner", "🔬 Science Fair Participant"],
    };

    return (
        <div className="report-card-container">
            <div className="profile-section">
                <img src={studentData.profilePic} alt="Profile" className="profile-pic" />
                <div className="details-section">
                    <h2 className="heading">👤 Student Details</h2>
                    <p>Name: {studentData.name}</p>
                    <p>Age: {studentData.age}</p>
                    <p>Father's Name: {studentData.fatherName}</p>
                    <p>Class: {studentData.class}</p>
                </div>
            </div>

            <div className="grades-section">
                <h2 className="heading">📊 Grades</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Subject</th>
                            <th>Grade</th>
                        </tr>
                    </thead>
                    <tbody>
                        {studentData.grades.map((grade, index) => (
                            <tr key={index} className={`row-color-${index % 6}`}>
                                <td>{grade.subject}</td>
                                <td>{grade.grade}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="achievements-section">
                <h2 className="heading">🎖 Achievements</h2>
                <ul>
                    {studentData.achievements.map((achievement, index) => (
                        <li key={index}>{achievement}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};




const BackButton = ({ navigate }) => (
    <button className="back-button" onClick={() => navigate(-1)}>
        &larr; Back
    </button>
);

export default ReportCard;
