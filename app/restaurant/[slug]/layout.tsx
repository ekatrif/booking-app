import Header from "./components/Header";

export default function  ({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
        {children}
      </div>
    </>
  )
}

export const metadata = {
  title: 'Restaurant HardcodeName | Open Table',
  description: 'Restaurant HardcodeName page description',
};