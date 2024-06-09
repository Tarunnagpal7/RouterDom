
import { useLoaderData } from "react-router-dom";


export default function Github(){
    const data = useLoaderData();
  return(
      <div className="m-4 overflow-x-hidden bg-slate-900  text-center text-white  ">
        Github Follwers : {data.followers}
        <img src={data.avatar_url} alt="profil pic" width={200}></img>
      </div>
  )
}