

export default function MainLayout({children}: {children: React.ReactNode}) {
    return (
        <div className="border-2 border-red-500 p-4 mx-auto max-w-7xl ">
            <h1>this is main layout</h1>
            <header></header>
            <main>

            {children}
            </main>
            <footer>

            </footer>
        </div>
    )
}