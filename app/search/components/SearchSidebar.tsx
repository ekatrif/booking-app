import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

const fetchCuisines = async () => {
  return await prisma.cuisine.findMany({
    select: {
      id: true,
      name: true,
    }
  });
}

const fetchLocations = async () => {
  return await prisma.location.findMany({
    select: {
      id: true,
      name: true,
    }
  });
}

export default async function SearchSidebar() {
  const cuisines = await fetchCuisines();
  const locations = await fetchLocations();

  return (
    <div className="w-1/5">
    <div className="border-b pb-4">
      <h1 className="mb-2">Region</h1>
      {locations.map(location => (
        <p key={location.id} className="font-light text-reg capitalize">{location.name}</p>
      ))}
    </div>
    <div className="border-b pb-4 mt-3">
      <h1 className="mb-2">Cuisine</h1>
      {cuisines.map(cuisine => (
        <p key={cuisine.id} className="font-light text-reg capitalize">{cuisine.name}</p>
      ))}
    </div>
    <div className="mt-3 pb-4">
      <h1 className="mb-2">Price</h1>
      <div className="flex">
        <button className="border w-full text-reg font-light rounded-l p-2">
          $
        </button>
        <button
          className="border-r border-t border-b w-full text-reg font-light p-2"
        >
          $$
        </button>
        <button
          className="border-r border-t border-b w-full text-reg font-light p-2 rounded-r"
        >
          $$$
        </button>
      </div>
    </div>
  </div>
  )
}