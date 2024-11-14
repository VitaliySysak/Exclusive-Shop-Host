interface redButtonProps {
  text: string;
}

export default function RedButton({ text }: redButtonProps) {
  return (
    <button className="bg-[#DB4444] text-white px-[calc(48px/2.5)] py-[calc(16px/2.5)] rounded-[4px] text-[16px] hidden sm:block md:px-[calc(48px/1.5)] md:py-[calc(16px/1.5)] md:font-bold lg:px-[48px] lg:py-[16px]">
      {text}
    </button>
  );
}
