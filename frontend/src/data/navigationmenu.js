
   export const navigation = {
        categories: [
          {
            id: 'women',
            name: 'Women',
            featured: [
              {
                name: 'New Arrivals',
                href: '#',
                imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/mega-menu-category-01.jpg',
                imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
              },
              {
                name: 'Basic Tees',
                href: '#',
                imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/mega-menu-category-02.jpg',
                imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
              },
            ],
            sections: [
              {
                id: 'clothing',
                name: 'clothing',
                items: [
                  { name:'Tops',id:"top", href: `{women/clothing/tops}` },
                  { name: 'Heels', href: '#' },
                  { name: 'Flats', href: '#' },
                  { name: 'Sneakers & Sports Shoes', href: '#' },
                  { name: 'Sandals & Slides', href: '#' },
                  { name: 'Mules & Clogs', href: '#' },
                  { name: 'Slippers', href: '#' },
                  { name: 'Work & Formal Footwear', href: '#' },
                  { name: 'Browse All', href: '#' },
                ],
              },
              // {
              //   id: 'accessories',
              //   name: 'Accessories',
              //   items: [
              //     { name: 'Watches', href: '#' },
              //     { name: 'Wallets', href: '#' },
              //     { name: 'Bags', href: '#' },
              //     { name: 'Sunglasses', href: '#' },
              //     { name: 'Hats', href: '#' },
              //     { name: 'Belts', href: '#' },
              //   ],
              // },
              {
                id: 'brands',
                name: 'Brands',
                items: [
                  { name: 'Nike', href: '#' },
                  { name: 'Adidas', href: '#' },
                  { name: 'Steve Madden', href: '#' },
                  { name: 'Dr. Martens', href: '#' },
                  { name: 'Significant Other', href: '#' },
                ],
              },
            ],
          },
          {
            id: 'men',
            name: 'Men',
            featured: [
              {
                name: 'New Arrivals',
                href: '#',
                imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
                imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
              },
              {
                name: 'Artwork Tees',
                href: '#',
                imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-02-image-card-06.jpg',
                imageAlt:
                  'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
              },
            ],
            sections: [
              {
                id: 'clothing',
                name: 'Clothing',
                items: [
                  { name: 'mens_kurta',id:"mens_kurta", href:`{men/clothing/mens_kurta}`},
                  { name: 'Sneakers', href: '#' },
                  { name: 'Loafers', href: '#' },
                  { name: 'Dress Shoes', href: '#' },
                  { name: 'Casual Shoes', href: '#' },
                  { name: 'Sandals & Slides', href: '#' },
                  { name: 'Slippers', href: '#' },
                  { name: 'Athletic Shoes', href: '#' },
                  { name: 'Browse All', href: '#' },
                ],
              },
              // {
              //   id: 'accessories',
              //   name: 'Accessories',
              //   items: [
              //     { name: 'Watches', href: '#' },
              //     { name: 'Wallets', href: '#' },
              //     { name: 'Bags', href: '#' },
              //     { name: 'Sunglasses', href: '#' },
              //     { name: 'Hats', href: '#' },
              //     { name: 'Belts', href: '#' },
              //   ],
              // },
              {
                id: 'brands',
                name: 'Brands',
                items: [
                  { name: 'Puma', href: '#' },
                  { name: 'Reebok', href: '#' },
                  { name: 'New Balance', href: '#' },
                  { name: 'Vans', href: '#' },
                ],
              },
            ],
          },
        ],
        pages: [
          { name: 'Company', href: '#' },
          { name: 'Stores', href: '#' },
        ],
      }