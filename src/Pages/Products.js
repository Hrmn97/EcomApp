import React, {useState,useEffect} from 'react'
import axios from "axios";
import { NavLink } from 'react-router-dom';


const Products = () => {

  const [loading,setLoading]= useState(false)
  const [data,setData] = useState([])
  const apiEndpoint = "https://dummyjson.com/products"
  const apiAdd = "https://dummyjson.com/products/add"
  const apiUpdate = "https://dummyjson.com/products/1"


  const[name,setName] = useState("")
    const[file,setFile] = useState("")
    const[price,setPrice] = useState("")
    const[description,setDescription] = useState("")
    const[rating,setRating]= useState("")

  

  useEffect(()=>{

    setLoading(true)

    axios.get(apiEndpoint)
    .then(response => {
      setData(response.data.products)
    }).catch(err => console.log(err)).finally(()=>setLoading(false))
  },[])

  async function addProduct(){
    const item = {
        'name': name,
        'file': file,
        'price': price,
        'description': description,
        'rating': rating,
    }
    await axios.post(apiAdd,item)
    setData([item,...data])
}

const handleUpdate = async data =>{

  const updateItem = {
          'title': name,
          'file': file,
          'price': price,
          'description': description,
          'rating': rating,
      } 
      const response = await fetch(apiUpdate, {
      method: 'PUT', 
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updateItem)
      })
      
  const parsedRes = await response.json()

  console.log(parsedRes)
    setData(data=>[parsedRes,...data])

}

function deleteProduct(id){
  axios.delete(`https://dummyjson.com/products/${id}`)
  setData(data.filter(p => p.id !== id))
}

  


  return(
    <div>
    <div className='text-center text-2xl underline underline-offset-1 mt-4'><h3>Latest Products</h3></div>
    <div>
    <div className="mt-4 text-center border-2 border-zinc-500">Make Entry to ADD OR UPDATE Products</div>
    <div className="flex flex-row mt-4 mb-4">
    <div><input type="text" className='block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='name' onChange={(e)=>setName(e.target.value)} /> <br /></div>
    <div><input type="file" className='block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='file' onChange={(e)=>setFile(e.target.files[0])} /> <br /></div>
    <div><input type="text" className='block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='price'onChange={(e)=>setPrice(e.target.value)} /> <br /></div>
    <div><input type="text" className='block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='rating' onChange={(e)=>setRating(e.target.value)} /> <br /></div>
    <div><input type="text" className='block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='description' onChange={(e)=>setDescription(e.target.value)} /> <br /></div>
    <div className='ml-2'><button className="border-purple-800 border-2 rounded-r-lg" onClick={addProduct}>Add</button></div>
    </div>
    </div>
  <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
    
    {loading && <div><h1>Loading......</h1></div>}

    {data.map((product)=>{
      return(
        <div className=''>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img src={product.thumbnail} alt={product.title} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{product.title}</div>
          <p className="text-gray-700 text-base">
           {product.description}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{`Price ${product.price}$`}</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{`Rating ${product.rating}`}</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{product.brand}</span>
        </div>
        <div>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><button onClick={handleUpdate}>Update</button></span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><button onClick={()=>deleteProduct(product.id)}>Delete</button></span>
        </div>
      </div>

      </div>
      )
      
    })}
  </div>
  </div>
  )
}

export default Products