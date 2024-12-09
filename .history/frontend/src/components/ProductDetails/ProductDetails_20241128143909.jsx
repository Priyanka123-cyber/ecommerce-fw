

// import { useState } from 'react'
// import { StarIcon } from '@heroicons/react/20/solid'
// import { Radio, RadioGroup } from '@headlessui/react'
// import { Box, Button, Grid2, LinearProgress, Rating } from '@mui/material'
// import ProductReviewCard from './ProductReviewCard'
// import { mens_kurta } from '../../data/menKurta'
// import HomeSectionCard from '../HomeSectionCard'




// const product = {
//   name: 'Basic Tee 6-Pack',
//   price: '$192',
//   href: '#',
//   breadcrumbs: [
//     { id: 1, name: 'Men', href: '#' },
//     { id: 2, name: 'Clothing', href: '#' },
//   ],
//   images: [
//     {
//       src: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
//       alt: 'Two each of gray, white, and black shirts laying flat.',
//     },
//     {
//       src: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
//       alt: 'Model wearing plain black basic tee.',
//     },
//     {
//       src: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
//       alt: 'Model wearing plain gray basic tee.',
//     },
//     {
//       src: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
//       alt: 'Model wearing plain white basic tee.',
//     },
//   ],
//   colors: [
//     { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
//     { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
//     { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
//   ],
//   sizes: [
//     { name: 'XXS', inStock: false },
//     { name: 'XS', inStock: true },
//     { name: 'S', inStock: true },
//     { name: 'M', inStock: true },
//     { name: 'L', inStock: true },
//     { name: 'XL', inStock: true },
//     { name: '2XL', inStock: true },
//     { name: '3XL', inStock: true },
//   ],
//   description:
//     'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
//   highlights: [
//     'Hand cut and sewn locally',
//     'Dyed with our proprietary colors',
//     'Pre-washed & pre-shrunk',
//     'Ultra-soft 100% cotton',
//   ],
//   details:
//     'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
// }
// const reviews = { href: '#', average: 4, totalCount: 117 }

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

// export default function ProductDetails() {
//   const [selectedColor, setSelectedColor] = useState(product.colors[0])
//   const [selectedSize, setSelectedSize] = useState(product.sizes[2])

//   return (
//     <div className="bg-white lg:px-20">
//       <div className="pt-6">
//         <nav aria-label="Breadcrumb">
//           <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
//             {product.breadcrumbs.map((breadcrumb) => (
//               <li key={breadcrumb.id}>
//                 <div className="flex items-center">
//                   <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
//                     {breadcrumb.name}
//                   </a>
//                   <svg
//                     fill="currentColor"
//                     width={16}
//                     height={20}
//                     viewBox="0 0 16 20"
//                     aria-hidden="true"
//                     className="h-5 w-4 text-gray-300"
//                   >
//                     <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
//                   </svg>
//                 </div>
//               </li>
//             ))}
//             <li className="text-sm">
//               <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
//                 {product.name}
//               </a>
//             </li>
//           </ol>
//         </nav>
//         <section className='grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 px-4 pt-10'>
//           {/* Image gallery */}
//           <div className="flex flex-col items-center">
//             <div className='overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem]'>
//               <img
//                 alt={product.images[0].alt}
//                 src={product.images[0].src}
//                 // className="h-full w-full object-cover object-center"
//                 className="hidden aspect-[3/4] size-full rounded-lg object-cover lg:block"
//               />
//             </div>
//             <div className="flex flex-wrap space-x-5 justify-center">
//               {product.images.map((item) => <div className='aspect-h-2 aspect-w-3 overflow-hidden rounded-lg max-w-[5rem] max-h-[5rem] mt-4'>
//                 <img
//                   alt={item.alt}
//                   src={item.src}
//                   //   className='h-full w-full object-cover object-center'
//                   className="aspect-[3/2] size-full rounded-lg object-cover"
//                 />
//               </div>)}

//             </div>

//           </div>
//           {/* Product info */}
//           <div className="lg:col-span-1 maxt-auto max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8
//         lg:pb-24">
//             <div className="lg:col-span-2 ">
//               <h1 className="text-lg lg:text-xl font-semibold text-gray-900">Universal Outfit
//               </h1>
//               <h1 className="text-lg lg:text-xl text-gray-900 opacity-60 pt-1">Casual Puff Sleeves
//                 Solid Women White Top</h1>
//             </div>

