import logo from "./MainBrandLogo.png";
import cover_logo from "./CoverLogoDark.png";
import dark_logo from "./MainBrandLogoDark.png";
import search_icon from "./search_icon.svg";
import remove_icon from "./remove_icon.svg";
import arrow_right_icon_colored from "./arrow_right_icon_colored.svg";
import star_icon from "./star_icon.svg";
import star_dull_icon from "./star_dull_icon.svg";
import cart_icon from "./cart_icon.svg";
import nav_cart_icon from "./nav_cart_icon.svg";
import add_icon from "./add_icon.svg";
import refresh_icon from "./refresh_icon.svg";
import product_list_icon from "./product_list_icon.svg";
import order_icon from "./order_icon.svg";
import upload_area from "./upload_area.png";
import profile_icon from "./profile_icon.png";
import menu_icon from "./menu_icon.svg";
import delivery_truck_icon from "./delivery_truck_icon.svg";
import leaf_icon from "./leaf_icon.svg";
import coin_icon from "./coin_icon.svg";
import box_icon from "./box_icon.svg";
import trust_icon from "./trust_icon.svg";
import black_arrow_icon from "./black_arrow_icon.svg";
import white_arrow_icon from "./white_arrow_icon.svg";
import main_banner_bg from "./main_banner_bg.png";
import main_banner_bg_sm from "./main_banner_bg_sm.png";
import bottom_banner_image from "./bottom_banner_image.png";
import bottom_banner_image_sm from "./bottom_banner_image_sm.png";
import add_address_iamge from "./add_address_image.png";
import high_tops from "./high_tops.png";
import low_tops from "./low_tops.jpg";
import slip_ons from "./slip_ons.jpg";
import performance from "./performance.jpg";
import lifestyle from "./lifestyle.jpg";
import luxury from "./luxury.jpg";
import kids from "./kids.png";
import air_one from "./Air_one.jpg";
import air_two from "./Air_two.jpg";
import air_three from "./Air_three.jpg";
import air_four from "./Air_four.jpg";
import air_five from "./Air_five.jpg";
import streetstyle_img_1 from "./StreetStyle_1.jpg";
import streetstyle_img_2 from "./StreetStyle_2.jpg";
import streetstyle_img_3 from "./StreetStyle_3.jpg";
import streetstyle_img_4 from "./StreetStyle_4.jpg";
import streetstyle_img_5 from "./StreetStyle_5.jpg";
import comfy_1 from "./Comfy_1.jpg";
import comfy_2 from "./Comfy_2.jpg";
import comfy_3 from "./Comfy_3.jpg";
import runner_img_1 from "./RunnerX_1.jpg";
import runner_img_2 from "./RunnerX_2.jpg";
import runner_img_3 from "./RunnerX_3.jpg";
import runner_img_4 from "./RunnerX_4.jpg";
import urban_img from "./Urban.jpg";
import blackout_img from "./Blackout.jpg";
import hype_img from "./Hype.jpg";

export const assets = {
  logo,
  cover_logo,
  dark_logo,
  search_icon,
  remove_icon,
  arrow_right_icon_colored,
  star_icon,
  star_dull_icon,
  cart_icon,
  nav_cart_icon,
  add_icon,
  refresh_icon,
  product_list_icon,
  order_icon,
  upload_area,
  profile_icon,
  menu_icon,
  delivery_truck_icon,
  leaf_icon,
  coin_icon,
  trust_icon,
  black_arrow_icon,
  white_arrow_icon,
  main_banner_bg,
  main_banner_bg_sm,
  bottom_banner_image,
  bottom_banner_image_sm,
  add_address_iamge,
  box_icon,
};

export const categories = [
  {
    text: "High Tops",
    path: "Hightops",
    image: high_tops,
    bgColor: "#f3f4f6",
  },
  {
    text: "Low Tops",
    path: "Lowtops",
    image: low_tops,
    bgColor: "#e5e7eb",
  },
  {
    text: "Slip-ons",
    path: "Slipons",
    image: slip_ons,
    bgColor: "#fef3c7",
  },
  {
    text: "Performance",
    path: "Performance",
    image: performance,
    bgColor: "#e0f2fe",
  },
  {
    text: "Lifestyle",
    path: "Lifestyle",
    image: lifestyle,
    bgColor: "#f1f5f9",
  },
  {
    text: "Luxury Limited",
    path: "Luxury",
    image: luxury,
    bgColor: "#fff7ed",
  },
  {
    text: "Kids Edition",
    path: "Kids",
    image: kids,
    bgColor: "#fce7f3",
  },
];

