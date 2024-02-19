import { CDN_URL } from "../common/constants";

const RestaurantCard = (props) => {
  console.log(props); // props ta hocche object ta jeita react pathache ei component e sob kota properties ke ekjayega ene wrap up kore
  // const {resName,cuisine} = props;
  // destructure kore enechi jate direct
  //  <h3>{resName}</h3>
  // <h4>{cuisine}</h4>
  //  erom bhabe likhte pari

  /*
    imppp 
  
     resData = {resObj}
     ekhane resObj hocche ekta object
     eibaree props tao hocche ekta object 
  
     ebar amra jani je props r bhetore sob kota properties asche 
     so resObj ta asche props r bhetore
     so it becomes object of objects as props r bhetore resObj eseche bole
  
     now to access a value example name without destrucing we will have to write
     props.resData.data.name 
  
     reason -->
     as name ta hocche property ta  jeita data value r under e ache 
     eibar ei data value along with type and subtype resObj r bhetore ache 
     now we know that access korar jonno amra sudhu naam ta use kori property r not the content so amra bolbo
     ei data value along with type and subtype resData r bhetore ache 
     eibar ei resData ta props r bhetore jehetu ache tai amra
     props.resData.data.name  eita likhe access korbo
  
     with destructing it becomes
      const {resData} = props;   --> destructure korlam mane props r bhetore jeita ache setake break kore lekha
      resData.data.name --> access syntax
  
  
    */

  const { resData } = props;

  //  now we will refractor our code
  //  so again destructing the resData we get

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData?.data;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0f0" }}>
      <img
        className="res-logo"
        // src={
        //   "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/" +
        //   resData.data.cloudinaryImageId
        // }
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      {/* <h3> PB7 foods</h3>
        <h4>Indian,Pizza</h4>
        <h4>4.7 stars</h4>
        <h4>30 minutes</h4> */}

      {/*    without destructure mane hocche without 
  const {resName,cuisine} = prop; --< writing this
  
   */}
      {/* without destructure erom lage dekh */}
      {/* <h3>{prop.resName}</h3>
        <h4>{prop.cuisine}</h4>
        <h4>4.7 stars</h4>
        <h4>30 minutes</h4> */}

      {/* destructing korei likhte better lagche amar apatoto
       */}
      {/* destructure korchi bole resName directly likhe data take show korte paarchi */}
      {/* <h3>{props.resData.data.name} </h3>    */}
      {/* <h3>{resData.data.name} </h3>
        <h4>{resData.data.cuisines.join(", ")}</h4>
        <h4>{resData.data.avgRating} stars</h4>
        <h4>₹{resData.data.costForTwo / 100} FOR TWO</h4>
        <h4>{resData.data.deliveryTime} minutes</h4> */}

      {/* after destructing resData we can write like this */}
      <h3>{name} </h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>₹{costForTwo / 100} FOR TWO</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
