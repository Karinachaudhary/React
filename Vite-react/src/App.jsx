import React from 'react'
// import Card from './components/Card'
// import {Bookmark} from 'lucide-react'
import Card from './components/Card'
import User from './components/User'

const App = () => {
 const jobOpenings = [
  {
    id: 1,
    logo: "https://cdn.simpleicons.org/google",
    company: "Google",
    jobTitle: "Frontend Developer",
    tag: "Full-time",
    salary: "$45/hour",
  },
  {
    id: 2,
    logo: "https://cdn.simpleicons.org/microsoft",
    company: "Microsoft",
    jobTitle: "Software Engineer",
    tag: "Full-time",
    salary: "$50/hour",
  },
  {
    id: 3,
    logo: "https://cdn.simpleicons.org/apple",
    company: "Apple",
    jobTitle: "iOS Developer",
    tag: "Full-time",
    salary: "$48/hour",
  },
  {
    id: 4,
    logo: "https://cdn.simpleicons.org/meta",
    company: "Meta",
    jobTitle: "React Developer",
    tag: "Full-time",
    salary: "$52/hour",
  },
  {
    id: 5,
    logo: "https://cdn.simpleicons.org/amazon",
    company: "Amazon",
    jobTitle: "Backend Developer",
    tag: "Full-time",
    salary: "$42/hour",
  },
  {
    id: 6,
    logo: "https://cdn.simpleicons.org/netflix",
    company: "Netflix",
    jobTitle: "UI/UX Designer",
    tag: "Part-time",
    salary: "$38/hour",
  },
  {
    id: 7,
    logo: "https://cdn.simpleicons.org/nvidia",
    company: "NVIDIA",
    jobTitle: "AI/ML Engineer",
    tag: "Full-time",
    salary: "$55/hour",
  },
  {
    id: 8,
    logo: "https://cdn.simpleicons.org/ibm",
    company: "IBM",
    jobTitle: "Cloud Engineer",
    tag: "Part-time",
    salary: "$40/hour",
  },
  {
    id: 9,
    logo: "https://cdn.simpleicons.org/adobe",
    company: "Adobe",
    jobTitle: "Product Designer",
    tag: "Full-time",
    salary: "$44/hour",
  },
  {
    id: 10,
    logo: "https://cdn.simpleicons.org/tesla",
    company: "Tesla",
    jobTitle: "Software Developer",
    tag: "Part-time",
    salary: "$35/hour",
  },
];
// console.log(jobOpenings)

  
  return (
<>

<div className="parent">

 {
jobOpenings.map(function(elem, idx){
 
  return <div key={idx}><Card company={elem.company} logo={elem.logo} job={elem.jobTitle} post={elem.tag} salary={elem.salary}/>
</div>
}

 )}
  

    </div>        
 


</>
  )
}

export default App
