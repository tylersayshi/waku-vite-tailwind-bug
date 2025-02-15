import { ClientComponent1 } from '../components/ClientComponent1';
import { ServerComponent1 } from '../components/ServerComponent1';

export default async function HomePage() {
    
  return (
    <div>
        <ServerComponent1/>
        <br/>
        <ClientComponent1/>
    </div>
  );
}

export const getConfig = async () => {
    return {
        render: 'static',
    } as const;
};
