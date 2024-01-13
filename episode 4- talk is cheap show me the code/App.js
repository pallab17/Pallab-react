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

  const { resData } = props;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0f0" }}>
      <img
        className="res-logo"
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/" +
          resData.data.cloudinaryImageId
        }
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
      <h4>{resData.data.cuisines.join(", ")}</h4>
      <h4>{resData.data.avgRating} stars</h4>
      <h4>₹{resData.data.costForTwo / 100} FOR TWO</h4>
      <h4>{resData.data.deliveryTime} minutes</h4>
    </div>
  );
};

// const resObj = {
//   type: "restaurant",
//   data: {
//     type: "F",
//     id: "121603",
//     name: "Kannur Food Point",
//     uuid: "51983905-e698-4e31-b0d7-e376eca56320",
//     city: "1",
//     area: "Tavarekere",
//     totalRatingsString: "10000+ ratings",
//     cloudinaryImageId: "bmwn4n4bn6n1tcpc8x2h",
//     cuisines: ["Kerala", "Chinese"],
//     tags: [],
//     costForTwo: 30000,
//     costForTwoString: "₹300 FOR TWO",
//     deliveryTime: 24,
//     minDeliveryTime: 24,
//     maxDeliveryTime: 24,
//     slaString: "24 MINS",
//     lastMileTravel: 3,
//     slugs: {
//       restaurant: "kannur-food-point-btm",
//       city: "bangalore",
//     },
//     cityState: "1",
//     address:
//       "6/21,9TH CROSS ,1ST MAIN, VENKATESHWARA LAYOUT,SG PALYA, BENGALURU, - 560093",
//     locality: "SG Palya",
//     parentId: 20974,
//     unserviceable: false,
//     veg: false,
//     select: false,
//     favorite: false,
//     tradeCampaignHeaders: [],
//     aggregatedDiscountInfo: {
//       header: "50% off",
//       shortDescriptionList: [
//         {
//           meta: "50% off on all orders",
//           discountType: "Percentage",
//           operationType: "RESTAURANT",
//         },
//       ],
//       descriptionList: [
//         {
//           meta: "50% off on all orders",
//           discountType: "Percentage",
//           operationType: "RESTAURANT",
//         },
//       ],
//       subHeader: "",
//       headerType: 0,
//       superFreedel: "",
//     },
//     aggregatedDiscountInfoV2: {
//       header: "50% OFF",
//       shortDescriptionList: [
//         {
//           meta: "",
//           discountType: "Percentage",
//           operationType: "RESTAURANT",
//         },
//       ],
//       descriptionList: [
//         {
//           meta: "50% off on all orders",
//           discountType: "Percentage",
//           operationType: "RESTAURANT",
//         },
//       ],
//       subHeader: "",
//       headerType: 0,
//       superFreedel: "",
//     },
//     ribbon: [
//       {
//         type: "PROMOTED",
//       },
//     ],
//     chain: [],
//     feeDetails: {
//       fees: [
//         {
//           name: "distance",
//           fee: 3700,
//           message: "",
//         },
//         {
//           name: "time",
//           fee: 0,
//           message: "",
//         },
//         {
//           name: "special",
//           fee: 0,
//           message: "",
//         },
//       ],
//       totalFees: 3700,
//       message: "",
//       title: "Delivery Charge",
//       amount: "3700",
//       icon: "",
//     },
//     availability: {
//       opened: true,
//       nextOpenMessage: "",
//       nextCloseMessage: "",
//     },
//     longDistanceEnabled: 0,
//     rainMode: "NONE",
//     thirdPartyAddress: false,
//     thirdPartyVendor: "",
//     adTrackingID: "cid=6274849~p=1~eid=00000187-2c1c-96f0-0062-eea200b00103",
//     badges: {
//       imageBased: [],
//       textBased: [],
//       textExtendedBadges: [],
//     },
//     lastMileTravelString: "3 kms",
//     hasSurge: false,
//     sla: {
//       restaurantId: "121603",
//       deliveryTime: 24,
//       minDeliveryTime: 24,
//       maxDeliveryTime: 24,
//       lastMileTravel: 3,
//       lastMileDistance: 0,
//       serviceability: "SERVICEABLE",
//       rainMode: "NONE",
//       longDistance: "NOT_LONG_DISTANCE",
//       preferentialService: false,
//       iconType: "EMPTY",
//     },
//     promoted: true,
//     avgRating: "3.9",
//     totalRatings: 10000,
//     new: false,
//   },
//   subtype: "basic",
// };


