interface LoaderProps {
  loading: boolean;
}

export default function Loader({ loading }: LoaderProps) {
  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col pointer-events-none">
      <div className="w-full h-1/6 bg-white animate-stripe-1 pointer-events-auto shadow-sm"></div>
      <div className="w-full h-1/6 bg-white animate-stripe-2 pointer-events-auto shadow-sm"></div>
      <div className="w-full h-1/6 bg-white animate-stripe-3 pointer-events-auto shadow-sm"></div>
      <div className="w-full h-1/6 bg-white animate-stripe-4 pointer-events-auto shadow-sm"></div>
      <div className="w-full h-1/6 bg-white animate-stripe-5 pointer-events-auto shadow-sm"></div>
      <div className="w-full h-1/6 bg-white animate-stripe-6 pointer-events-auto shadow-sm"></div>
    </div>
  );
}
