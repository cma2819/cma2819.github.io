import Image from 'next/image';

export const QrCode = () => {
  return (
    <Image
      alt='QR Code to here'
      src='/qrcode_card.png'
      height={72}
      width={72}
    />
  );
};