const resList = [
  {
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
  },
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '229',
      name: 'Meghana Foods',
      uuid: '4fdd19e2-5d0f-4bde-9c7f-dc3e8d36021f',
      city: '1',
      area: 'Koramangala',
      totalRatingsString: '10000+ ratings',
      cloudinaryImageId: 'xqwpuhgnsaf18te7zvtv',
      cuisines: [
        'Biryani',
        'Andhra',
        'South Indian',
        'North Indian',
        'Chinese',
        'Seafood',
      ],
      tags: [],
      costForTwo: 50000,
      costForTwoString: '₹500 FOR TWO',
      deliveryTime: 16,
      minDeliveryTime: 16,
      maxDeliveryTime: 16,
      slaString: '16 MINS',
      lastMileTravel: 1.399999976158142,
      slugs: {
        restaurant: 'meghana-foods-5th-block-koramangala',
        city: 'bangalore',
      },
      cityState: '1',
      address:
        '124, Near Jyothi Nivas College, 1st Cross, KHB Colony, Koramangala 5th Block, Bangalore',
      locality: '5th Block',
      parentId: 635,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: 'distance',
            fee: 2900,
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
        totalFees: 2900,
        message: '',
        title: 'Delivery Charge',
        amount: '2900',
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
      adTrackingID: '',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: '1.3 kms',
      hasSurge: false,
      sla: {
        restaurantId: '229',
        deliveryTime: 16,
        minDeliveryTime: 16,
        maxDeliveryTime: 16,
        lastMileTravel: 1.399999976158142,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY',
      },
      promoted: false,
      avgRating: '4.4',
      totalRatings: 10000,
      new: false,
    },
    subtype: 'basic',
  },
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '428',
      name: 'Biryani Pot',
      uuid: '6db20a8b-dd85-4148-b750-107169f7f826',
      city: '1',
      area: 'Btm Layout',
      totalRatingsString: '10000+ ratings',
      cloudinaryImageId: 'mdipoyzfzsa7n7igskht',
      cuisines: ['North Indian', 'Biryani'],
      tags: [],
      costForTwo: 50000,
      costForTwoString: '₹500 FOR TWO',
      deliveryTime: 19,
      minDeliveryTime: 19,
      maxDeliveryTime: 19,
      slaString: '19 MINS',
      lastMileTravel: 1.899999976158142,
      slugs: {
        restaurant: 'biryani-pot-madiwala-junction-btm',
        city: 'bangalore',
      },
      cityState: '1',
      address: '14th  Cross, 4th link Road Maruthi Nagar Madiwala Bangalore 68',
      locality: 'Maruti Nagar',
      parentId: 21798,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: '20% off',
        shortDescriptionList: [
          {
            meta: '20% off | Use TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '20% off up to ₹50 | Use code TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      aggregatedDiscountInfoV2: {
        header: '20% OFF',
        shortDescriptionList: [
          {
            meta: 'Use TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '20% off up to ₹50 | Use code TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: 'distance',
            fee: 2900,
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
        totalFees: 2900,
        message: '',
        title: 'Delivery Charge',
        amount: '2900',
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
      adTrackingID: '',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: '1.8 kms',
      hasSurge: false,
      sla: {
        restaurantId: '428',
        deliveryTime: 19,
        minDeliveryTime: 19,
        maxDeliveryTime: 19,
        lastMileTravel: 1.899999976158142,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY',
      },
      promoted: false,
      avgRating: '3.9',
      totalRatings: 10000,
      new: false,
    },
    subtype: 'basic',
  },
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '223',
      name: 'Truffles',
      uuid: '8250cc38-4752-4f42-928b-4da5f01e5cbe',
      city: '1',
      area: 'Koramangala',
      totalRatingsString: '10000+ ratings',
      cloudinaryImageId: 'cd832b6167eb9f88aeb1ccdebf38d942',
      cuisines: ['American', 'Continental', 'Desserts', 'Italian'],
      tags: [],
      costForTwo: 45000,
      costForTwoString: '₹450 FOR TWO',
      deliveryTime: 30,
      minDeliveryTime: 30,
      maxDeliveryTime: 30,
      slaString: '30 MINS',
      lastMileTravel: 1.600000023841858,
      slugs: {
        restaurant: 'truffles-ice-spice-5th-block-koramangala',
        city: 'bangalore',
      },
      cityState: '1',
      address:
        "93/A, Appek Building, 'A' Wing,  4th 'B' Cross,  Koramangala Industrial Layout, 5th Block, Koramangala, Bangalore - 560 095",
      locality: '5th Block',
      parentId: 218065,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: '40% off',
        shortDescriptionList: [
          {
            meta: '40% off | Use TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '40% off up to ₹80 | Use code TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      aggregatedDiscountInfoV2: {
        header: '40% OFF',
        shortDescriptionList: [
          {
            meta: 'Use TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '40% off up to ₹80 | Use code TRYNEW',
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
            fee: 2900,
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
        totalFees: 2900,
        message: '',
        title: 'Delivery Charge',
        amount: '2900',
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
      adTrackingID: 'cid=6275692~p=4~eid=00000187-2c1c-96f0-0062-eea300b00430',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: '1.6 kms',
      hasSurge: false,
      sla: {
        restaurantId: '223',
        deliveryTime: 30,
        minDeliveryTime: 30,
        maxDeliveryTime: 30,
        lastMileTravel: 1.600000023841858,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY',
      },
      promoted: true,
      avgRating: '4.4',
      totalRatings: 10000,
      new: false,
    },
    subtype: 'basic',
  },
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '425',
      name: 'Hotel Empire',
      uuid: 'c0c37758-2e83-4429-aad6-eb94debb48f5',
      city: '1',
      area: 'Koramangala',
      totalRatingsString: '10000+ ratings',
      cloudinaryImageId: 'un4omn7rcunkmlw6vikr',
      cuisines: ['North Indian', 'Kebabs', 'Biryani'],
      tags: [],
      costForTwo: 45000,
      costForTwoString: '₹450 FOR TWO',
      deliveryTime: 23,
      minDeliveryTime: 23,
      maxDeliveryTime: 23,
      slaString: '23 MINS',
      lastMileTravel: 1.2999999523162842,
      slugs: {
        restaurant: 'hotel-empire-5th-block-koramangala',
        city: 'bangalore',
      },
      cityState: '1',
      address:
        '103, Industrial Area, 5th Block, Near Jyothi Nivas College, Koramangala 5th Block, Bangalore',
      locality: 'Koramangala',
      parentId: 475,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: '10% off',
        shortDescriptionList: [
          {
            meta: '10% off | Use TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '10% off up to ₹40 | Use code TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      aggregatedDiscountInfoV2: {
        header: '10% OFF',
        shortDescriptionList: [
          {
            meta: 'Use TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '10% off up to ₹40 | Use code TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: 'distance',
            fee: 2900,
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
        totalFees: 2900,
        message: '',
        title: 'Delivery Charge',
        amount: '2900',
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
      adTrackingID: '',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: '1.2 kms',
      hasSurge: false,
      sla: {
        restaurantId: '425',
        deliveryTime: 23,
        minDeliveryTime: 23,
        maxDeliveryTime: 23,
        lastMileTravel: 1.2999999523162842,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY',
      },
      promoted: false,
      avgRating: '4.1',
      totalRatings: 10000,
      new: false,
    },
    subtype: 'basic',
  },
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '201224',
      name: 'Asha tiffins',
      uuid: 'e32381cf-6468-4c10-9bad-47fa08e898a8',
      city: '1',
      area: 'HSR Layout',
      totalRatingsString: '10000+ ratings',
      cloudinaryImageId: 'n15vckntsiboiod3gpco',
      cuisines: ['Indian', 'South Indian', 'Beverages'],
      tags: [],
      costForTwo: 20000,
      costForTwoString: '₹200 FOR TWO',
      deliveryTime: 26,
      minDeliveryTime: 26,
      maxDeliveryTime: 26,
      slaString: '26 MINS',
      lastMileTravel: 4,
      slugs: {
        restaurant: 'asha-tiffins-hsr-hsr-2',
        city: 'bangalore',
      },
      cityState: '1',
      address:
        'Asha Tiffins, 5th Main Road, Sector 7, HSR Layout, Bengaluru, Karnataka, India',
      locality: '7th Sector',
      parentId: 236243,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: '30% off',
        shortDescriptionList: [
          {
            meta: '30% off | Use TRYNEW-XL',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '30% off upto ₹80 | Use TRYNEW-XL',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      aggregatedDiscountInfoV2: {
        header: '30% OFF',
        shortDescriptionList: [
          {
            meta: 'Use TRYNEW-XL',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '30% off upto ₹80 | Use TRYNEW-XL',
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
      adTrackingID: 'cid=6196512~p=7~eid=00000187-2c1c-96f0-0062-eea400b00725',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: '4 kms',
      hasSurge: false,
      sla: {
        restaurantId: '201224',
        deliveryTime: 26,
        minDeliveryTime: 26,
        maxDeliveryTime: 26,
        lastMileTravel: 4,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY',
      },
      promoted: true,
      avgRating: '4.4',
      totalRatings: 10000,
      new: false,
    },
    subtype: 'basic',
  },
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '59593',
      name: 'Al Daaz',
      uuid: 'c189b92c-d842-4595-9a1f-ff85bd67bc2a',
      city: '1',
      area: 'Hsr Layout',
      totalRatingsString: '10000+ ratings',
      cloudinaryImageId: 'rxsvhvcdip9dbfdijzk9',
      cuisines: [
        'American',
        'Arabian',
        'Chinese',
        'Desserts',
        'Mughlai',
        'North Indian',
      ],
      tags: [],
      costForTwo: 40000,
      costForTwoString: '₹400 FOR TWO',
      deliveryTime: 36,
      minDeliveryTime: 36,
      maxDeliveryTime: 36,
      slaString: '36 MINS',
      lastMileTravel: 4.5,
      slugs: {
        restaurant: 'al-daaz-hsr-hsr',
        city: 'bangalore',
      },
      cityState: '1',
      address: '#64 & 65, 27th Main Rd, 1st Sector HSR Layout - 560102',
      locality: 'HSR',
      parentId: 21640,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
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
      adTrackingID: '',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: '4.5 kms',
      hasSurge: false,
      sla: {
        restaurantId: '59593',
        deliveryTime: 36,
        minDeliveryTime: 36,
        maxDeliveryTime: 36,
        lastMileTravel: 4.5,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY',
      },
      promoted: false,
      avgRating: '4.3',
      totalRatings: 10000,
      new: false,
    },
    subtype: 'basic',
  },
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '56589',
      name: 'Roti-Wala',
      uuid: '257a0889-b243-4252-b84a-6c9f1760d58f',
      city: '1',
      area: 'BTM Layout',
      totalRatingsString: '10000+ ratings',
      cloudinaryImageId: 'ptetuqkrhmpd8tiqiztg',
      cuisines: [
        'North Indian',
        'Home Food',
        'Thalis',
        'Chinese',
        'Punjabi',
        'South Indian',
        'Ice Cream',
      ],
      tags: [],
      costForTwo: 20000,
      costForTwoString: '₹200 FOR TWO',
      deliveryTime: 37,
      minDeliveryTime: 37,
      maxDeliveryTime: 37,
      slaString: '37 MINS',
      lastMileTravel: 4,
      slugs: {
        restaurant: 'roti-wala-lavelle-road-central-bangalore',
        city: 'bangalore',
      },
      cityState: '1',
      address: '#239, 7TH Cross, Btm Stage 2. NS Palya, 560076',
      locality: '2nd Stage',
      parentId: 415860,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: '40% off',
        shortDescriptionList: [
          {
            meta: '40% off | Use GUILTFREE',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '40% off up to ₹100 | Use code GUILTFREE',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      aggregatedDiscountInfoV2: {
        header: '40% OFF',
        shortDescriptionList: [
          {
            meta: 'Use GUILTFREE',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '40% off up to ₹100 | Use code GUILTFREE',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
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
      adTrackingID: '',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: '4 kms',
      hasSurge: false,
      sla: {
        restaurantId: '56589',
        deliveryTime: 37,
        minDeliveryTime: 37,
        maxDeliveryTime: 37,
        lastMileTravel: 4,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY',
      },
      promoted: false,
      avgRating: '4.2',
      totalRatings: 10000,
      new: false,
    },
    subtype: 'basic',
  },
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '560153',
      name: 'Rice Bowl',
      uuid: 'b5652b7d-5df8-4be5-8fe9-27648b668e79',
      city: '1',
      area: 'Koramangala',
      totalRatingsString: '1000+ ratings',
      cloudinaryImageId: 'z2ahvclpmdv6lekyth39',
      cuisines: ['North Indian', 'South Indian'],
      tags: [],
      costForTwo: 30000,
      costForTwoString: '₹300 FOR TWO',
      deliveryTime: 22,
      minDeliveryTime: 22,
      maxDeliveryTime: 22,
      slaString: '22 MINS',
      lastMileTravel: 2.5,
      slugs: {
        restaurant: 'rice-bowl-koramangala-koramangala-2',
        city: 'bangalore',
      },
      cityState: '1',
      address:
        '42A, Old House List No 148/11, Katha No 296, BBMP PID No 68-327-98/1, Jakkasandra Village, Sarjapur Main Road, Bengaluru -, BTM Layout , B.B.M.P South, Karnataka - 560034',
      locality: 'Jakkasandra',
      parentId: 169302,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: 'FLAT125 off',
        shortDescriptionList: [
          {
            meta: 'FLAT125 off | Use FLATDEAL',
            discountType: 'Flat',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: 'FLAT125 off | Use FLATDEAL',
            discountType: 'Flat',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      aggregatedDiscountInfoV2: {
        header: '₹125 OFF',
        shortDescriptionList: [
          {
            meta: 'Use FLATDEAL',
            discountType: 'Flat',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: 'FLAT125 off | Use FLATDEAL',
            discountType: 'Flat',
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
            fee: 2900,
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
        totalFees: 2900,
        message: '',
        title: 'Delivery Charge',
        amount: '2900',
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
      adTrackingID: 'cid=6081264~p=10~eid=00000187-2c1c-96f0-0062-eea500b00a3d',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: '2.5 kms',
      hasSurge: false,
      sla: {
        restaurantId: '560153',
        deliveryTime: 22,
        minDeliveryTime: 22,
        maxDeliveryTime: 22,
        lastMileTravel: 2.5,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY',
      },
      promoted: true,
      avgRating: '4.1',
      totalRatings: 1000,
      new: false,
    },
    subtype: 'basic',
  },
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '337335',
      name: 'Kannur food kitchen',
      uuid: 'c70b61bc-0f68-4e24-996b-749fbf295c35',
      city: '1',
      area: 'BTM Layout',
      totalRatingsString: '5000+ ratings',
      cloudinaryImageId: 'a27weqanhnszqiuzsoik',
      cuisines: ['Kerala', 'Biryani', 'Beverages'],
      tags: [],
      costForTwo: 20000,
      costForTwoString: '₹200 FOR TWO',
      deliveryTime: 24,
      minDeliveryTime: 24,
      maxDeliveryTime: 24,
      slaString: '24 MINS',
      lastMileTravel: 2.5,
      slugs: {
        restaurant: 'kannur-food-kitchen-btm-btm',
        city: 'bangalore',
      },
      cityState: '1',
      address:
        'kannur food point, Chocolate Factory Road, Tavarekere, Cashier Layout, 1st Stage, BTM Layout, thavrakharea, Karnataka, India',
      locality: '1st  Stage',
      parentId: 114756,
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
          {
            meta: 'Free Limejuice on orders above ₹499',
            discountType: 'Freebie',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '50% off on all orders',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
          {
            meta: 'Free Limejuice on orders above ₹499',
            discountType: 'Freebie',
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
          {
            meta: 'Free Limejuice on orders above ₹499',
            discountType: 'Freebie',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: 'distance',
            fee: 2900,
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
        totalFees: 2900,
        message: '',
        title: 'Delivery Charge',
        amount: '2900',
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
      adTrackingID: '',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: '2.5 kms',
      hasSurge: false,
      sla: {
        restaurantId: '337335',
        deliveryTime: 24,
        minDeliveryTime: 24,
        maxDeliveryTime: 24,
        lastMileTravel: 2.5,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY',
      },
      promoted: false,
      avgRating: '3.8',
      totalRatings: 5000,
      new: false,
    },
    subtype: 'basic',
  },
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '601',
      name: 'Litti Twist',
      uuid: 'e7dcc8d7-fea9-4312-8c4e-7a6516a026db',
      city: '1',
      area: 'Btm Layout',
      totalRatingsString: '10000+ ratings',
      cloudinaryImageId: 'zyahkuhlgnxp3prkvttv',
      cuisines: ['North Indian'],
      tags: [],
      costForTwo: 25000,
      costForTwoString: '₹250 FOR TWO',
      deliveryTime: 28,
      minDeliveryTime: 28,
      maxDeliveryTime: 28,
      slaString: '28 MINS',
      lastMileTravel: 4.5,
      slugs: {
        restaurant: 'litti-twist-2nd-stage-btm',
        city: 'bangalore',
      },
      cityState: '1',
      address:
        '#5, 6th cross, 1st Main, Bannerghatta Main Rd, NS Palya, Stage 2, Bengaluru, Karnataka 560076',
      locality: '2nd Stage',
      parentId: 3455,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: '50% off',
        shortDescriptionList: [
          {
            meta: '50% off | Use TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '50% off up to ₹100 | Use code TRYNEW',
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
            meta: 'Use TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '50% off up to ₹100 | Use code TRYNEW',
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
      adTrackingID: 'cid=6276197~p=13~eid=00000187-2c1c-96f0-0062-eea600b00d24',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: '4.5 kms',
      hasSurge: false,
      sla: {
        restaurantId: '601',
        deliveryTime: 28,
        minDeliveryTime: 28,
        maxDeliveryTime: 28,
        lastMileTravel: 4.5,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY',
      },
      promoted: true,
      avgRating: '4.2',
      totalRatings: 10000,
      new: false,
    },
    subtype: 'basic',
  },
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '256957',
      name: 'Shanmukha Restaurant',
      uuid: 'c1972fbf-2e19-42d6-ac49-54f412f78d86',
      city: '1',
      area: 'Jayanagar',
      totalRatingsString: '10000+ ratings',
      cloudinaryImageId: 'c5howge9hbdor7uqf949',
      cuisines: [
        'Biryani',
        'Hyderabadi',
        'Andhra',
        'North Indian',
        'South Indian',
        'Chinese',
        'Tandoor',
        'Seafood',
        'Beverages',
      ],
      tags: [],
      costForTwo: 30000,
      costForTwoString: '₹300 FOR TWO',
      deliveryTime: 36,
      minDeliveryTime: 36,
      maxDeliveryTime: 36,
      slaString: '36 MINS',
      lastMileTravel: 5,
      slugs: {
        restaurant: 'shanmukha-restaurant-jayanagar-jayanagar',
        city: 'bangalore',
      },
      cityState: '1',
      address:
        '1313, Near Bangalore Central Mall, 25th Main, 9th Block, Jayanagar, Bengaluru, Karnataka 560069, India',
      locality: '9th Block',
      parentId: 9954,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: '50% off',
        shortDescriptionList: [
          {
            meta: '50% off | Use TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '50% off up to ₹100 | Use code TRYNEW',
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
            meta: 'Use TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '50% off up to ₹100 | Use code TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: 'distance',
            fee: 4900,
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
        totalFees: 4900,
        message: '',
        title: 'Delivery Charge',
        amount: '4900',
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
      adTrackingID: '',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: '5 kms',
      hasSurge: false,
      sla: {
        restaurantId: '256957',
        deliveryTime: 36,
        minDeliveryTime: 36,
        maxDeliveryTime: 36,
        lastMileTravel: 5,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY',
      },
      promoted: false,
      avgRating: '4.1',
      totalRatings: 10000,
      new: false,
    },
    subtype: 'basic',
  },
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '642459',
      name: 'Malnad Donne Biryani MDB',
      uuid: '4ae022a0-9296-40ac-8ea9-3e764200e6a5',
      city: '1',
      area: 'Jayanagar',
      totalRatingsString: '50+ ratings',
      cloudinaryImageId: 'tjw67zgzfehxgfo1vio2',
      cuisines: ['Biryani', 'South Indian', 'Kebabs'],
      tags: [],
      costForTwo: 25000,
      costForTwoString: '₹250 FOR TWO',
      deliveryTime: 36,
      minDeliveryTime: 36,
      maxDeliveryTime: 36,
      slaString: '36 MINS',
      lastMileTravel: 5,
      slugs: {
        restaurant: 'malnad-donne-biryani-mdb-jayanagar-jayanagar',
        city: 'bangalore',
      },
      cityState: '1',
      address:
        '1384, 32nd E Cross , near Axis bank, opp sanjay gandhi university. 4th T Block , Jayanagar, Bengaluru, Karnataka 560041',
      locality: 'T Block',
      parentId: 130946,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: '40% off',
        shortDescriptionList: [
          {
            meta: '40% off | Use TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '40% off up to ₹80 | Use code TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      aggregatedDiscountInfoV2: {
        header: '40% OFF',
        shortDescriptionList: [
          {
            meta: 'Use TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '40% off up to ₹80 | Use code TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: 'distance',
            fee: 4900,
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
        totalFees: 4900,
        message: '',
        title: 'Delivery Charge',
        amount: '4900',
        icon: '',
      },
      availability: {
        opened: true,
        nextOpenMessage: '',
        nextCloseMessage: '',
      },
      longDistanceEnabled: 1,
      rainMode: 'NONE',
      thirdPartyAddress: false,
      thirdPartyVendor: '',
      adTrackingID: '',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: '5 kms',
      hasSurge: false,
      sla: {
        restaurantId: '642459',
        deliveryTime: 36,
        minDeliveryTime: 36,
        maxDeliveryTime: 36,
        lastMileTravel: 5,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        longDistance: 'IT_IS_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY',
      },
      promoted: false,
      avgRating: '3.9',
      totalRatings: 50,
      new: false,
    },
    subtype: 'basic',
  },
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '27643',
      name: 'Ultimate Parathas',
      uuid: '925340c8-7945-4cdf-894b-01a90f5445a2',
      city: '1',
      area: 'Btm Layout',
      totalRatingsString: '10000+ ratings',
      cloudinaryImageId: 'm0bjo1ds8l6o4civx6ek',
      cuisines: ['Bihari', 'North Indian', 'Desserts'],
      tags: [],
      costForTwo: 25000,
      costForTwoString: '₹250 FOR TWO',
      deliveryTime: 29,
      minDeliveryTime: 29,
      maxDeliveryTime: 29,
      slaString: '29 MINS',
      lastMileTravel: 4.5,
      slugs: {
        restaurant: 'litti-twist-koramangala-koramangala',
        city: 'bangalore',
      },
      cityState: '1',
      address:
        '#5, 6th cross, 1st Main, Bannerghatta Main Rd, NS Palya, Stage 2, Bengaluru, Karnataka 560076',
      locality: '2nd Stage',
      parentId: 21591,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: '50% off',
        shortDescriptionList: [
          {
            meta: '50% off | Use TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '50% off up to ₹100 | Use code TRYNEW',
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
            meta: 'Use TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '50% off up to ₹100 | Use code TRYNEW',
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
      adTrackingID: 'cid=6276390~p=16~eid=00000187-2c1c-96f0-0062-eea700b01075',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: '4.5 kms',
      hasSurge: false,
      sla: {
        restaurantId: '27643',
        deliveryTime: 29,
        minDeliveryTime: 29,
        maxDeliveryTime: 29,
        lastMileTravel: 4.5,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY',
      },
      promoted: true,
      avgRating: '4.2',
      totalRatings: 10000,
      new: false,
    },
    subtype: 'basic',
  },
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '42294',
      name: 'Udupi Palace',
      uuid: '7e5fb1de-707b-4851-a0f7-a70df335efe2',
      city: '1',
      area: 'HSR Layout',
      totalRatingsString: '10000+ ratings',
      cloudinaryImageId: 'dbfp4mqtidbjh9sectlk',
      cuisines: [
        'Beverages',
        'Biryani',
        'Chinese',
        'Desserts',
        'North Indian',
        'South Indian',
      ],
      tags: [],
      costForTwo: 15000,
      costForTwoString: '₹150 FOR TWO',
      deliveryTime: 30,
      minDeliveryTime: 30,
      maxDeliveryTime: 30,
      slaString: '30 MINS',
      lastMileTravel: 5.599999904632568,
      slugs: {
        restaurant: 'udupi-palace-00-hsr',
        city: 'bangalore',
      },
      cityState: '1',
      address:
        'No 1188 HNR tower 24th main second SECTOR HSR LAYOUT BANGALORE 560102',
      locality: '2nd Sector',
      parentId: 6971,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: '20% off',
        shortDescriptionList: [
          {
            meta: '20% off | Use TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '20% off up to ₹50 | Use code TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      aggregatedDiscountInfoV2: {
        header: '20% OFF',
        shortDescriptionList: [
          {
            meta: 'Use TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '20% off up to ₹50 | Use code TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: 'distance',
            fee: 4900,
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
        totalFees: 4900,
        message: '',
        title: 'Delivery Charge',
        amount: '4900',
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
      adTrackingID: '',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: '5.5 kms',
      hasSurge: false,
      sla: {
        restaurantId: '42294',
        deliveryTime: 30,
        minDeliveryTime: 30,
        maxDeliveryTime: 30,
        lastMileTravel: 5.599999904632568,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY',
      },
      promoted: false,
      avgRating: '4.2',
      totalRatings: 10000,
      new: false,
    },
    subtype: 'basic',
  },
];

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
          <RestaurantCard resData={resObj} />
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
