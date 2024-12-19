import '@/app/styles/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <head>
            <title>yoPlan</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0 viewport-fit=cover" />
        </head>
        <body>
        <main
        >{children}</main>

        </body>
        </html>
    );
}
