// import { createContext, useContext, useState } from "react";
// import { getPercentagesRequest } from "../services/percentages.service";

// const CourseContext = createContext();

// export const useCourse = () => {
//     const context = useContext(CourseContext)
//     if(!context){
//         throw new Error('Fuera del contexto Course')
//     }
//     return context;

// } 

// export const CourseProvider = ({children}) => {
//     const [ selectedCourse, setSelectedCourse ] = useState(null)
//     const [error, setError] = useState(null)

//     const getPercentages = async(course) => {
//         try {
//             const resp = await getPercentagesRequest(course)
//         }
//         catch (error) {
//             setError(error.response.data.error)
//         }

//     }

//     return <CourseContext.Provider value={{
//         getPercentages,
//         selectedCourse,
//         setSelectedCourse,
//         error
//     }}>
//         {children}
//     </CourseContext.Provider>
// }