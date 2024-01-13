import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="app-logo">
        <img
          className="logo"
          src="https://png.pngtree.com/png-clipart/20200727/original/pngtree-restaurant-logo-design-vector-template-png-image_5441058.jpg"
          alt=""
        />
        {/* <h1 className="logo">LOGO</h1> */}
      </div>
      <div className="links">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
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



    const {resData} = props;


  
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0f0" }}>
      <img
        className="res-logo"
        src="https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/2018/03/08174730/Swiggy.jpg"
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
      <h3>{resData.data.name} </h3>  
      <h4>{resData.cuisines}</h4>
      <h4>{resData.avgRating}</h4>
      <h4></h4>
      <h4>{resData.deliveryTime} minutes</h4>
    </div>
  );
};

const resObj = {
  type: 'restaurant',
  data: {
    type: 'F',
    id: '121603',
    name: 'Kannur Food Point',
    uuid: '51983905-e698-4e31-b0d7-e376eca56320',
    city: '1',
    area: 'Tavarekere',
    totalRatingsString: '10000+ ratings',
    cloudinaryImageId: 'bmwn4n4bn6n1tcpc8x2h',
    cuisines: ['Kerala', 'Chinese'],
    tags: [],
    costForTwo: 30000,
    costForTwoString: '₹300 FOR TWO',
    deliveryTime: 24,
    minDeliveryTime: 24,
    maxDeliveryTime: 24,
    slaString: '24 MINS',
    lastMileTravel: 3,
    slugs: {
      restaurant: 'kannur-food-point-btm',
      city: 'bangalore',
    },
    cityState: '1',
    address:
      '6/21,9TH CROSS ,1ST MAIN, VENKATESHWARA LAYOUT,SG PALYA, BENGALURU, - 560093',
    locality: 'SG Palya',
    parentId: 20974,
    unserviceable: false,
    veg: false,
    select: false,
    favorite: false,
    tradeCampaignHeaders: [],
    aggregatedDiscountInfo: {
      header: '50% off',
      shortDescriptionList: [
        {
          meta: '50% off on all orders',
          discountType: 'Percentage',
          operationType: 'RESTAURANT',
        },
      ],
      descriptionList: [
        {
          meta: '50% off on all orders',
          discountType: 'Percentage',
          operationType: 'RESTAURANT',
        },
      ],
      subHeader: '',
      headerType: 0,
      superFreedel: '',
    },
    aggregatedDiscountInfoV2: {
      header: '50% OFF',
      shortDescriptionList: [
        {
          meta: '',
          discountType: 'Percentage',
          operationType: 'RESTAURANT',
        },
      ],
      descriptionList: [
        {
          meta: '50% off on all orders',
          discountType: 'Percentage',
          operationType: 'RESTAURANT',
        },
      ],
      subHeader: '',
      headerType: 0,
      superFreedel: '',
    },
    ribbon: [
      {
        type: 'PROMOTED',
      },
    ],
    chain: [],
    feeDetails: {
      fees: [
        {
          name: 'distance',
          fee: 3700,
          message: '',
        },
        {
          name: 'time',
          fee: 0,
          message: '',
        },
        {
          name: 'special',
          fee: 0,
          message: '',
        },
      ],
      totalFees: 3700,
      message: '',
      title: 'Delivery Charge',
      amount: '3700',
      icon: '',
    },
    availability: {
      opened: true,
      nextOpenMessage: '',
      nextCloseMessage: '',
    },
    longDistanceEnabled: 0,
    rainMode: 'NONE',
    thirdPartyAddress: false,
    thirdPartyVendor: '',
    adTrackingID: 'cid=6274849~p=1~eid=00000187-2c1c-96f0-0062-eea200b00103',
    badges: {
      imageBased: [],
      textBased: [],
      textExtendedBadges: [],
    },
    lastMileTravelString: '3 kms',
    hasSurge: false,
    sla: {
      restaurantId: '121603',
      deliveryTime: 24,
      minDeliveryTime: 24,
      maxDeliveryTime: 24,
      lastMileTravel: 3,
      lastMileDistance: 0,
      serviceability: 'SERVICEABLE',
      rainMode: 'NONE',
      longDistance: 'NOT_LONG_DISTANCE',
      preferentialService: false,
      iconType: 'EMPTY',
    },
    promoted: true,
    avgRating: '3.9',
    totalRatings: 10000,
    new: false,
  },
  subtype: 'basic',
}

const Body = () => {
  return (
    <>
      <div className="body">
        <div className="search">search</div>
        <div className="restaurant-container">
          {/* <RestaurantCard 
          // but data erom bhabe ashe toh na 
          // tai amra actual swiggy theke data tule anbo
            resName = "PB7 foods"   // prop eita 
            cuisine = "Indian,Pizza"  // react ei sobkota props ke ek jayega te joro kore i.e. wrap up kore object r rup e send korbe RestaurantCard component r modhe
          />
          <RestaurantCard 
            resName = "PB117 foods"   
            cuisine = "hui hui"
          /> */}
          <RestaurantCard
          resData = {resObj}


          />
          
        </div>
      </div>
    </>
  );
};
const Layout = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Layout />);
   


// passsing a prop to a component is same like passing arguments/parameter to a fn
// prop = properties = parameters that we pass to commponents




/*
  conflict driven ui ---

  sob kota location kolkata banga delhi te alada alada card ache offer r
  amra toh alada city r jonno alada ui banabo na
  amader website ta drive kore data i.e. our appn is driven by data
  tarmane amra ektai ui banabo aar tarpor ui ta change hobe backend theke jerom data asche setar sathe tal miliye 
  i.e. ei restaurant app e ekta ui banabo 
  ebar different city r data backend theke jokhun asbe tokhun ui ta serom behave korrbe
  i.e. ekta user A kolkata te kolkata r ui dekhbe jeitar data backend theke asche
  serom ei user b hyderabdad te hyderabdad r ui dekhbe jeitar data backend theke asche


  Config Driven UI` are based on the configurations of the data application receives. It is rather a good practice to use config driven UIs to make application for dynamic.
It is a very common & basic approach to interact with the User. It provides a generic interface to develop things which help your project scale well. It saves a lot of development time and effort.
A typical login form, common in most of the Apps. Most of these forms also get frequent updates as the requirements increase in terms of Form Validations, dropdown options,.. or design changes.





*/