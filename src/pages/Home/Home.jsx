import React, { useEffect, useState } from 'react';
import StarRatings from 'react-star-ratings';
import Header from '../../components/Header/Header';
import { getCategories } from '../../services/category.service';
import { getProducts } from '../../services/product.service';


const Home = () => {

    const [categories, setCategories] = useState([]);
    const [topFeaturedProducts, setTopFeaturedProducts] = useState([]);

    useEffect(() => {
        const loadAllTopProduct = async () => {
            const { data, status } = await getProducts();
            if (status === 200) {
                setTopFeaturedProducts(data.results);
            }
        };
        loadAllTopProduct();
    }, [])

    useEffect(() => {
        const loadAllCategories = async () => {
            const response = await getCategories()
            setCategories(response.data.results)
        };
        loadAllCategories()
    }, [])


    return (
        <div className='flex flex-col min-h-screen'>
            <Header />
            <div className='p-10 flex-1 bg-[#eeeeee]'>
                <div className='mt-8'>
                    <div className='flex flex-col'>
                        <span className='w-fit text-sm rounded-md px-3 py-1 bg-blue-primary text-[13px] text-white'>Shop by</span>
                        <h2 className='mt-1 font-medium text-2xl'>Categories</h2>
                    </div>
                    <ul className='flex overflow-x-auto my-4 select-none'>
                        {categories.map(category => (
                            <li className='mx-4 px-4 py-1 rounded-md bg-white hover:bg-orange-primary hover:cursor-pointer hover:text-white' key={category.id}>
                                <div className='flex flex-col h-fit'>
                                    <div className='flex p-2'>
                                        <img alt={category.name} className='block h-12 m-auto aspect-square' src={category.iconLink} />
                                    </div>
                                    <h5 className='uppercase text-center'>{category.name}</h5>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='mt-8'>
                    <div className='flex flex-col'>
                        <span className='w-fit text-sm rounded-md px-3 py-1 bg-blue-primary text-[13px] text-white'>For you</span>
                        <h2 className='mt-1 font-medium text-2xl'>Top Featured Products</h2>
                    </div>
                    <ul className='flex flex-wrap my-4'>
                        {topFeaturedProducts?.map(product => (
                            <li
                                key={product.id}
                                className="xl:w-1/5 xl:p-5 lg:w-1/4   md:w-1/3 sm:w-1/2 sm:p-3 p-4 "
                            >
                                <div className='xl:p-5 p-4 bg-white rounded-lg w-full'>
                                    <div className='w-full aspect-square select-none relative'>
                                        <span className='absolute top-2 left-2 px-3 text-xs rounded text-white py-1 bg-blue-primary'>3% OFF</span>
                                        <img className='block w-full h-full object-cover rounded-lg overflow-hidden' src={product?.images[0]} alt="product" />
                                    </div>
                                    <div className='mt-2'>
                                        <h2 className='p-1 truncate overflow-hidden font-semibold text-base'>{product.name}</h2>
                                        <div className='flex justify-between items-end'>
                                            <div>
                                                <StarRatings
                                                    starDimension='25px'
                                                    starSpacing='0px'
                                                    starRatedColor='#ffd800'
                                                    rating={2.4}
                                                    svgIconViewBox='0 0 24 24'
                                                    svgIconPath='M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z'
                                                />
                                                <p className='p-1 text-gray-primary'>(34 reviews)</p>
                                            </div>
                                            <div className='flex flex-col items-end'>
                                                <span className='line-through text-base text-[#7e7e7e] font-medium'>$320.00</span>
                                                <span className='text-xl text-blue-primary font-semibold'>$320.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Home