//             {/* Options */}
//             <div className="mt-4 lg:row-span-3 lg:mt-0">
//               <h2 className="sr-only">Product information</h2>
//               <div className='flex space-x-5 items-center text-lg lg:text-xl text-gray-900 mt-6'>
//                 <p className='font-semibold'>₹199 </p>
//                 <p className='opacity-50 line-through'>₹211</p>
//                 <p className='text-green-600 font-semibold'>5% off</p>
//               </div>

//               {/* Reviews */}
//               <div className="mt-6">
//                 <div className='flex items-center space-x-3'>
//                   <Rating name="read-only" value={5.5} readOnly />
//                   <p className='opacity-50 text-sm'>5645 ratings</p>
//                   <p className='ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500'>346 reviews</p>
//                 </div>

//               </div>

//               <form className="mt-10">


//                 {/* Sizes */}
//                 <div className="mt-10">
//                   <div className="flex items-center justify-between">
//                     <h3 className="text-sm font-medium text-gray-900">Size</h3>

//                   </div>

//                   <fieldset aria-label="Choose a size" className="mt-4">
//                     <RadioGroup
//                       value={selectedSize}
//                       onChange={setSelectedSize}
//                       className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4"
//                     >
//                       {product.sizes.map((size) => (
//                         <Radio
//                           key={size.name}
//                           value={size}
//                           disabled={!size.inStock}
//                           className={classNames(
//                             size.inStock
//                               ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
//                               : 'cursor-not-allowed bg-gray-50 text-gray-200',
//                             'group relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none data-[focus]:ring-2 data-[focus]:ring-indigo-500 sm:flex-1 sm:py-6',
//                           )}
//                         >
//                           <span>{size.name}</span>
//                           {size.inStock ? (
//                             <span
//                               aria-hidden="true"
//                               className="pointer-events-none absolute -inset-px rounded-md border-2 border-transparent group-data-[focus]:border group-data-[checked]:border-indigo-500"
//                             />
//                           ) : (
//                             <span
//                               aria-hidden="true"
//                               className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-400"
//                             >
//                               <svg
//                                 stroke="currentColor"
//                                 viewBox="0 0 100 100"
//                                 preserveAspectRatio="none"
//                                 className="absolute inset-0 size-full stroke-2 text-gray-200"
//                               >
//                                 <line x1={0} x2={100} y1={100} y2={0} vectorEffect="non-scaling-stroke" />
//                               </svg>
//                             </span>
//                           )}
//                         </Radio>
//                       ))}
//                     </RadioGroup>
//                   </fieldset>
//                 </div>

//                 <Button variant='contained' sx={{ px: "2rem", py: "1rem", bgcolor: "#9155fd" }}>Add to Cart</Button>
//               </form>
//             </div>

//             <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
//               {/* Description and details */}
//               <div>
//                 <h3 className="sr-only">Description</h3>

//                 <div className="space-y-6">
//                   <p className="text-base text-gray-900">{product.description}</p>
//                 </div>
//               </div>

//               <div className="mt-10">
//                 <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

//                 <div className="mt-4">
//                   <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
//                     {product.highlights.map((highlight) => (
//                       <li key={highlight} className="text-gray-400">
//                         <span className="text-gray-600">{highlight}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>

//               <div className="mt-10">
//                 <h2 className="text-sm font-medium text-gray-900">Details</h2>

//                 <div className="mt-4 space-y-6">
//                   <p className="text-sm text-gray-600">{product.details}</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Rating and Review */}
//         <section>
//           <h1 className='font-semibold text-lg pb-4'> Recent Review and Rating</h1>
//           <div className='border p-5'>
//             <Grid2 container spacing={50}>
//               <Grid2 item xs={7}>
//                 <div className='space-y-5'>
//                   {[1, 1, 1].map((item) => <ProductReviewCard />)}

