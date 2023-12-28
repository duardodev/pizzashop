import { Metadata } from 'next';
import Checkout from './checkout';

export const metadata: Metadata = {
  title: 'Checkout'
};

export default function Page() {
  return <Checkout />;
}
