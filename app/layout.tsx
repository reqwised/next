import '@/app/ui/global.css';
import { fontlus, fontrom } from '@/app/ui/fonts';
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${fontlus.className}`}>{children}
      </body>
    </html>
  );
}