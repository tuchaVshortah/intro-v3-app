const getData = async () => {
  await new Promise((resolve) => setTimeout(() => resolve(0), 1000));
  return { data: [1, 2, 3] };
}

export default async function Home() {
  const data = await getData();
  console.log(data);

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <h1 className="text-4xl">Hello World</h1>
    </div>
  )
}