import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import '../assets/style/product.css';
import YouTube from 'react-youtube';
import { Link} from 'react-router-dom'

import 'firebase/compat/database';
import { useParams} from 'react-router-dom'

const Product = (db) => {
const {id, product} =  useParams();

const [productName, setProductName]=useState([])
const [imageChoise, setImageChoise]=useState({
  image:{display:''},
  plan:{display:'none'},
  colorImage:{background:'#4282e3'},
  colorPlan:{background:'white'}
})


useEffect(()=>{  
  db.db[id] !=undefined ? setProductName(db.db[id][product]):setProductName([])
},[db])

  return (
    <div className='Product'>  
      {
        <div className='product-container'>
          <h1>{product}</h1>
          <div className='product-item'>
          <div className='product-item-left'>
              {productName.image?
                        productName.image.picture?
                        <img style={imageChoise.image}  src={require('./../assets/img/product/'+productName.image.picture)}/>
                        :console.log()
              :console.log()} 
              {productName.image?
                        productName.image.plan?
                        <img style={imageChoise.plan} src={require('./../assets/img/product/'+productName.image.plan)}/>
                        :console.log()
              :console.log()} 
             <div className='product-item-button'>
                <span style={imageChoise.colorImage} onClick={()=>
                         setImageChoise({ 
                            image:{display:''},
                            plan:{display:'none'},
                            colorImage:{background:'#4282e3'},
                            colorPlan:{background:'white'}
                         })
                      }>Фото</span>
                <span style={imageChoise.colorPlan} onClick={()=>
                          setImageChoise({ 
                            image:{display:'none'},
                            plan:{display:''},
                            colorImage:{background:'white'},
                            colorPlan:{background:'#4282e3'}
                         })
                      }> Чертёж</span>
             </div>
          </div>
            <div className='product-item-right'>  
            <div className='product-discription'>
              <h2>Описание</h2>
                <p>{productName.discription}</p>
                {productName.complectation?
                  <>
                      <h2>Комплектация</h2>
                      <p>{productName.complectation}</p>
                  </>                  
                :undefined}
                {productName.image?
                  productName.image.video?<YouTube opts={{height: '300',width: '540'}} videoId={productName.image.video}/>:undefined
                :undefined
              }
            </div>
          </div>
          </div>
          {console.log(productName)}
        </div>
      }
    </div>      
  );
}
export { Product } 
