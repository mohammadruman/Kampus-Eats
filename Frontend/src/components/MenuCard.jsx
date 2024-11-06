import React from 'react'

const MenuCard = () => {
  return (
    <div className="w-[2700px] max-h-fit py-5 mx-2 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-4 rounded-2xl">
      <div className="border-0 border-gray-400 rounded-lg">
        <div className="bg-white hover:shadow-2xl shadow-gray-500">
          <div className="pt-4">
            <img className=" rounded-lg object-cover ml-[25%]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBFCimCM1wFvb3FZQOZH_j5ta4Qd2SlNj2vg&s" alt="" />
          </div>
          <div className="my-4">
            <span className="text-xl font-medium">Classic Burger</span>
          </div>
          <div className="pb-2">
            <p>Juicy beaf patty with fresh ingredients.</p>
          </div>
          <div className="flex items-center justify-evenly p-4">
            <p className="font-semibold">$8.99</p>
            <button className="px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">Add to Cart</button>
          </div>
        </div>
      </div>

      <div className="border-0 border-gray-400 rounded-2xl">
        <div className="bg-white hover:shadow-2xl shadow-gray-500">
          <div className="pt-4">
            <img className=" rounded-lg object-cover ml-[25%]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJG-36zDlZ9OspqaHUck0YlAcU3wEqUorErg&s" alt="" />
          </div>
          <div className="my-4">
            <span className="text-xl font-medium">Garden Salad</span>
          </div>
          <div className="pb-2">
            <p>Crisp greens with a hint of lemon.</p>
          </div>
          <div className="flex items-center justify-evenly p-4">
            <p className="font-semibold">$5.49</p>
            <button className="px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">Add to Cart</button>
          </div>
        </div>
      </div>

      <div className="border-0 border-gray-400 rounded-lg">
        <div className="bg-white hover:shadow-2xl shadow-gray-500">
          <div className="pt-4">
            <img className=" rounded-lg object-cover ml-[25%] h-[225px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSesw2XM-agQdLD9pouvHtpKKmOEkULJIl2w&s" alt="" />
          </div>
          <div className="my-4">
            <span className="text-xl font-medium">Pepperoni Pizza</span>
          </div>
          <div className="pb-2">
            <p>Cheesy pizza topped with spicy pepperoni.</p>
          </div>
          <div className="flex items-center justify-evenly p-4">
            <p className="font-semibold">$12.99</p>
            <button className="px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">Add to Cart</button>
          </div>
        </div>
      </div>

      <div className="border-0 border-gray-400 rounded-lg">
        <div className="bg-white hover:shadow-2xl shadow-gray-500">
          <div className="pt-4">
            <img className=" rounded-lg object-cover ml-[25%]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRj4fbDzlSwNqWoBrAIR5tG2DH7S2u4I9qTg&s" alt="" />
          </div>
          <div className="my-4">
            <span className="text-xl font-medium">Garlic Noodles</span>
          </div>
          <div className="pb-2">
            <p>Stir-fried noodles tossed in a savory garlic sauce.</p>
          </div>
          <div className="flex items-center justify-evenly p-4">
            <p className="font-semibold">$8.59</p>
            <button className="px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">Add to Cart</button>
          </div>
        </div>
      </div>

      <div className="border-0 border-gray-400 rounded-lg">
        <div className="bg-white hover:shadow-2xl shadow-gray-500">
          <div className="pt-4">
            <img className=" rounded-lg object-cover ml-[30%] h-[223px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsUBt07j9lqOJA97AP6mId-lHHpICUFe8QnA&s" alt="" />
          </div>
          <div className="my-4">
            <span className="text-xl font-medium">Aglie Olio Pasta</span>
          </div>
          <div className="pb-2">
            <p>Pasta in olive oil, garlic, chilli flakes, and fresh herbs.</p>
          </div>
          <div className="flex items-center justify-evenly p-4">
            <p className="font-semibold">$13.79</p>
            <button className="px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">Add to Cart</button>
          </div>
        </div>
      </div>

      <div className=" border-0 border-gray-400 rounded-lg">
        <div className="bg-transparent hover:shadow-2xl shadow-gray-500">
          <div className="pt-4">
            <img className=" rounded-lg object-cover ml-[31%] h-[223px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRISC4JImtLHkBgIhc_RCu44fsnzeFmobhQ1w&s" alt="" />
          </div>
          <div className="my-4">
            <span className="text-xl font-medium">Lemon Iced Tea</span>
          </div>
          <div className="pb-2">
            <p>Refreshing iced tea with zesty lemon flavor.</p>
          </div>
          <div className="flex items-center justify-evenly p-4">
            <p className="font-semibold">$10.99</p>
            <button className="px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">Add to Cart</button>
          </div>
        </div>
      </div>

      <div className=" border-0 border-gray-400 rounded-lg">
        <div className="bg-transparent hover:shadow-2xl shadow-gray-500">
          <div className="pt-4">
            <img className=" rounded-lg object-cover ml-[30%] " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIIdfhNHFpts2r5tUFzCJIHyLC7XRIF5dV8g&s" alt="" />
          </div>
          <div className="my-4">
            <span className="text-xl font-medium">Crispy French Fries</span>
          </div>
          <div className="pb-2">
            <p>Crispy fries seasoned for ultimate crunch.</p>
          </div>
          <div className="flex items-center justify-evenly p-4">
            <p className="font-semibold">$14.99</p>
            <button className="px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">Add to Cart</button>
          </div>
        </div>
      </div>

      <div className=" border-0 border-gray-400 rounded-lg">
        <div className="bg-transparent hover:shadow-2xl shadow-gray-500">
          <div className="pt-4">
            <img className=" rounded-lg object-cover ml-[31%] h-[249px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSIdTQP0ZJFydFKCN7E2UvpmWwmYQ6dFdEgA&s" alt="" />
          </div>
          <div className="my-4">
            <span className="text-xl font-medium">Ice Cream Sundae</span>
          </div>
          <div className="pb-2">
            <p>Creamy ice cream topped with syrup, nuts, and cherries.</p>
          </div>
          <div className="flex items-center justify-evenly p-4">
            <p className="font-semibold">$6.99</p>
            <button className="px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">Add to Cart</button>
          </div>
        </div>
      </div>

      <div className=" border-0 border-gray-400 rounded-lg">
        <div className="bg-transparent hover:shadow-2xl shadow-gray-500">
          <div className="pt-4">
            <img className=" rounded-lg object-cover ml-[31%] h-[249px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3N0Yq7z-ZBBumwhqUdr_gTw6SVAJxc64oxA&s" alt="" />
          </div>
          <div className="my-4">
            <span className="text-xl font-medium">Garlic Bread</span>
          </div>
          <div className="pb-2">
            <p>Toasty bread infused with garlic butter, perfectly crispy</p>
          </div>
          <div className="flex items-center justify-evenly p-4">
            <p className="font-semibold">$17.59</p>
            <button className="px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">Add to Cart</button>
          </div>
        </div>
      </div>


    </div>
  )
}

export default MenuCard