export const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { text: "Home", url: "#" },
      { text: "Best Sellers", url: "#" },
      { text: "Offers & Deals", url: "#" },
      { text: "Contact Us", url: "#" },
      { text: "FAQs", url: "#" },
    ],
  },
  {
    title: "Need help?",
    links: [
      { text: "Delivery Information", url: "#" },
      { text: "Return & Refund Policy", url: "#" },
      { text: "Payment Methods", url: "#" },
      { text: "Track your Order", url: "#" },
      { text: "Contact Us", url: "#" },
    ],
  },
  {
    title: "Follow Us",
    links: [
      { text: "Instagram", url: "#" },
      { text: "Twitter", url: "#" },
      { text: "Facebook", url: "#" },
      { text: "YouTube", url: "#" },
    ],
  },
];

export const features = [
  {
    icon: delivery_truck_icon,
    title: "Fastest Delivery",
    description: "Premium Sneaker delivered in under 30 minutes.",
  },
  {
    icon: leaf_icon,
    title: "Premium Quality",
    description: "Only handpicked and verified items.",
  },
  {
    icon: coin_icon,
    title: "Affordable Prices",
    description: "Quality Premium Sneaker at unbeatable prices.",
  },
  {
    icon: trust_icon,
    title: "Trusted by Thousands",
    description: "Loved by 10,000+ happy customers.",
  },
];
export const dummyProducts = [
  {
    _id: "p001",
    name: "Air Luxe High Top",
    category: "Hightops",
    price: 7999,
    offerPrice: 6999,
    image: [air_four, air_one, air_two, air_three, air_five],
    description: [
      "Premium leather high ankle build",
      "Engineered sole grip",
      "Ideal for bold streetwear look",
    ],
    inStock: true,
  },
  {
    _id: "p002",
    name: "StreetStyle Low Rider",
    category: "Lowtops",
    price: 6999,
    offerPrice: 5999,
    image: [
      streetstyle_img_3,
      streetstyle_img_1,
      streetstyle_img_2,
      streetstyle_img_4,
      streetstyle_img_5,
    ],
    description: [
      "Lightweight breathable mesh",
      "Perfect for daily fashion wear",
      "Stylish low-cut build",
    ],
    inStock: true,
  },
  {
    _id: "p003",
    name: "Comfy Slip-On",
    category: "Slipons",
    price: 4999,
    offerPrice: 4499,
    image: [comfy_3, comfy_1, comfy_2],
    description: [
      "Laceless comfort sneakers",
      "Perfect for quick step-ins",
      "Suede upper finish",
    ],
    inStock: true,
  },
  {
    _id: "p004",
    name: "RunnerX Performance",
    category: "Performance",
    price: 8499,
    offerPrice: 7599,
    image: [runner_img_3, runner_img_1, runner_img_2, runner_img_4],
    description: [
      "Built for performance and grip",
      "Breathable and lightweight",
      "Sport ready build",
    ],
    inStock: true,
  },
  {
    _id: "p005",
    name: "Urban Luxe Casual",
    category: "Lifestyle",
    price: 6499,
    offerPrice: 5799,
    image: [urban_img],
    description: [
      "Everyday comfort meets style",
      "Foam-padded footbed",
      "Minimalist luxury look",
    ],
    inStock: true,
  },
  {
    _id: "p006",
    name: "Luxe Limited Blackout",
    category: "Luxury",
    price: 11999,
    offerPrice: 9999,
    image: [blackout_img],
    description: [
      "Exclusive collab drop",
      "Premium grade material",
      "For collectors and enthusiasts",
    ],
    inStock: true,
  },
  {
    _id: "p007",
    name: "Mini Hype Kids",
    category: "Kids",
    price: 3499,
    offerPrice: 2999,
    image: [hype_img],
    description: [
      "Soft padded comfort for kids",
      "Colorful and stylish",
      "Available in multiple sizes",
    ],
    inStock: true,
  },
];
export const dummyAddress = [
  {
    _id: "addr001",
    firstName: "Sandip",
    lastName: "Sarode",
    email: "sandip@thryluxe.com",
    street: "Luxe Lane 42",
    city: "Mumbai",
    state: "Maharashtra",
    zipcode: 400001,
    country: "IN",
    phone: "9876543210",
  },
];

export const dummyOrders = [
  {
    _id: "67e2589a8f87e63366786400",
    userId: "67b5880e4d09769c5ca61644",
    items: [
      {
        product: dummyProducts[3],
        quantity: 2,
        _id: "67e2589a8f87e63366786401",
      },
    ],
    amount: 89,
    address: dummyAddress[0],
    status: "Order Placed",
    paymentType: "Online",
    isPaid: true,
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
  },
  {
    _id: "67e258798f87e633667863f2",
    userId: "67b5880e4d09769c5ca61644",
    items: [
      {
        product: dummyProducts[0],
        quantity: 1,
        _id: "67e258798f87e633667863f3",
      },
      {
        product: dummyProducts[1],
        quantity: 1,
        _id: "67e258798f87e633667863f4",
      },
    ],
    amount: 43,
    address: dummyAddress[0],
    status: "Order Placed",
    paymentType: "COD",
    isPaid: false,
    createdAt: "2025-03-25T07:17:13.068Z",
    updatedAt: "2025-03-25T07:17:13.068Z",
  },
];
