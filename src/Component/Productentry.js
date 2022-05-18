import React, { useState } from 'react'
import Navbar from './Navbar'

const Productentry = () => {
    
    var [pname,setProduct]=useState("")
    var [pdes,setDes]=useState("")
    var [Price,setPrice]=useState("")
    const changeData=()=>{
        const data={"pname":pname,"descripton":pdes,"price":Price}
        console.log(data)
    }
  return (
    <div>
        <Navbar/>
        <div class="container">
    <div class="row">
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div class="row g-2">
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" class="form-label">Product Name"</label>
                    <input onChange={(a)=>{setProduct(a.target.value)}} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" class="form-label">Product Description</label>
                    <input onChange={(a)=>{setDes(a.target.value)}} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" class="form-label">Product Price</label>
                    <input onChange={(a)=>{setPrice(a.target.value)}} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={changeData} class="btn btn-success">ADD</button>
                </div>
            </div>
        </div>
    </div>
</div></div>
  )
}

export default Productentry