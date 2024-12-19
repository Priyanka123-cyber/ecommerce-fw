
export const navigation = {
  categories: [
    {
      id: 'women',
      name: 'Women',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: 'https://cdn.pixelbin.io/v2/black-bread-289bfa/-6ZJSm/t.resize(w:257)/clarks-category/1708508181Clarks_Top_Banner_Internal_279_x_279_210224_2.webp',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Smart Styles',
          href: '#',
          imageSrc: 'https://lscdn.azureedge.net/biz-live/img/11417071-11417071-8722cc7e.jpeg',
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
      ],
      sections: [
        {
          id: 'footwear',
          name: 'Footwear',
          items: [
            { name: 'Heels', id: "heels", href: `{women/footwear/heels}` },
            { name: 'Flats', id: "flats", href: `{women/footwear/flats}` },
            { name: 'Casual Shoes', id: "casual_shoes", href: `{women/footwear/casual_shoes}` },
            { name: 'Sports Shoes', id: "sports_shoes", href: `{women/footwear/sports_shoes}` },
            { name: 'Ethnic Footwear', id: "ethnic", href: `{women/footwear/ethnic}` },
            { name: 'Boots', id: "boots", href: `{women/footwear/boots}` },

          ],
        },

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
          imageSrc: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcShyMYWatLDmAY3sMnu5G29kz3VQdzKyqCBQO1sImgDUJwl4VUXS18ExdQCNDheHJxX3Y6VtIG2WCirFxU_adaoYa2YTP6OtfQZms9c6NCZo3YNbwNvWxQT&usqp=CAE',
          imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
        },
        {
          name: 'Formal Styles',
          href: '#',
          imageSrc: 'https://th.bing.com/th/id/OIP.xI7e-qA9bwDX1Rk_mlNVTgHaEl?rs=1&pid=ImgDetMain',
          imageAlt:
            'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
        },
      ],
      sections: [
        {
          id: 'footwear',
          name: 'Footwear',
          items: [
            { name: 'Office Wear', id: "office_wear", href: `{men/footwear/office_wear}` },
            { name: 'Casual Shoes', id: "casual_shoes", href: `{men/footwear/casual_shoes}` },
            { name: 'Sports Shoes', id: "office_wear", href: `{men/footwear/sports_shoes}` },
            { name: 'Ethnic Footwear', id: "ethnic_footwear", href: `{men/footwear/ethnic_footwear}` },
            { name: 'Boots', id: "boots", href: `{men/footwear/boots}` },
            { name: 'Sandals and Slides', id: "sandals", href: `{men/footwear/sandals}` },
          ],
        },

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

}