//                 </div>
//               </Grid2>
//               <Grid2 item xs={5}>
//                 <h1 className='text-xl font-semibold pb-2'>Product Ratings</h1>
//                 <div className='flex items-center space-x-3'>
//                   <Rating value={4.6} precision={0.5} readOnly />
//                   <p className='opacity-60'>5675 ratings</p>
//                 </div>
//                 <Box className='mt-5 space-y-3'>
//                   <Grid2 container  alignItems="center" gap={2}>
//                     <Grid2 item xs={2}>
//                       <p>Excellent</p>
//                     </Grid2>
//                     <Grid2 item xs={7}>
//                         <LinearProgress variant="determinate" color="success" value={40} sx={{bgcolor:"#d0d0d0", borderRadius:4, height:7}} />
//                     </Grid2>
//                   </Grid2>
//                   <Grid2 container  alignItems="center" gap={2}>
//                     <Grid2 item xs={2}>
//                       <p>Very Good</p>
//                     </Grid2>
//                     <Grid2 item xs={7}>
//                         <LinearProgress variant="determinate" color="success" value={30} sx={{bgcolor:"#d0d0d0", borderRadius:4, height:7}} />
//                     </Grid2>
//                   </Grid2>
//                   <Grid2 container  alignItems="center" gap={2}>
//                     <Grid2 item xs={2}>
//                       <p>Good</p>
//                     </Grid2>
//                     <Grid2 item xs={7}>
//                         <LinearProgress variant="determinate" className='bg-yellow-300' value={25} sx={{bgcolor:"#d0d0d0", borderRadius:4, height:7}} />
//                     </Grid2>
//                   </Grid2>
//                   <Grid2 container  alignItems="center" gap={2}>
//                     <Grid2 item xs={2}>
//                       <p>Average</p>
//                     </Grid2>
//                     <Grid2 item xs={7}>
//                         <LinearProgress variant="determinate" color="warning" value={20} sx={{bgcolor:"#d0d0d0", borderRadius:4, height:7}} />
//                     </Grid2>
//                   </Grid2>
//                   <Grid2 container  alignItems="center" gap={2}>
//                     <Grid2 item xs={2}>
//                       <p>Poor</p>
//                     </Grid2>
//                     <Grid2 item xs={7}>
//                         <LinearProgress variant="determinate" color="error" value={15} sx={{bgcolor:"#d0d0d0", borderRadius:4, height:7}} />
//                     </Grid2>
//                   </Grid2>
//                 </Box>
//               </Grid2>
//             </Grid2>
//           </div>
          

//         </section>
//         {/* Similar products */}
//  <section className='pt-10'>
//   <h1 className='py-5 text-xl font-bold'>Similar Products</h1>
//   <div className='flex flex-wrap space-y-5'>
//           {mens_kurta.map((item)=> <HomeSectionCard product={item}/> ) }
//   </div>

//  </section>

//       </div>
//     </div>
//   )
// }


// import { useState } from 'react'
// import { StarIcon } from '@heroicons/react/20/solid'
// import { Radio, RadioGroup } from '@headlessui/react'
// import { Box, Button, Grid, LinearProgress, Rating } from '@mui/material'
// import ProductReviewCard from './ProductReviewCard'
// import { mens_kurta } from '../../data/menKurta'
// import HomeSectionCard from '../HomeSectionCard'

// const product = {
//   name: 'Basic Tee 6-Pack',
//   price: '₹192',
//   href: '#',
//   breadcrumbs: [
//     { id: 1, name: 'Men', href: '#' },
//     { id: 2, name: 'Clothing', href: '#' },
//   ],
//   images: [
//     {
//       src: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
//       alt: 'Two each of gray, white, and black shirts laying flat.',
//     },
//     {
//       src: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
//       alt: 'Model wearing plain black basic tee.',
//     },
//     {
//       src: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
//       alt: 'Model wearing plain gray basic tee.',
//     },
//     {
//       src: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
//       alt: 'Model wearing plain white basic tee.',
//     },
//   ],
//   colors: [
//     { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
//     { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
//     { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
//   ],
//   sizes: [
//     { name: 'XXS', inStock: false },
//     { name: 'XS', inStock: true },
//     { name: 'S', inStock: true },
//     { name: 'M', inStock: true },
//     { name: 'L', inStock: true },
//     { name: 'XL', inStock: true },
//     { name: '2XL', inStock: true },
//     { name: '3XL', inStock: true },
//   ],
//   description:
//     'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
//   highlights: [
//     'Hand cut and sewn locally',
//     'Dyed with our proprietary colors',
//     'Pre-washed & pre-shrunk',
//     'Ultra-soft 100% cotton',
//   ],
//   details:
//     'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
// }

// export default function ProductDetails() {
//   const [selectedColor, setSelectedColor] = useState(product.colors[0])
//   const [selectedSize, setSelectedSize] = useState(product.sizes[2])

