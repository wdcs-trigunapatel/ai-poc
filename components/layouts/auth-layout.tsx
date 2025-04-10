export function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      <div className="flex items-center justify-center p-6">
        {children}
      </div>
      <div className="hidden lg:block bg-[#F8F9FC]">
        <div className="h-full flex items-center justify-center p-8">
          <div className="w-[50%] h-[50%] flex items-center justify-center">
            <img 
              src="data:image/svg+xml,%3Csvg width='400' height='400' viewBox='0 0 400 400' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='400' rx='200' fill='%23E4E4E7'/%3E%3Cpath d='M200 120L280 240H120L200 120Z' fill='%238C89B4'/%3E%3C/svg%3E" 
              alt="Placeholder" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}