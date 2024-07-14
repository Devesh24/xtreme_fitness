export default function RootLayout({ children }) {
  return (
    <div className="min-h-screen w-full flex justify-center bg-cover bg-center" style={{ backgroundImage: "url('/assets/images/loginPage.jpg')" }}>
      <div className="flex-center w-[50%]">
        {children}
      </div>
    </div>
  );
}