//   return (
//     <div className="bg-white lg:px-20">
//       <div className="pt-6">
//         {/* Breadcrumbs */}
//         <nav aria-label="Breadcrumb">
//           <ol role="list" className="flex max-w-2xl space-x-2 px-4 lg:max-w-7xl">
//             {product.breadcrumbs.map((breadcrumb) => (
//               <li key={breadcrumb.id}>
//                 <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
//                   {breadcrumb.name}
//                 </a>
//               </li>
//             ))}
//           </ol>
//         </nav>

//         {/* Product Details Section */}
//         <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 px-4 pt-10">
//           {/* Image Gallery */}
//           <div className="flex flex-col items-center">
//             <div className="overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem]">
//               <img
//                 alt={product.images[0].alt}
//                 src={product.images[0].src}
//                 className="rounded-lg object-cover"
//               />
//             </div>
//             <div className="flex flex-wrap justify-center space-x-5 mt-4">
//               {product.images.map((item, index) => (
//                 <div key={index} className="overflow-hidden rounded-lg max-w-[5rem] max-h-[5rem]">
//                   <img alt={item.alt} src={item.src} className="rounded-lg object-cover" />
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Product Info */}
//           <div>
//             <h1 className="text-lg font-semibold text-gray-900">{product.name}</h1>
//             <div className="flex items-center mt-6 space-x-5">
//               <p className="font-semibold">₹199</p>
//               <p className="opacity-50 line-through">₹211</p>
//               <p className="text-green-600 font-semibold">5% off</p>
//             </div>

//             {/* Sizes */}
//             <div className="mt-6">
//               <h3 className="text-sm font-medium text-gray-900">Size</h3>
//               <RadioGroup
//                 value={selectedSize}
//                 onChange={setSelectedSize}
//                 className="grid grid-cols-4 gap-4 mt-4"
//               >
//                 {product.sizes.map((size) => (
//                   <Radio
//                     key={size.name}
//                     value={size}
//                     disabled={!size.inStock}
//                     className={`${
//                       size.inStock ? 'bg-white text-gray-900' : 'bg-gray-50 text-gray-200'
//                     } flex items-center justify-center rounded-md`}
//                   >
//                     {size.name}
//                   </Radio>
//                 ))}
//               </RadioGroup>
//             </div>

//             {/* Add to Cart Button */}
//             <Button variant="contained" sx={{ mt: 4, bgcolor: '#9155fd' }}>
//               Add to Cart
//             </Button>
//           </div>
//         </section>

//         {/* Reviews and Ratings */}
//         <section className="pt-10">
//           <h1 className="font-semibold text-lg pb-4">Recent Reviews</h1>
//           <Grid container spacing={4}>
//             <Grid item xs={7}>
//               {[...Array(3)].map((_, index) => (
//                 <ProductReviewCard key={index} />
//               ))}
//             </Grid>
//             <Grid item xs={5}>
//               <h2 className="text-xl font-semibold">Product Ratings</h2>
//               <Rating value={4.6} precision={0.1} readOnly />
//               <Box mt={4}>
//                 {['Excellent', 'Very Good', 'Good', 'Average', 'Poor'].map((label, index) => (
//                   <Grid container alignItems="center" gap={2} key={index}>
//                     <Grid item xs={2}>
//                       <p>{label}</p>
//                     </Grid>
//                     <Grid item xs={8}>
//                       <LinearProgress value={Math.random() * 100} />
//                     </Grid>
//                   </Grid>
//                 ))}
//               </Box>
//             </Grid>
//           </Grid>
//         </section>

//         {/* Similar Products */}
//         <section className="pt-10">
//           <h1 className="py-5 text-xl font-bold">Similar Products</h1>
//           <div className="grid grid-cols-4 gap-4">
//             {mens_kurta.map((item, index) => (
//               <HomeSectionCard product={item} key={index} />
//             ))}
//           </div>
//         </section>
//       </div>
//     </div>
//   )
// }


import { useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { Radio, RadioGroup } from '@headlessui/react'
import { Box, Button, Grid, LinearProgress, Rating } from '@mui/material'
import ProductReviewCard from './ProductReviewCard'
import { mens_kurta } from '../../data/menKurta'
import HomeSectionCard from '../HomeSectionCard'

// Dummy product details
const product = {
  name: 'Basic Tee 6-Pack',
  price: '₹192',
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Men', href: '#' },
    { id: 2, name: 'Clothing', href: '#' },
  ],
  images: [
    { src: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-02-secondary-product-shot.jpg', alt: 'Two each of gray, white, and black shirts laying flat.' },
    { src: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg', alt: 'Model wearing plain black basic tee.' },
    { src: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg', alt: 'Model wearing plain gray basic tee.' },
    { src: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-02-featured-product-shot.jpg', alt: 'Model wearing plain white basic tee.' },
  ],
  colors: [
    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  ],
  sizes: [
    { name: 'XXS', inStock: false },
    { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
    { name: '2XL', inStock: true },
    { name: '3XL', inStock: true },
  ],
  description: 'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options.',
  highlights: [
    'Hand cut and sewn locally',
    'Dyed with our proprietary colors',
    'Pre-washed & pre-shrunk',
    'Ultra-soft 100% cotton',
  ],
  details: 'The 6-Pack includes two black, two white, and two heather gray Basic Tees.',
}

export default function ProductDetails() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState(product.sizes[2])

  // Customizing LinearProgress bar for ratings
  const CustomLinearProgress = ({ value }) => (
    <LinearProgress
      value={value}
      variant="determinate"
      sx={{
        height: 10,
        borderRadius: 5,
        backgroundColor: '#e0e0e0',
        '& .MuiLinearProgress-bar': {
          borderRadius: 5,
          backgroundColor: value >= 80 ? 'green' : value >= 60 ? 'yellow' : 'red',
        },
      }}
    />
  )

  return (
    <div className="bg-white lg:px-20">
      <div className="pt-6">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb">
          <ol role="list" className="flex max-w-2xl space-x-2 px-4 lg:max-w-7xl">
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                  {breadcrumb.name}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* Product Details Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 px-4 pt-10">
          {/* Image Gallery */}
          <div className="flex flex-col items-center">
            <div className="overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem]">
              <img alt={product.images[0].alt} src={product.images[0].src} className="rounded-lg object-cover" />
            </div>
            <div className="flex flex-wrap justify-center space-x-5 mt-4">
              {product.images.map((item, index) => (
                <div key={index} className="overflow-hidden rounded-lg max-w-[5rem] max-h-[5rem]">
                  <img alt={item.alt} src={item.src} className="rounded-lg object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-lg font-semibold text-gray-900">{product.name}</h1>
            <div className="flex items-center mt-6 space-x-5">
              <p className="font-semibold">₹199</p>
              <p className="opacity-50 line-through">₹211</p>
              <p className="text-green-600 font-semibold">5% off</p>
            </div>

            {/* Sizes */}
            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-900">Size</h3>
              <RadioGroup value={selectedSize} onChange={setSelectedSize} className="grid grid-cols-4 gap-4 mt-4">
                {product.sizes.map((size) => (
                  <Radio
                    key={size.name}
                    value={size}
                    disabled={!size.inStock}
                    className={`${
                      size.inStock ? 'bg-white text-gray-900' : 'bg-gray-50 text-gray-200'
                    } flex items-center justify-center rounded-md`}
                  >
                    {size.name}
                  </Radio>
                ))}
              </RadioGroup>
            </div>

            {/* Add to Cart Button */}
            <Button variant="contained" sx={{ mt: 4, bgcolor: '#9155fd' }}>
              Add to Cart
            </Button>
          </div>
        </section>

        {/* Reviews and Ratings */}
        <section className="pt-10">
          <h1 className="font-semibold text-lg pb-4">Recent Reviews</h1>
          <Grid container spacing={4}>
            <Grid item xs={7}>
              {[...Array(3)].map((_, index) => (
                <ProductReviewCard key={index} />
              ))}
            </Grid>
            <Grid item xs={8}>
              <h2 className="text-xl font-semibold">Product Ratings</h2>
              <Rating value={4.6} precision={0.1} readOnly />
              <Box mt={4}>
                {['Excellent', 'Very Good', 'Good', 'Average', 'Poor'].map((label, index) => (
                  <Grid container alignItems="center" gap={2} key={index}>
                    <Grid item xs={2}>
                      <p>{label}</p>
                    </Grid>
                    <Grid item xs={8}>
                      <CustomLinearProgress value={Math.random() * 100} />
                    </Grid>
                  </Grid>
                ))}
              </Box>
            </Grid>
          </Grid>
        </section>

        {/* Similar Products */}
        <section className="pt-10">
          <h1 className="py-5 text-xl font-bold">Similar Products</h1>
          <div className="grid grid-cols-4 gap-4">
            {mens_kurta.map((item, index) => (
              <HomeSectionCard product={item} key={index} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
