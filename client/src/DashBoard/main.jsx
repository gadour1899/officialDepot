import React ,{useEffect,useState} from 'react'
import Prof from '..//DashBoard/FournisseurProfile/Prof.jsx'
import ProductList from './ProductList/ProductList.jsx';
import axios from 'axios'
import { useNavigate } from 'react-router';

const main=()=> {

    const [Fournisseur,setFournisseur] = useState([])   
    const [four,setfour]=useState('')
    const navigate = useNavigate();



const config = {
    headers:{
      jwt: document.cookie.slice(4)
    }
  };
useEffect(()=>{
    axios.get("http://localhost:3000/api/fournisseur/tokenf",config)
      .then(res=>{
              setfour(res.data)
              console.log("current fournisseur",res.data)
          })
      .catch(err=>{
              console.log(err)
          })
},[])




useEffect(() => {
    axios.get('/api/fournisseur/getf')
    .then(result=>{
        setFournisseur(result.data)
        console.log(result.data) 
;})
    .catch(err=>console.log(err))
  }, []);


  return (
<div>
<div>
 <h2> Hi {four.CompanyName} </h2>
</div>

  <div className='DACH'>
   
  
      <h3 onClick={()=>navigate('/prof',{
        state:{
          data:four
        }
      })}>Profile</h3>
      <h3 onClick={()=>navigate('/productList',{
        state:{data:four}
      })}>Products List</h3>
 
    

  </div>

</div>
)
}

export default main