import { ClientComponent1 } from "../components/ClientComponent1";

export default async function HomePage() {
  return (
    <div>
      <ClientComponent1 />
    </div>
  );
}

export const getConfig = async () => {
  return {
    render: "static",
  } as const;
};
