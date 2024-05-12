import React, { useContext ,useState } from 'react'
import './FoodItem.css'
import { assets, food_list } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext';

const val=0;
const FoodItem = ({id,name,price,description,image}) => {
    
    // console.log("ID: "+food_list[0]._id+ "  name :"+name);

              

    // i commented here because it is not use below
    // const [itemCount, setItemCount] = useState(0); 
    const {cartItems,addToCart,removeFromCart} =  useContext(StoreContext);

  return (
    <div className='food-item'>
        <div className="food-item-img-container">
            <img className='food-item-image'  src={image} alt="" />
            {/* it is commented here i am use the context api functionlity addtocart and remove cart{from here} */}
             {/* { !itemCount
            ?<img   className='add' onClick={()=>setItemCount(prev=>prev+1)} src={assets.add_icon_white} alt='' />
            :<div className='food-item-counter'>
                <img onClick={()=>setItemCount(prev=>prev-1)} src={assets.remove_icon_red} alt="" />
                <p>{itemCount}</p>
                <img onClick={()=>setItemCount(prev=>prev+1)} src={assets.add_icon_green} alt="" />
            </div>
            }  */}
                
                { !cartItems[id]
            ?<img   className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt='' />
            :<div className='food-item-counter'>
                <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                <p>{cartItems[id]}</p>
                <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
            </div>
            }

        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className="food-item-desc">{description} </p>
            <p className="food-item-price">₹{price}</p>
        </div>
    </div>
  )
}

export default FoodItem
