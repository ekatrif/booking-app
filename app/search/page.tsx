import Header from "./components/Header";
import SearchSidebar from "./components/SearchSidebar";
import RestaurantCard from "./components/RestaurantCard";
import { PrismaClient } from "@prisma/client";
import { RestaurantCardType } from "../page";

const prisma = new PrismaClient();

const fetchRestaurants = async (city: string) => {
  const select = {
    id: true,
    name: true,
    main_image: true,
    cuisine: true,
    location: true,
    price: true,
    slug: true,
  }

  if (!city) return await prisma.restaurant.findMany({
    select
  });

  return await prisma.restaurant.findMany({
    where: {
      location: {
        name: {
          equals: city
        }
      }
    },
    select
  });
}

export default async function Search({
  searchParams
}: {
  searchParams: {
    city: string
  }
}) {
  const restaurants = await fetchRestaurants(searchParams.city.toLowerCase());
  return (
    <>
      <Header />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <SearchSidebar />
        <div className="w-5/6">
          {restaurants.length ? restaurants.map(restaurant => <RestaurantCard key={restaurant.id}
          restaurant={restaurant} /> ): <p>Sorry, no restaurants found in this area.</p>}
        </div>
      </div>
    </>
  )
}

export const metadata = {
  title: 'Search | Open Table',
  description: 'Search page description',
};

