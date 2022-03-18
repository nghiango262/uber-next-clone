This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.



## Install tailwind for project
> npm install -D tailwindcss postcss autoprefixer
> npx tailwindcss init -p

- Add the paths to all of your template files in your tailwind.config.js file.
```js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

- Add the Tailwind directives to your CSS
to your ./styles/globals.css file
```js
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- Để sử dụng tailwindcss dưới dạng styled components ta cài đặt thêm thư viện: 'tailwind-styled-components'
> npm i -D tailwind-styled-components
Tham khảo thêm tại trang: https://www.npmjs.com/package/tailwind-styled-components

## Một số kiến thức về tailwindcss
- Background Color:
	```sh
	  bg-[màu]-[độ sáng cảu màu]
	  bg-opacity-[cấp độ trong suốt]
	```

    Ví dụ: 
		"bg-blue-500"
     	"bg-opacity-500"

    - Option for responsive
    Ví dụ: class="bg-blue-500 md:bg-green-500"
    Tương tự cho các action như HOVER, FOCUS:
	Ví dụ: class="bg-blue-500 hover:bg-green-500"
    
    - Khi scroll có một số class điều khiển cách mà background images thể hiện:
  "bg-fixed": hình bg sẽ được fixed với viewport khi scroll
  "bg-local": nội dung và hình ảnh bg đều chạy khi scroll
  "bg-scroll": content scroll còn hình ảnh giữ nguyên
  Tham khảo link: https://tailwindcss.com/docs/background-attachment 

   - Background-position
   - background-repeat

- BORDER class:
```html

<div class="flex h-screen align-items justify-items">
	<div class="">
	</div>
</div>
```

### Responsive
'sm'			640px		'@media (min-width: 640px) { ... }'
'md'			768px		'@media (min-width: 768px) { ... }'
'lg' 			1024px			'@media (min-width: 1024px) { ... }'
'xl'			1280px		'@media (min-width: 1280px) { ... }'
'2xl'			1536px			'@media (min-width: 1536px) { ... }'

ex:
```html

	<div class="bg-blue-200 sm:bg-red-200 md:bg-yellow-300 lg:bg-green-400 xl:bg-orange-200">
		ABC
	</div>
```

