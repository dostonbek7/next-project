import InvoiceList from "@/components/InvoiceList";
import InvoiceTop from "@/components/InvoiceTop";

async function getData(url) {
  const req = await fetch(url);
  const data = await req.json();
  return data;
}

export default async function Home() {
  const invoice = await getData("http://localhost:4000/data");
  return (
    <div>
      <InvoiceTop/>
      <InvoiceList invoice={invoice} />
    </div>
  );
}
