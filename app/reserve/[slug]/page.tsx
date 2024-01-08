
import Header from "./components/Header";
import Form from "./components/Form";

export default function Reserve() {
  return (
    <div className="border-t h-screen">
      <div className="py-9 w-3/5 m-auto">
        <Header />
        <Form />
      </div>
    </div>
  )
}

export const metadata = {
  title: 'Restaurant HardcodeName Reserve | Open Table',
  description: 'Restaurant HardcodeName reserve page description',
};