/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html" , "./public/JS/*.js"],
  theme: {
    extend: {},
    screens :{
      
      t1: "  768px ",
      // => @media (min-width: 768px) 

      t2: "1024px ",
      // => @media (min-width:1024px) 

      t3: " 800px ",
      // => @media (min-width:800px) 

      d1: " 1300px"


    }
  },
  plugins: [],
}

