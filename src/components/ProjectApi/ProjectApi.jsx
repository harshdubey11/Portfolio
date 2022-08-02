import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../cards/cards";
import './ProjectApi.scss';
import {BsFillArrowLeftCircleFill} from 'react-icons/bs';
import { HashLink } from 'react-router-hash-link';
import Loading from "../loading/loading";
import FadeIn from "react-fade-in/lib/FadeIn";
function ProjectApi() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2500)
  }, [])


    const [repos,setRepos]=useState([]);
    useEffect(() => {
     async function getrepos(){
       const allRepos = await axios.get('https://api.github.com/users/harshdubey11/repos');
       //console.log(allRepos.data);
       setRepos(allRepos.data);
    
      }
    getrepos();
   
    }, [])
    console.log(repos);

if(loading===false)
{  return (
    <div className="project-api">
     <span className="back"><HashLink to="/portfolio/#projects" className="link"> <BsFillArrowLeftCircleFill/></HashLink></span>
     

    
        {
            repos.map(item =>{
                return <Card
                    name={item.name}
                    desc={item.description}
                    url={item.html_url}
                />
            })
        }
      
    </div>
  )}
  else
  {
    return <Loading/>
  }
}


export default ProjectApi