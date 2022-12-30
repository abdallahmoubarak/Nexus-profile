export default function Input({ placeholder, value }: inputTypes) {
  return (
    <input
      className="rounded-full shadow-[0_0px_5px_0px_rgba(0,0,0,0.3)] w-96 outline-none py-1 px-4 max-w-full"
      placeholder={placeholder}
      value={value}
    />
  );
}

type inputTypes = {
  placeholder: string;
  value?: string;
};
